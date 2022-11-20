import React from "react";
import { languageText } from "../translations";

const Benefit = ({ description }: { description: string }) => {
  return (
    <div className="flex items-center gap-3 xl:gap-5">
      <svg
        width="15"
        height="19"
        viewBox="0 0 15 19"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M13.7565 8.76492C13.7565 5.39672 3.55129 0.675132 3.55129 0.675132C3.55129 0.675132 1 -0.0470258 1 2.05809C1 4.1632 7.1231 7.73691 7.1231 9C7.12309 10.2631 3.55129 13.4152 2.27564 14.7982C0.999993 16.1811 0.74067 18.2555 3.55129 17.564C6.36191 16.8726 13.7565 12.1331 13.7565 8.76492Z"
          fill="#767CAD"
          stroke="#767DAD"
        />
      </svg>

      <p className="text-md font-semibold uppercase md:text-lg xl:text-xl">
        {description}
      </p>
    </div>
  );
};

const Benefits = ({
  selectedLanguageText,
}: {
  selectedLanguageText: languageText;
}) => {
  return (
    <div className="mx-auto flex w-fit flex-col pt-3 xl:gap-1">
      <Benefit description={selectedLanguageText.benefits[0]!} />
      <Benefit description={selectedLanguageText.benefits[1]!} />
      <Benefit description={selectedLanguageText.benefits[2]!} />
    </div>
  );
};

export default Benefits;
