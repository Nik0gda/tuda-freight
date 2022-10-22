import React from "react";
import SectionTitle from "./SectionTitle";

const TextSection = ({ title, children }: { title: string; children: any }) => {
  return (
    <div className="w-screen pt-20">
      <div className="mx-auto w-80 text-center">
        <SectionTitle title={title} />
      </div>
      <div className="mx-auto w-72 pt-5 text-center text-xl font-light text-black">
        {children}
      </div>
    </div>
  );
};

export default TextSection;
