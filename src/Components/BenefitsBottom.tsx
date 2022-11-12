import React from "react";
import CarSVG from "./CarSVG";
import HeartSVG from "./HeartSVG";
import HomeSVG from "./HomeSVG";
import SectionTitle from "./SectionTitle";
import WalletSVG from "./WalletSVG";

const BenefitsBottom = () => {
  return (
    <div className="pt-40">
      <div className="mx-auto w-80 text-center">
        <SectionTitle title="What do we provide" />
      </div>
      <div className="mx-auto flex flex-col gap-y-10 pt-5 text-center text-xl font-light text-black">
        <div className="mx-auto flex md:gap-52 lg:gap-64 xl:gap-80">
          <div className="flex w-72 items-center gap-x-2">
            <div>
              <HomeSVG />
            </div>
            <p>Flexible schedule to be home with your family every weekend</p>
          </div>
          <div className="flex w-72 items-center gap-x-2">
            <div>
              <CarSVG />
            </div>
            <p> Dispatch experience is based on flatbed, reefer, dry van</p>
          </div>
        </div>
        <div className="mx-auto flex md:gap-16 lg:gap-28 xl:gap-40">
          <div className="flex w-72 items-center gap-x-2">
            <div>
              <WalletSVG />
            </div>
            <div className="w-full">
              <p className="mx-auto w-36"> Money transfer every friday</p>
            </div>
          </div>
          <div className="flex w-72 items-center gap-x-2">
            <div>
              <HeartSVG />
            </div>
            <div className="w-full">
              <p className="mx-auto w-52">
                Occupational insurance and 24/7 safety dep.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BenefitsBottom;
