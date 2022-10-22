import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import CallNowButton from "../Components/CallNowButton";
import CallNowPopup from "../Components/CallNowPopup";
import NavbarButton from "../Components/NavbarButton";
import PhoneSVG from "../Components/PhoneSVG";
import PhoneSVGCall from "../Components/PhoneSVGCall";
import SectionTitle from "../Components/SectionTitle";
import Sidebar from "../Components/Sidebar";
import TextSection from "../Components/TextSection";

const Home: NextPage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      <Head>
        <title>Tuda Freight</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main className="relative w-screen bg-background">
        {/* Hero */}

        <div className="h-screen w-screen bg-[url('/background.jpg')] bg-cover bg-center">
          <Sidebar isSidebarOpen={isSidebarOpen} />
          <NavbarButton
            setIsSidebarOpen={setIsSidebarOpen}
            isSidebarOpen={isSidebarOpen}
          />

          <div className="w-screen pt-5">
            <div className="mx-auto w-fit">
              <Image
                src="/tuda-logo-transparent(1).png"
                width={200}
                height={200}
              />
            </div>
            <div className="mx-auto w-fit">
              <SectionTitle title={"Empowering drivers"} />
            </div>
            <div className="mx-auto w-fit">
              <CallNowButton />
            </div>
          </div>
        </div>

        {/* About us */}
        <TextSection title="Who are we?">
          International company focused on creating the best conditions for the
          drivers and truck owners. With the highest CPM on the market we
          attract best drivers for the best loads across United States
        </TextSection>
        <TextSection title="Are you an owner operator?">
          We rent trailers under our authority and provide starting at 12% from
          gross income <br />
          <br /> Our operators are waiting for your call 24/7
        </TextSection>
        <TextSection title="What do we provide?">
          We rent trailers under our authority and provide starting at 12% from
          gross income <br />
          <br /> Our operators are waiting for your call 24/7
        </TextSection>
        <CallNowPopup />
        {/* <div className="relative h-screen w-screen">

        </div> */}
        {/* <div className="h-screen w-screen"></div> */}
      </main>
    </>
  );
};

export default Home;
