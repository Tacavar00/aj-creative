import { clsx } from 'clsx';

interface Props {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

export default function GradientButton({ children, href, onClick, size = 'md', className, type = 'button' }: Props) {
  const sizes = { sm: 'px-4 py-2 text-sm', md: 'px-6 py-3 text-base', lg: 'px-8 py-4 text-lg' };
  const base = clsx(
    'inline-flex items-center justify-center font-semibold rounded-xl gap-2',
    'bg-gradient-to-r from-violet-600 via-blue-600 to-pink-600',
    'hover:from-violet-500 hover:via-blue-500 hover:to-pink-500',
    'hover:scale-[1.02] active:scale-[0.98] transition-all duration-200',
    'text-white shadow-lg shadow-violet-500/25',
    sizes[size],
    className
  );
  if (href) return <a href={href} className={base}>{children}</a>;
  return <button type={type} onClick={onClick} className={base}>{children}</button>;
}
