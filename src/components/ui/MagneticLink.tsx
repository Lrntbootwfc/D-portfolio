import type { ReactNode } from 'react';

type MagneticLinkProps = {
  children: ReactNode;
  href: string;
  external?: boolean;
  className?: string;
  onClick?: () => void;
};

export default function MagneticLink({ children, href, external, className = '', onClick }: MagneticLinkProps) {
  const isExternal = external ?? href.startsWith('http');
  return (
    <a
      href={href}
      onClick={onClick}
      className={`group inline-flex items-center gap-1.5 font-medium transition-colors duration-200 ${className}`}
      {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    >
      {children}
    </a>
  );
}
