type Props = {
  description: string;
};

const ImageDescription = ({ description }: Props) => {
  return (
    <p className="font-noto-sans text-sm tracking-wide text-secondary03">
      {description}
    </p>
  );
};

export default ImageDescription;
