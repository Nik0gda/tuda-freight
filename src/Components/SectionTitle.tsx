import React from "react";

type SectionTitleProps = {
  title: string;
  textSizeBig?: boolean;
};

const SectionTitle = ({ title, textSizeBig }: SectionTitleProps) => {
  if (textSizeBig)
    return (
      <h2 className={`text-2xl font-extrabold text-title md:text-3xl`}>
        {title}
      </h2>
    );
  return <h2 className={`text-2xl font-extrabold text-title`}>{title}</h2>;
};

export default SectionTitle;
