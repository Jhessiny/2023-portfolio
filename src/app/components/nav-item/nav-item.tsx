import React from "react";
import { twMerge } from "tailwind-merge";

type Props = {
  href: string;
  text: string;
  highlight?: boolean;
  light?: boolean;
  className?: string;
  onClick: (params?: unknown) => void;
};

export const NavItem = ({
  href,
  text,
  highlight,
  light,
  className,
  onClick,
}: Props) => {
  const textColor = light ? "text-primary-light" : "text-text-dark";
  const border = highlight ? "border-solid border-2 border-secondary-dark" : "";
  return (
    <li>
      <a
        className={twMerge(
          textColor,
          border,
          "font-bold py-2 px-2 lg:px-4 uppercase inline-block leading-3 text-xs",
          className
        )}
        onClick={onClick}
        href={href}
      >
        {text}
      </a>
    </li>
  );
};
