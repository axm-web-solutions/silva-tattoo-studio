import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import logo from "@/assets/logo.jpg";

const setHeadAssets = () => {
  const head = document.head;

  const ensureLink = (rel: string, attrs: Record<string, string>) => {
    let link = head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
    if (!link) {
      link = document.createElement("link");
      link.rel = rel;
      head.appendChild(link);
    }
    Object.entries(attrs).forEach(([key, value]) => {
      if (value) link!.setAttribute(key, value);
    });
  };

  const ensureMeta = (name: string, content: string) => {
    if (!content) return;
    let meta =
      head.querySelector<HTMLMetaElement>(`meta[name="${name}"]`) ??
      head.querySelector<HTMLMetaElement>(`meta[property="${name}"]`);
    if (!meta) {
      meta = document.createElement("meta");
      if (name.startsWith("og:") || name.startsWith("twitter:")) {
        meta.setAttribute("property", name);
      } else {
        meta.setAttribute("name", name);
      }
      head.appendChild(meta);
    }
    meta.setAttribute("content", content);
  };

  ensureLink("icon", { type: "image/jpeg", href: logo });
  ensureLink("apple-touch-icon", { href: logo });

  ensureMeta("og:image", logo);
  ensureMeta("twitter:image", logo);
};

setHeadAssets();

createRoot(document.getElementById("root")!).render(<App />);
