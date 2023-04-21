import Image from 'next/image';

type Props = {
  src: string;
};

const AboutIcon = ({ src }: Props) => {
  return (
    <>
      <Image
        // priority
        width={70}
        height={70}
        src={src}
        alt="skill or working experiment icon"
      />
    </>
  );
};

export default AboutIcon;
