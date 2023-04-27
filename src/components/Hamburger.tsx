import { clsx } from 'clsx';
import { FC } from 'react';

type Props = {
  className?: string;
  isOpen: boolean;
  handleHamburgerClick: Function;
};
const Hamburger: FC<Props> = ({ handleHamburgerClick, className, isOpen }) => {
  // console.log('Render Hamburger...');
  let beforeHamburger = `before:content-[''] before:absolute before:inset-0 before:h-[1px] before:w-[26px] before:rounded-[1px] before:bg-black`;
  let afterHamburger = `after:content-[''] after:absolute after:inset-0 after:h-[1px] after:w-[26px] after:rounded-[1px] after:bg-black`;
  if (isOpen) {
    beforeHamburger += ` before:animate-beforeHamburgerIn`;
    afterHamburger += ` after:animate-afterHamburgerIn`;
  } else {
    beforeHamburger += ` before:animate-beforeHamburgerOut`;
    afterHamburger += ` after:animate-afterHamburgerOut`;
  }
  return (
    <>
      <div className={`${className}`}>
        <button
          aria-label="menu button"
          className="h-10 w-10 "
          onClick={() => handleHamburgerClick()}
        >
          <div
            className={clsx(
              { 'bg-transparent': isOpen },
              `${beforeHamburger} ${afterHamburger} absolute inset-0 m-auto inline-block h-[1px] w-[26px] rounded-[1px] bg-black transition`
            )}
            // className={`${beforeHamburger} ${afterHamburger} absolute inset-0 m-auto inline-block h-[1px] w-[26px] rounded-[1px] bg-black`}
          ></div>
        </button>
      </div>
    </>
  );
};
export default Hamburger;
