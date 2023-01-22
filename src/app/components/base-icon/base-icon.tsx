import React, {
  cloneElement,
  PropsWithChildren,
  ReactElement,
  useState,
} from "react";

type Props = {
  icon: ReactElement;
  color?: string;
  hoverColor: string;
  size?: number;
};

export const BaseIcon = ({
  icon,
  hoverColor,
  color = "#42404b",
  size = 30,
  ...rest
}: Props) => {
  const [fill, setFill] = useState(color);

  const props = {
    ...rest,
    size,
    fill,
    onMouseEnter: () => setFill(hoverColor),
    onMouseLeave: () => setFill(color),
    className: `hover:text-[${hoverColor}] hover:scale-110 duration-300 text-inherit`,
  };

  return (
    <div className={`hover:text-[${hoverColor}] text-[${color}]`}>
      {cloneElement(icon, props)}
    </div>
  );
};
