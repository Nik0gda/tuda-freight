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
      onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      className="fixed top-12 right-7 z-10"
    >
      {isSidebarOpen ? (
        <>
          <span className="block h-[3px] w-5 rotate-45 rounded-sm bg-white" />
          <span className="mt-2.5 block h-[3px] w-5 -rotate-45 rounded-sm bg-white" />
        </>
      ) : (
        <div className="z-10 scale-x-[-1] space-y-1">
          <span className="block h-[3px] w-9 rounded-sm bg-white" />
          <span className="block h-[3px] w-7 rounded-sm bg-white" />
          <span className="block h-[3px] w-6 rounded-sm bg-white" />
        </div>
      )}
    </div>
  );
};

export default NavbarButton;
