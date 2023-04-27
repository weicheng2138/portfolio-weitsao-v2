import { useState, ReactNode, FC } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Drawer from '@/components/Drawer';
import Hamburger from '@/components/Hamburger';
import Overlay from '@/components/Overlay';

type Props = {
  children: ReactNode;
  font: string;
};

const Layout: FC<Props> = ({ children, font }) => {
  const [show, setShow] = useState(false);

  function handleHamburgerClick() {
    setShow((prev) => !prev);
  }
  return (
    <>
      <div
        className={`${font} relative flex min-h-screen w-full flex-col justify-between`}
      >
        <div>
          <Header>
            <Hamburger
              className="absolute right-0 top-0 z-50"
              handleHamburgerClick={handleHamburgerClick}
              isOpen={show}
            />
            <Drawer className="fixed right-0 z-40" isShow={show} />
            <Overlay
              className="absolute inset-0 z-30"
              isShow={show}
              handleClick={handleHamburgerClick}
            />
          </Header>
          <main className="flex-1">{children}</main>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
