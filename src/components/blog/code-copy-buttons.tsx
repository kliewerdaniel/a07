"use client";

import { useEffect } from "react";

function CodeCopyButtons() {
  useEffect(() => {
    const preElements = document.querySelectorAll<HTMLPreElement>(".blog-content pre");

    const addButton = (pre: HTMLPreElement) => {
      if (pre.querySelector(".copy-button")) return;

      const button = document.createElement("button");
      button.className =
        "copy-button absolute right-3 top-3 font-mono text-[10px] uppercase tracking-wider px-2 py-1 border border-[var(--color-border)] text-[var(--color-text-tertiary)] hover:text-[var(--color-text)] hover:bg-[var(--color-surface-elevated)] transition-all opacity-0 group-hover:opacity-100";
      button.textContent = "Copy";

      button.addEventListener("click", async () => {
        const code = pre.querySelector("code");
        if (!code) return;
        try {
          await navigator.clipboard.writeText(code.textContent || "");
          button.textContent = "Copied";
          setTimeout(() => (button.textContent = "Copy"), 2000);
        } catch {
          button.textContent = "Error";
          setTimeout(() => (button.textContent = "Copy"), 2000);
        }
      });

      pre.classList.add("group");
      pre.style.position = "relative";
      pre.appendChild(button);
    };

    preElements.forEach(addButton);

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node instanceof HTMLElement) {
            node.querySelectorAll<HTMLPreElement>("pre").forEach(addButton);
          }
        });
      });
    });

    observer.observe(document.querySelector(".blog-content") || document.body, {
      childList: true,
      subtree: true,
    });

    return () => observer.disconnect();
  }, []);

  return null;
}

export { CodeCopyButtons };
