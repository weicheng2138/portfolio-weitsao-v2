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
      width={16}
      height={16}
      alt="github link"
      className="ml-1 inline-block h-4 w-4"
    />
  );
};

export default LinkIcon;
