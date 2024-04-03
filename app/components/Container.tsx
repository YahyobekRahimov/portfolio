import { ReactNode } from "react";

export default function Container({
  className,
  children,
}: {
  className?: string;
  children?: ReactNode;
}) {
  return (
    <div
      className={`container mx-auto px-[1.3rem] md:px-[3rem] lg:px-[5rem] ${className}`}
    >
      {children}
    </div>
  );
}
