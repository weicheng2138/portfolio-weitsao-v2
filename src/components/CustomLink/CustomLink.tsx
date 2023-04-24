import Link from 'next/link';
import GithubSVG from './github.svg';
import ExternalLinkSVG from './external-link.svg';
import Image from 'next/image';

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
          (isGithub ? (
            <Image
              src={GithubSVG}
              width={16}
              height={16}
              alt="github link"
              className="ml-1 inline-block h-4 w-4"
            />
          ) : (
            <Image
              src={ExternalLinkSVG}
              width={16}
              height={16}
              alt="external link"
              className="ml-1 inline-block h-4 w-4"
            />
          ))}
      </a>
    );
  };

  return <>{href !== undefined ? <ExternalLink /> : <NoHrefComponent />}</>;
};

export default CustomLink;
