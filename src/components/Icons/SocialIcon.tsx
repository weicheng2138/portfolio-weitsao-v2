import Image from 'next/image';

type Props = {
  kind: 'behance' | 'instagram' | 'cakeresume' | 'gmail';
  href: string;
};

const srcKind = {
  behance: 'behance.svg',
  instagram: 'ig.svg',
  cakeresume: 'cakeResume.svg',
  gmail: 'gmail.svg',
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
    <>
      <a
        className=" block w-10"
        href={kind === 'gmail' ? `mailto:${href}` : href}
        target="_blank"
        rel="noreferrer noopener"
      >
        <Image width={40} height={40} src={srcKind[kind]} alt="site-icon" />
      </a>
    </>
  );
};

export default SocialIcon;
