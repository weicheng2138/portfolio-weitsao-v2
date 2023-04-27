import Image from 'next/image';
import GithubSVG from './github.svg';
import ExternalLinkSVG from './external-link.svg';

type Props = {
  kind?: 'github' | 'default';
};

const srcKind = {
  github: GithubSVG,
  default: ExternalLinkSVG,
};
const LinkIcon = ({ kind = 'default' }: Props) => {
  return (
    <Image
      src={srcKind[kind]}
      width={48}
      height={48}
      alt="github link"
      className="ml-1 inline-block h-12 w-12"
    />
  );
};

export default LinkIcon;
