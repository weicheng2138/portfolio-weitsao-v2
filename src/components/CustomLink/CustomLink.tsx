import Link from 'next/link';
import { LinkIcon } from '@/components/Icons';

type AnchorProps = React.ComponentPropsWithoutRef<'a'>;
const CustomLink = ({ href, children, ...rest }: AnchorProps) => {
  const isInternalLink = href && href.startsWith('/');
  const isAnchorLink = href && href.startsWith('#');

  if (isInternalLink) return <Link href={href}>{children}</Link>;
  if (isAnchorLink)
    return (
      <a href={href} {...rest}>
        {children}
      </a>
    );

  const NoHrefComponent = () => {
    return <span>There is no href right now</span>;
  };
  const ExternalLink = () => {
    const isGithub = href?.includes('github.com');
    return (
      <a target="_blank" rel="noopener noreferrer" href={href} {...rest}>
        {children}
        {typeof children === 'undefined' &&
          (isGithub ? <LinkIcon kind="github" /> : <LinkIcon />)}
      </a>
    );
  };

  return <>{href !== undefined ? <ExternalLink /> : <NoHrefComponent />}</>;
};

export default CustomLink;
