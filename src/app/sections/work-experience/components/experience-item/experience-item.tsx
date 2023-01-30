import React from "react";

type Props = {
  title: string;
  company: string;
  description: string;
  date: string;
};

export const ExperienceItem = ({
  title,
  description,
  date,
  company,
}: Props) => {
  return (
    <div className="text-text-dark w-full">
      <h3 className="font-bold uppercase text-sm text-primary-dark">{title}</h3>
      <p className="text-sm">
        <span>{company} - </span>
        <span>{date}</span>
      </p>
      <p className="text-sm">{description}</p>
    </div>
  );
};
