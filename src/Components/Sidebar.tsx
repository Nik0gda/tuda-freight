import Image from "next/image";
import React from "react";

const Sidebar = ({ isSidebarOpen }: { isSidebarOpen: boolean }) => {
  return (
    <div
      className={`fixed top-0 right-0 z-10 h-full w-[250px] bg-sidebar pt-24 text-white duration-300 ease-in-out ${
        isSidebarOpen ? "translate-x-0 " : "translate-x-full"
      }`}
    >
      <Image src="/logo-text.png" width={330} height={45} />
      <div className="text-md mr-10 mt-8 flex flex-col gap-y-1 text-right font-medium text-black">
        <p>About us</p>
        <p>Benefits</p>
        <p>Call now</p>
        <p>Contact us</p>
      </div>
    </div>
  );
};

export default Sidebar;
