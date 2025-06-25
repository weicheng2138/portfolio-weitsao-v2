import { FC } from 'react';

type Props = {
  isShow: boolean;
  className: string;
  handleClick: Function;
};
const Overlay: FC<Props> = ({ className, isShow, handleClick }) => {
  return (
    <>
      {isShow && (
        <div
          onClick={() => handleClick()}
          className={`${className} backdrop-blur-sm transition`}
        ></div>
      )}
    </>
  );
};

export default Overlay;
