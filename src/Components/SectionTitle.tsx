import React from "react";

type SectionTitleProps = {
  title: string;
};

const SectionTitle = ({ title }: SectionTitleProps) => {
  return (
    <h2 className={`text-2xl font-extrabold leading-loose text-title`}>
      {title}
    </h2>
  );
};

export default SectionTitle;
