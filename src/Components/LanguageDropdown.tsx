import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import OutsideClickHandler from "react-outside-click-handler";
import { langaugeTexts, language, languageText } from "../translations";

const LanguageDropdown = ({
  setSelctedLanguageText,
}: {
  setSelctedLanguageText: Dispatch<SetStateAction<languageText>>;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<language>("en");

  useEffect(() => {
    setSelctedLanguageText(langaugeTexts[selected]);
  }, [selected]);

  const changeLanguage = (language: language) => {
    setSelected(language);
    setIsOpen(false);
  };

  const toggle = () => {
    console.log("toggle", isOpen);
    setIsOpen(isOpen ? false : true);
  };
  return (
    <OutsideClickHandler
      onOutsideClick={() => {
        setIsOpen(false);
      }}
    >
      <button
        className="inline-flex w-20 items-center rounded-lg px-4 py-2.5 text-center text-sm font-medium text-white focus:outline-none"
        type="button"
        onClick={toggle}
      >
        {selected.toUpperCase()}
        <svg
          className={`ml-2 h-4 w-4 ${isOpen ? "rotate-180" : ""}`}
          aria-hidden="true"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </button>

      <div
        className={`divide-gray-100 z-10  ${
          isOpen ? "" : "hidden"
        } w-24 -translate-x-4  divide-y rounded bg-white shadow-lg`}
        style={{
          position: "absolute",
        }}
      >
        <ul className="text-gray-700 dark:text-gray-200 py-1 text-sm">
          <li>
            <a
              onClick={() => {
                changeLanguage("en");
              }}
              className=" block cursor-pointer py-2 px-4 dark:hover:text-call"
            >
              English
            </a>
          </li>
          <li>
            <a
              onClick={() => {
                changeLanguage("es");
              }}
              className=" block cursor-pointer py-2 px-4 dark:hover:text-call"
            >
              Spanish
            </a>
          </li>
          <li>
            <a
              onClick={() => {
                changeLanguage("ru");
              }}
              className="block cursor-pointer py-2 px-4 dark:hover:text-call"
            >
              Russian
            </a>
          </li>
        </ul>
      </div>
    </OutsideClickHandler>
  );
};
export default LanguageDropdown;
