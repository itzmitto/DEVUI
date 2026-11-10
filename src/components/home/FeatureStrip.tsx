import Icon from "../ui/Icon";

const features = [
  {
    title: "Snel te gebruiken",
    description: "Kopieer en plak direct in je project.",
    icon: "ri-flashlight-fill",
  },
  {
    title: "Modulair & Flexibel",
    description: "Bouw verder met herbruikbare componenten.",
    icon: "ri-stack-line",
  },
  {
    title: "Multi-Stack",
    description: "Ondersteuning voor React, Next.js en HTML/CSS.",
    icon: "ri-code-s-slash-line",
  },
];

export default function FeatureStrip() {
  return (
    <section className="features" aria-label="Voordelen">
      {features.map((feature) => (
        <div className="feature-tile" key={feature.title}>
          <span className="feature-icon">
            <Icon name={feature.icon} />
          </span>
          <div>
            <strong>{feature.title}</strong>
            <p>{feature.description}</p>
          </div>
        </div>
      ))}
    </section>
  );
}
