// components/GoogleSearch.tsx
"use client";
import { useEffect } from "react";

/**
 * EMBEDDED SEARCH
 * 
 * @returns {JSX.Element}
 * Embbed Search Bar, use info@daylun.ca to access and modify
 * Other than sizing, modifications to visuals must be done there
 * Known Bugs: It seems that the engine only searches main 
 */
export default function SearchGoogle() {
  useEffect(() => {
    if (!document.querySelector("script[src*='cse.google.com/cse.js']")) {
      const script = document.createElement("script");
      script.src = "https://cse.google.com/cse.js?cx=92f0fd8eda8b1453f"; // This our custom search engine. 
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div className="w-60 h-12 max-w-xl ">
      <div className="gcse-search"></div>
    </div>
  );
}
