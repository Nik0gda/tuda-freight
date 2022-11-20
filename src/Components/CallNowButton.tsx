import React from "react";
import Union from "../../public/Union.svg";
import PhoneSVG from "./PhoneSVG";
const CallNowButton = () => {
  return (
    <a href="tel:+15047179684" className="no-underline">
      <div className="h-11 w-36 rounded-3xl bg-call">
        <div className="mx-auto flex h-full w-fit items-center">
          <div className="my-auto mr-3 ml-2 text-lg font-medium text-white">
            Call now
          </div>
          <PhoneSVG />
        </div>
      </div>
    </a>
  );
};

export default CallNowButton;
