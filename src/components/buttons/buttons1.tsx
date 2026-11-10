import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import Icon from "../ui/Icon";

type Props = {
  children?: ReactNode;
  to?: string;
  onClick?: () => void;
  className?: string;
};

// Eerste los herbruikbare button, zoals src/components/buttons/buttons1.tsx.
export default function Buttons1({
  children = "Bekijk Componenten",
  to,
  onClick,
  className = "",
}: Props) {
  const content = (
    <>
      <Icon name="ri-code-s-slash-line" /> <span>{children}</span>
      <Icon name="ri-arrow-right-line" className="button-trailing-icon" />
    </>
  );
  if (to)
    return (
      <Link to={to} className={`glow-btn ${className}`.trim()}>
        {content}
      </Link>
    );
  return (
    <button
      type="button"
      className={`glow-btn ${className}`.trim()}
      onClick={onClick}
    >
      {content}
    </button>
  );
}
