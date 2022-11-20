import Image from "next/image";
import React, { Dispatch, SetStateAction, useEffect } from "react";
import { scroller } from "react-scroll";
import { langaugeTexts, language, languageText } from "../translations";

const Sidebar = ({
  isSidebarOpen,
  setIsSidebarOpen,
  setSelctedLanguageText,
  selectedLanguageText,
}: {
  isSidebarOpen: boolean;
  setIsSidebarOpen: Dispatch<SetStateAction<boolean>>;
  setSelctedLanguageText: Dispatch<SetStateAction<languageText>>;
  selectedLanguageText: languageText;
}) => {
  const selectedLanguage = selectedLanguageText.language;
  return (
    <div
      className={`fixed top-0 right-0 z-10 h-full w-[325px] bg-sidebar pt-24 text-white duration-300 ease-in-out ${
        isSidebarOpen ? "translate-x-0 " : "translate-x-full"
      }`}
    >
      <Image src="/logo-text.png" width={330} height={45} />
      <div className="text-md mr-10 mt-8 flex flex-col gap-y-2 text-right font-medium text-black">
        <p
          onClick={() => {
            scroller.scrollTo("about_us", {
              duration: 500,
              delay: 0,
              smooth: "easeInOutQuart",
            });
            setIsSidebarOpen(false);
          }}
        >
          {selectedLanguageText.navbar.aboutUs}
        </p>
        <p
          onClick={() => {
            scroller.scrollTo("benefits", {
              duration: 500,
              delay: 0,
              smooth: "easeInOutQuart",
            });
            setIsSidebarOpen(false);
          }}
        >
          {selectedLanguageText.navbar.benefits}
        </p>
        <p
          onClick={() => {
            scroller.scrollTo("contact_us", {
              duration: 500,
              delay: 0,
              smooth: "easeInOutQuart",
            });
            setIsSidebarOpen(false);
          }}
        >
          {selectedLanguageText.navbar.contactUs}
        </p>
        <a href="tel:+15047179684">{selectedLanguageText.navbar.callNow}</a>
      </div>
      <div className="fixed bottom-0 mb-16 w-full text-center font-light text-black">
        <div className="pb-12">
          <a className="text-base" href="tel:+15047179684">
            Phone number: +1 (504) 717-9684
          </a>
          <p className="mt-4 text-base">Email: TudaFreight@gmail.com </p>
        </div>
        <div className="mx-auto flex w-fit gap-x-5">
          {["EN", "ES", "RU"].map((lang) => (
            <div
              onClick={() => {
                setSelctedLanguageText(
                  langaugeTexts[lang.toLowerCase() as language]
                );
              }}
              className={
                selectedLanguage == lang.toLowerCase()
                  ? "rounded-xl bg-selected-language"
                  : "mouse-pointer rounded-xl bg-language"
              }
            >
              <div className="h-[25px] w-16 ">
                <p className="pt-0.5 align-middle text-sm">{lang}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
