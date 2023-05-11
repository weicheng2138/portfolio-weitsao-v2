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
          { 'translate-x-full': !isShow },
          className,
          'inset-y-0 h-full min-w-[75vw] bg-slate-400 opacity-80 transition'
        )}
      ></div>
    </>
  );
};

export default Drawer;
