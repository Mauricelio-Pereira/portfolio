import { useEffect } from "react";
import "./index.css";

declare global {
  interface Window {
    gtranslateSettings?: any;
  }
}

const LanguageSwitcher = () => {
  useEffect(() => { 
    window.gtranslateSettings = {
      "default_language":"pt",
      "native_language_names":true,
      "detect_browser_language":true,
      "languages":["pt","en"],
      "wrapper_selector":".gtranslate_wrapper",
      "switcher_horizontal_position":"right",
      "alt_flags":{
        "en":"usa",
        "pt":"brazil"
      }
    }

    if (window?.gtranslateSettings) {
      const script = document.createElement("script");
      script.src = "https://cdn.gtranslate.net/widgets/latest/float.js";
      script.defer = true;
      document.body.appendChild(script);
    }
  }, []);

  return <div className="gtranslate_wrapper"></div>;
};

export default LanguageSwitcher;