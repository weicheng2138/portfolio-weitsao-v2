import Header from '@/components/Header';
import Footer from '@/components/Footer';

type Props = {
  children: React.ReactNode;
  font: string;
};

function Layout({ children, font }: Props) {
  return (
    <div
      className={`${font} flex min-h-screen w-full flex-col justify-between`}
    >
      <div>
        <Header />
        <main className="flex-1">{children}</main>
      </div>
      <Footer />
    </div>
  );
}

export default Layout;