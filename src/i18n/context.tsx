import { createContext, useContext, useMemo, useState, ReactNode } from "react";
import { copyByLocale, I18nCopy, Locale } from "./content";

type I18nContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  copy: I18nCopy;
};

const I18nContext = createContext<I18nContextValue | null>(null);

export const I18nProvider = ({ children }: { children: ReactNode }) => {
  const [locale, setLocale] = useState<Locale>("es");

  const copy = useMemo(() => {
    return copyByLocale[locale] ?? copyByLocale.es;
  }, [locale]);

  const value = useMemo(() => ({ locale, setLocale, copy }), [locale, copy]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
};

export const useI18n = () => {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
};

