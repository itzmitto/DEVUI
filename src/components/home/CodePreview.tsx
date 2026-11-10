import { useState } from "react";
import Icon from "../ui/Icon";

const snippet = `<button
  className="btn-primary"
>
  Get Started
</button>`;

export default function CodePreview() {
  const [copied, setCopied] = useState(false);
  async function copyCode() {
    try {
      await navigator.clipboard.writeText(snippet);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }

  return (
    <div className="code-visual" aria-label="Button.tsx code voorbeeld">
      <div className="code-window-titlebar">
        <div className="window-dots">
          <b />
          <b />
          <b />
        </div>
        <span>Button.tsx</span>
      </div>
      <div className="code-window-body">
        <div className="line-numbers">
          <span>1</span>
          <span>2</span>
          <span>3</span>
          <span>4</span>
          <span>5</span>
          <span>6</span>
        </div>
        <div className="code-syntax" aria-hidden="true">
          <div>
            <span className="pink">&lt;button</span>
          </div>
          <div className="indented">
            <span className="purple">className</span>=
            <span className="green">"btn-primary"</span>
          </div>
          <div>
            <span className="pink">&gt;</span>
          </div>
          <div className="indented">
            <span className="cream">Get Started</span>
          </div>
          <div>
            <span className="pink">&lt;/button&gt;</span>
          </div>
        </div>
      </div>
      <button
        type="button"
        className="copy-code"
        onClick={copyCode}
        aria-label="Kopieer code"
        title={copied ? "Gekopieerd!" : "Kopieer code"}
      >
        <Icon name={copied ? "ri-check-line" : "ri-file-copy-line"} />
      </button>
      {copied && <span className="copied-indicator">Gekopieerd!</span>}
    </div>
  );
}
