import Image from 'next/image';

type Props = {
  src: string;
  className?: string;
};

const AboutPageIcon = ({ src, className }: Props) => {
  return (
    <>
      <Image
        // priority
        width={70}
        height={70}
        src={src}
        alt="skill or working experiment icon"
        className={className}
      />
    </>
  );
};

export default AboutPageIcon;
