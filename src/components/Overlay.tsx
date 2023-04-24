import { FC } from 'react';

type Props = {
  isShow: boolean;
  className: string;
};
const Overlay: FC<Props> = ({ className, isShow }) => {
  return (
    <>
      {!isShow ? (
        <div></div>
      ) : (
        <div className={`${className} inset-0 backdrop-blur transition`}></div>
      )}
    </>
  );
};

export default Overlay;
