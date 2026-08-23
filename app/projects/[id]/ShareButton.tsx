"use client";

import { useState } from "react";

export default function ShareButton() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    if (typeof window === "undefined") return;
    try {
      if (navigator.clipboard) {
        await navigator.clipboard.writeText(window.location.href);
      } else {
        const input = document.createElement("input");
        input.value = window.location.href;
        document.body.appendChild(input);
        input.select();
        document.execCommand("copy");
        document.body.removeChild(input);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback ignore
    }
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      className="detail-share-btn"
      aria-label="프로젝트 링크 복사"
      title="링크 복사"
    >
      <span className="share-icon">{copied ? "✓" : "🔗"}</span>
      <span className="share-text">{copied ? "복사완료!" : "링크 복사"}</span>
    </button>
  );
}
