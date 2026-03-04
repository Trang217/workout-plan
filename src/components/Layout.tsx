import type { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";

interface LayoutProps {
  children: ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <div className="bg-olive-200 min-h-screen min-w-screen relative">
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
