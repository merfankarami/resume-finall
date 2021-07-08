export default function ExternalLink({
    children,
    className,
    href,
    target = '_blank',
  }) {
    return (
      <a
        href={href}
        target={target}
        rel="noopener noreferrer"
        className={className}>
        {children}
      </a>
    );
  }