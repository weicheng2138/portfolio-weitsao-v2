import { FC } from 'react';

type Props = {
  className?: string;
  handleHamburgerClick: Function;
};
const Hamburger: FC<Props> = ({ handleHamburgerClick, className }) => {
  return (
    <>
      <div className={`${className}`}>
        <button onClick={() => handleHamburgerClick()}>Click</button>
      </div>
    </>
  );
};
export default Hamburger;
