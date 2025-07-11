import { clsx } from 'clsx';
import { FC } from 'react';

type Props = {
  className?: string;
  isOpen: boolean;
  handleHamburgerClick: Function;
};
const Hamburger: FC<Props> = ({ handleHamburgerClick, className, isOpen }) => {
  let beforeHamburger = `before:content-[''] before:absolute before:inset-0 before:h-[2px] before:w-[26px] before:rounded-[1px] before:bg-black`;
  let afterHamburger = `after:content-[''] after:absolute after:inset-0 after:h-[2px] after:w-[26px] after:rounded-[1px] after:bg-black`;

  // FIX: CLS problem for being considered as janking animation
  if (isOpen) {
    beforeHamburger += ` before:animate-before-hamburger-in`;
    afterHamburger += ` after:animate-after-hamburger-in`;
  } else {
    beforeHamburger += ` before:animate-before-hamburger-out`;
    afterHamburger += ` after:animate-after-hamburger-out`;
  }
  return (
    <>
      <button
        aria-label="menu button"
        className={`${className} h-10 w-10`}
        onClick={() => handleHamburgerClick()}
      >
        <div
          className={clsx(
            { 'bg-transparent': isOpen },
            `${beforeHamburger} ${afterHamburger} absolute inset-0 m-auto inline-block h-[2px] w-[26px] rounded-[1px] bg-black transition`
          )}
        ></div>
      </button>
    </>
  );
};
export default Hamburger;
