import { FC } from 'react';

type Props = {
  className?: string;
  isShow: boolean;
};
const Drawer: FC<Props> = ({ isShow, className }) => {
  return (
    <>
      {isShow && (
        <div className={`${className} min-h-screen w-[40%] bg-slate-400`}></div>
      )}
    </>
  );
};

export default Drawer;
