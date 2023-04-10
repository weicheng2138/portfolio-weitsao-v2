import Header from '@/components/Header';
import Footer from '@/components/Footer';

type Props = {
  children: React.ReactNode;
};

function Layout({ children }: Props) {
  return (
    <div className="flex min-h-screen w-full flex-col justify-between">
      <div>
        <Header />
        <main className="flex-1">{children}</main>
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
