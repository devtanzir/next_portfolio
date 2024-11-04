import React from "react";

interface LayoutProps {
  children: React.ReactNode;
  className?: string;
  props?: React.HTMLAttributes<HTMLDivElement>;
}
const Layout: React.FC<LayoutProps> = ({ children, className = "", props }) => {
  return (
    <div
      className={`w-full h-full inline-block z-0 bg-light dark:bg-dark p-32 xl:p-24 lg:p-16 md:p-12 sm:p-8 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default Layout;
