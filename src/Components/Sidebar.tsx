import Image from "next/image";
import React, { Dispatch, SetStateAction } from "react";
import { scroller } from "react-scroll";

const Sidebar = ({
  isSidebarOpen,
  setIsSidebarOpen,
}: {
  isSidebarOpen: boolean;
  setIsSidebarOpen: Dispatch<SetStateAction<boolean>>;
}) => {
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
          About us
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
          Benefits
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
          Contact us
        </p>
        <p>Call now</p>
      </div>
      <div className="fixed bottom-0 mb-16 w-full text-center font-light text-black">
        <div className="pb-12">
          <p className="text-base">Phone number: +1 (504) 717-9684</p>
          <p className="mt-4 text-base">Email: TudaFreight@gmail.com </p>
        </div>
        <div className="mx-auto flex w-fit gap-x-5">
          <div className="h-[25px] w-16 rounded-xl bg-selected-language">
            <p className="pt-0.5 align-middle text-sm">EN</p>
          </div>
          <div className="h-[25px] w-16 rounded-xl bg-language">
            <p className="pt-0.5 align-middle text-sm">ES</p>
          </div>
          <div className="h-[25px] w-16 rounded-xl bg-language">
            <p className="pt-0.5 align-middle text-sm">RU</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
