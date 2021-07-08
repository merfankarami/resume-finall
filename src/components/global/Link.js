import Link from 'next/link';

export default function CustomLink({ children, className, href }) {
  return (
    <Link href={href}>
      <span className={className}>{children}</span>
    </Link>
  );
}
