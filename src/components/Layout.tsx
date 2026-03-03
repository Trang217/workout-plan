import type { ReactNode } from "react";
import Header from "./Header";

interface LayoutProps {
  children: ReactNode;
}

function Layout({ children }: LayoutProps) {
  const footer = (
    <footer className="absolute bottom-0 left-[50vw]">
      <p>Build by Jenny</p>
    </footer>
  );
  return (
    <div className="bg-olive-200 min-h-screen min-w-screen relative">
      <Header />
      {children}
      {footer}
    </div>
  );
}

export default Layout;
