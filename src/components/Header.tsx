import { ReactNode, FC } from 'react';

type Props = {
  children: ReactNode;
};
const Header: FC<Props> = ({ children }) => {
  return (
    <>
      <header className="h-20">{children}</header>
    </>
  );
};
export default Header;
