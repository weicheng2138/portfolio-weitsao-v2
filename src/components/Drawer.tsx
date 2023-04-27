import clsx from 'clsx';
import { FC } from 'react';

type Props = {
  className?: string;
  isShow: boolean;
};
const Drawer: FC<Props> = ({ isShow, className }) => {
  return (
    <>
      <div
        className={clsx(
          { 'translate-x-0': isShow },
          className,
          'inset-y-0 h-full w-[40%] translate-x-full bg-slate-400 transition'
        )}
      ></div>
    </>
  );
};

export default Drawer;
