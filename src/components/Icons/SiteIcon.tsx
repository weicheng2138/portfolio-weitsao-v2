import Image from 'next/image';
import SiteSVG from './weitsao-icon.svg';

type Props = {
  className?: string;
};
const SiteIcon = ({ className }: Props) => {
  return (
    <>
      {className ? (
        <Image
          width={0}
          height={0}
          src={SiteSVG}
          alt="site-icon"
          className={className}
        />
      ) : (
        <Image width={40} height={40} src={SiteSVG} alt="site-icon" />
      )}
    </>
  );
};

export default SiteIcon;
