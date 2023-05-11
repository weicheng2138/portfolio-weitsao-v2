import { ReactNode, FC } from 'react';

type Props = {
  children: ReactNode;
  className?: string;
};
const Header: FC<Props> = ({ children, className }) => {
  return (
    <>
      <header className={`${className} h-20 px-2 py-4`}>{children}</header>
    </>
  );
};
export default Header;
