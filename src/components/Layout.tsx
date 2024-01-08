import { useState, ReactNode, FC, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Drawer from '@/components/Drawer';
import Hamburger from '@/components/Hamburger';
import Overlay from '@/components/Overlay';
import TopButton from '@/components/TopButton';

type Props = {
  children: ReactNode;
  font: string;
};

const Layout: FC<Props> = ({ children, font }) => {
  const [show, setShow] = useState(false);

  function handleHamburgerClick() {
    setShow((prev) => !prev);
  }

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 501) {
        setShow(false);
      }
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [show]);
  return (
    <>
      <div
        className={`${font} relative flex min-h-screen w-full flex-col justify-between bg-secondary01`}
      >
        <Header className="sticky top-0 z-20" />
        <Hamburger
          className="fixed right-0 top-0 z-50 mr-4 mt-2 sm:hidden"
          handleHamburgerClick={handleHamburgerClick}
          isOpen={show}
        />
        <main className="relative">{children}</main>

        <Drawer
          className="fixed right-0 z-40"
          isShow={show}
          setShow={setShow}
        />
        <Overlay
          className="absolute inset-0 z-30"
          isShow={show}
          handleClick={handleHamburgerClick}
        />
        <Footer />
        <TopButton />
      </div>
    </>
  );
};

export default Layout;
