import React from "react";
interface ChildrenProps {
  children: React.ReactNode;
  className?: string;
}
export const Wrapper: React.FC<ChildrenProps> = ({ children, className }) => {
  return (
    <div
      className={`flex flex-col gap-3 items-start justify-start xl:col-span-4 md:order-2 md:col-span-8 ${className}`}
    >
      {children}
    </div>
  );
};
export const Title: React.FC<ChildrenProps> = ({ children, className }) => {
  return (
    <h2
      className={`mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75 ${className}`}
    >
      {children}
    </h2>
  );
};
export const MiniTitle: React.FC<ChildrenProps> = ({ children, className }) => {
  return (
    <p
      className={`text-lg font-semibold text-dark/75 dark:text-light/75 block mb-1 uppercase ${className}`}
    >
      {children}
    </p>
  );
};
export const Des: React.FC<ChildrenProps> = ({ children, className }) => {
  return (
    <p className={`font-medium text-dark dark:text-light ${className}`}>
      {children}
    </p>
  );
};
