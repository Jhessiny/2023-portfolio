import React, { ComponentProps, PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

type Props = PropsWithChildren & ComponentProps<"div">;

export const Card = ({ children, className, ...rest }: Props) => {
  return (
    <div
      className={twMerge("bg-white p-4 rounded-sm w-fit ", className)}
      {...rest}
    >
      {children}
    </div>
  );
};
