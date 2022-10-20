import React from "react";

//on click change state passed as prop
const NavbarButton = ({
  isSidebarOpen,
  setIsSidebarOpen,
}: {
  isSidebarOpen: boolean;
  setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <div
      className="fixed top-12 right-7 z-10 scale-x-[-1] space-y-1"
      onClick={() => setIsSidebarOpen(!isSidebarOpen)}
    >
      <span className="block h-[3px] w-9 rounded-sm bg-white" />
      <span className="block h-[3px] w-7 rounded-sm bg-white" />
      <span className="block h-[3px] w-6 rounded-sm bg-white" />
    </div>
  );
};

export default NavbarButton;
