import Navigation from "./Navigation";
import Footer from "./Footer";
interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <div className="lg:flex max-w-screen-2xl mx-auto">
      <Navigation />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
