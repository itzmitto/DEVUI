import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import Icon from "../ui/Icon";

type Props = {
  children?: ReactNode;
  to?: string;
  download?: string;
  href?: string;
  className?: string;
};

// Tweede button, een outline-variant. Je kunt hier later meer props aan toevoegen.
export default function Buttons2({
  children = "Starter Pack Downloaden",
  to,
  href,
  download,
  className = "",
}: Props) {
  const content = (
    <>
      <Icon name="ri-download-line" />
      <span>{children}</span>
    </>
  );
  if (href)
    return (
      <a
        href={href}
        download={download}
        className={`outline-btn ${className}`.trim()}
      >
        {content}
      </a>
    );
  if (to)
    return (
      <Link to={to} className={`outline-btn ${className}`.trim()}>
        {content}
      </Link>
    );
  return (
    <button type="button" className={`outline-btn ${className}`.trim()}>
      {content}
    </button>
  );
}
