import Image from 'next/image';
import BehanceSVG from './behance.svg';
import InstagramSVG from './ig.svg';
import CakeresumeSVG from './cakeResume.svg';
import GmailSVG from './gmail.svg';

type Props = {
  kind: 'behance' | 'instagram' | 'cakeresume' | 'gmail';
  href: string;
};

const srcKind = {
  behance: BehanceSVG,
  instagram: InstagramSVG,
  cakeresume: CakeresumeSVG,
  gmail: GmailSVG,
};
const SocialIcon = ({ kind, href }: Props) => {
  if (
    !href ||
    (kind === 'gmail' &&
      !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(href))
  ) {
    return null;
  }
  return (
    <a
      className=" block w-10"
      href={kind === 'gmail' ? `mailto:${href}` : href}
      target="_blank"
      rel="noreferrer noopener"
    >
      <Image width={40} height={40} src={srcKind[kind]} alt="site-icon" />
    </a>
  );
};

export default SocialIcon;
