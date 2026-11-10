import { Link } from "react-router-dom";
import Icon from "../ui/Icon";

type Props = {
  title: string;
  description: string;
  to: string;
  variant: "buttons" | "cards" | "forms" | "navigation";
};

export default function CategoryCard({
  title,
  description,
  to,
  variant,
}: Props) {
  return (
    <Link to={to} className="category-card" aria-label={`Bekijk ${title}`}>
      <div className={`category-preview preview-${variant}`} aria-hidden="true">
        {variant === "buttons" && (
          <div className="demo-glow-button">
            Button <Icon name="ri-arrow-right-line" />
          </div>
        )}
        {variant === "cards" && (
          <div className="demo-preview-card">
            <div className="demo-image">
              <span />
              <span />
            </div>
            <div className="demo-lines">
              <span />
              <span />
              <span />
            </div>
          </div>
        )}
        {variant === "forms" && (
          <div className="demo-form">
            <div className="demo-field">Emailadres</div>
            <div className="demo-field">Password</div>
            <div className="demo-submit" />
          </div>
        )}
        {variant === "navigation" && (
          <div className="demo-nav">
            <div className="selected">
              <Icon name="ri-home-5-fill" />
            </div>
            <Icon name="ri-layout-grid-line" />
            <Icon name="ri-user-3-fill" />
          </div>
        )}
      </div>
      <div className="category-card-text">
        <div>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
        <span className="card-arrow">
          <Icon name="ri-arrow-right-line" />
        </span>
      </div>
    </Link>
  );
}
