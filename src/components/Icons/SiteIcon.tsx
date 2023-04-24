import Image from 'next/image';
import SiteSVG from './weitsao-icon.svg';

const SiteIcon = () => {
  return (
    <>
      <Image width={40} height={40} src={SiteSVG} alt="site-icon" />
    </>
  );
};

export default SiteIcon;
