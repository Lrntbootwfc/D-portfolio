import { useEffect, useRef, useState, type ReactNode, type Key } from 'react';

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: 'div' | 'section' | 'li' | 'article' | 'span';
  key?: Key;
};

/**
 * High-performance, zero-lag scroll reveal.
 * Uses generous pre-fetching rootMargin (350px) and instant threshold (0)
 * so elements are already visible BEFORE they reach the user's viewport.
 */
export default function Reveal({ children, className = '', as = 'div' }: RevealProps) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Immediately mark visible if anywhere near the viewport on mount
    const rect = el.getBoundingClientRect();
    if (rect.top <= window.innerHeight + 400) {
      setVisible(true);
      return;
    }

    // Otherwise observe with a 350px pre-trigger buffer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0, rootMargin: '350px 0px 150px 0px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const Tag = as;
  return (
    <Tag
      ref={ref as never}
      className={`reveal ${visible ? 'is-visible' : ''} ${className}`}
    >
      {children}
    </Tag>
  );
}
