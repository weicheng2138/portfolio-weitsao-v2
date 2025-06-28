import Image from 'next/image';
import BehanceSVG from './behance.svg';
import InstagramSVG from './ig.svg';
import CakeresumeSVG from './cakeResume.svg';
import GmailSVG from './gmail.svg';
import LinkedinSVG from './linkedin.svg';

type Props = {
  kind: 'behance' | 'instagram' | 'cakeresume' | 'gmail' | 'linkedin';
  href: string;
  height?: number;
  width?: number;
};

const srcKind = {
  behance: BehanceSVG,
  instagram: InstagramSVG,
  cakeresume: CakeresumeSVG,
  gmail: GmailSVG,
  linkedin: LinkedinSVG,
};
const SocialIcon = ({ kind, href, height = 48, width = 48 }: Props) => {
  if (
    !href ||
    (kind === 'gmail' &&
      !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(href))
  ) {
    return null;
  }
  return (
    <a
      className="block w-10"
      href={kind === 'gmail' ? `mailto:${href}` : href}
      target="_blank"
      rel="noreferrer noopener"
    >
      <Image
        width={width}
        height={height}
        src={srcKind[kind]}
        alt="site-icon"
      />
    </a>
  );
};

export default SocialIcon;
