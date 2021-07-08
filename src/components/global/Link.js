import Link from 'next/link';

export default function CustomLink({ children, className, href }) {
  return (
    <Link href={href}>
      <a className={className}>{children}</a>
    </Link>
  );
}
