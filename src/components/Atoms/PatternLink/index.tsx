import Link from 'next/link'
export interface LinkProps {
  id?: string;
  children: React.ReactNode;
  href?: {
    pathname?: string,
    query?: any,
  } | any;
  theme?: 'dark' | 'light';
  className?: string;
  as?: string;
  passHref?: boolean;
  replace?: boolean;
  scroll?: boolean;
  shallow?: boolean;
  prefetch?: boolean;
  locale?: string | false;
}

export function PatternLink({ id, href = '/', children, theme = 'light', className, as, passHref, replace, scroll, shallow, prefetch, locale }: LinkProps) {

  const color = theme === 'dark' ?
    'text-brand-white hover:decoration-1 hover:underline cursor-pointer'
    :
    'text-brand-secondary-dark hover:cursor-pointer hover:underline hover:text-brand-primary'
  return (
    <Link
      id={id}
      className={`${color} ${className}`}
      passHref={passHref}
      href={href}
      as={as}
      children={children}
      replace={replace}
      scroll={scroll}
      shallow={shallow}
      prefetch={prefetch}
      locale={locale}
    />)
}