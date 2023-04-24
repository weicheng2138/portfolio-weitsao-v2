import { ReactNode, FC } from 'react';

type Props = {
  children: ReactNode;
};
const Header: FC<Props> = ({ children }) => {
  return <>{children}</>;
};
export default Header;
