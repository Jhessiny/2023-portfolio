import React, { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

export const Container = ({ children }: PropsWithChildren) => {
  return (
    <div className={twMerge("max-w-largeDesktop w-full mx-auto relative")}>
      {children}
    </div>
  );
};
