import Image from "next/image";
import React from "react";
import { languageText } from "../translations";
import SectionTitle from "./SectionTitle";

const WhoAreWe = ({
  selectedLanguageText,
}: {
  selectedLanguageText: languageText;
}) => {
  return (
    <div className="flex flex-col gap-16">
      <div className="mx-auto flex w-fit items-center pt-20 md:gap-5 lg:gap-14 xl:gap-32">
        <div>
          <div className="mx-auto w-80 text-center">
            <SectionTitle title={selectedLanguageText.textTitleOne} />
          </div>
          <div className="mx-auto w-[410px] pt-5 text-center text-xl font-light text-black">
            {selectedLanguageText.textDescriptionOne}
          </div>
        </div>
        <img
          src="/phone.jpg"
          alt="Phone image"
          className="h-[350px] w-[600px] translate-x-20 rounded-[37px] object-cover"
        />
      </div>
      <div className="mx-auto flex w-fit items-center pt-20 md:gap-5 lg:gap-14 xl:gap-32">
        <img
          src="/truck.jpg"
          alt="Phone image"
          className="h-[323px] w-[677px] rounded-[37px] object-cover md:-translate-x-40 lg:-translate-x-20"
        />
        <div className="md:-translate-x-28 lg:-translate-x-4">
          <div className="mx-auto w-80 text-center">
            <SectionTitle title={selectedLanguageText.textTitleTwo} />
          </div>
          <div className="mx-auto pt-5 text-center text-xl font-light text-black md:w-[300px] lg:w-[410px] ">
            {selectedLanguageText.textDescriptionTwoP1}
            <br />
            <br />
            {selectedLanguageText.textDescriptionTwoP2}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoAreWe;
