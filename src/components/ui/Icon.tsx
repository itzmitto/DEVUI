type IconProps = {
  name: string;
  className?: string;
  label?: string;
};

// De iconen worden geladen vanuit de CDN-link in index.html.
export default function Icon({ name, className = "", label }: IconProps) {
  return (
    <i
      className={`${name} ${className}`.trim()}
      aria-label={label}
      aria-hidden={label ? undefined : true}
      role={label ? "img" : undefined}
    />
  );
}
