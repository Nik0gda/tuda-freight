import Image from "next/image";
import React from "react";

const Sidebar = ({ isSidebarOpen }: { isSidebarOpen: boolean }) => {
  return (
    <div
      className={`fixed top-0 right-0 z-10 h-full w-[325px] bg-sidebar pt-24 text-white duration-300 ease-in-out ${
        isSidebarOpen ? "translate-x-0 " : "translate-x-full"
      }`}
    >
      <Image src="/logo-text.png" width={330} height={45} />
      <div className="text-md mr-10 mt-8 flex flex-col gap-y-2 text-right font-medium text-black">
        <p>About us</p>
        <p>Benefits</p>
        <p>Call now</p>
        <p>Contact us</p>
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
