import Navigation from "./Navigation";
interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  return <div className="flex">{children}</div>;
}

export default Layout;
