import React from "react";

type Props = {
  href: string;
  text: string;
  highlight?: boolean;
};

export const NavItem = ({ href, text, highlight }: Props) => {
  const textColor = highlight ? `"text-text-dark` : "text-text-dark";
  const border = highlight ? "border-solid border-2 border-secondary-dark" : "";
  return (
    <li>
      <a
        className={`${textColor} ${border} font-bold text-xs py-2 px-4 uppercase inline-block leading-3`}
        href={href}
      >
        {text}
      </a>
    </li>
  );
};
