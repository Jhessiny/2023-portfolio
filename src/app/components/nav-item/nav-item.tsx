import React from "react";

type Props = {
  href: string;
  text: string;
  highlight?: boolean;
  light?: boolean;
};

export const NavItem = ({ href, text, highlight, light }: Props) => {
  const textColor = light ? `"text-primary-light` : "text-text-dark";
  const border = highlight ? "border-solid border-2 border-secondary-dark" : "";
  return (
    <li>
      <a
        className={`${textColor} ${border} font-bold text-xs py-2 px-2 lg:px-4 uppercase inline-block leading-3`}
        href={href}
      >
        {text}
      </a>
    </li>
  );
};
