import React from "react";
import PhoneSVGCall from "./PhoneSVGCall";

const CallNowPopup = () => {
  return (
    <a href="tel:+15047179684" className="no-underline">
      <div className="fixed bottom-7 right-7">
        <PhoneSVGCall />
      </div>
    </a>
  );
};

export default CallNowPopup;
