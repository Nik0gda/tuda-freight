import Image from "next/image";
import React from "react";
import SectionTitle from "./SectionTitle";

const WhoAreWe = () => {
  return (
    <div className="flex flex-col gap-16">
      <div className="mx-auto flex w-fit items-center pt-20 md:gap-5 lg:gap-14 xl:gap-32">
        <div>
          <div className="mx-auto w-80 text-center">
            <SectionTitle title="Who are we" />
          </div>
          <div className="mx-auto w-[410px] pt-5 text-center text-xl font-light text-black">
            International company focused on creating the best conditions for
            the drivers and truck owners. With the highest CPM on the market we
            attract best drivers for the best loads across United States
          </div>
        </div>
        <img
          src="/phone.jpg"
          alt="Phone image"
          className="h-[350px] w-[600px] translate-x-20 rounded-[37px] object-cover"
        />
      </div>
      <div className="mx-auto flex w-fit items-center pt-20 md:gap-5 lg:gap-14 xl:gap-32">
        <img
          src="/truck.jpg"
          alt="Phone image"
          className="h-[323px] w-[677px] -translate-x-20 rounded-[37px] object-cover"
        />
        <div>
          <div className="mx-auto w-80 text-center">
            <SectionTitle title="Are you an owner operator?" />
          </div>
          <div className="mx-auto w-[410px] pt-5 text-center text-xl font-light text-black">
            We rent trailers under our authority and provide starting at 12%
            from gross income
            <br />
            <br />
            Our operators are waiting for your call 24/7
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoAreWe;
