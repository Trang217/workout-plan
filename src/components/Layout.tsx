import type { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

function Layout({ children }: LayoutProps) {
  const header = (
    <header>
      <h1 className="text-4xl text-center my-16"> The Working out Program</h1>
      <p className="text-2xl text-center">
        <strong>The 30 Simple Workouts Program</strong>
      </p>
    </header>
  );

  const footer = (
    <footer className="absolute bottom-0 left-[50vw]">
      <p>Build by Jenny</p>
    </footer>
  );
  return (
    <>
      {header}
      {children}
      {footer}
    </>
  );
}

export default Layout;
