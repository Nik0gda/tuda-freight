import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import Benefits from "../Components/Benefits";
import BenefitsBottom from "../Components/BenefitsBottom";
import CallNowButton from "../Components/CallNowButton";
import CallNowPopup from "../Components/CallNowPopup";
import CarSVG from "../Components/CarSVG";
import ContactForm from "../Components/ContactForm";
import HeartSVG from "../Components/HeartSVG";
import HomeSVG from "../Components/HomeSVG";
import Navbar from "../Components/Navbar";
import NavbarButton from "../Components/NavbarButton";
import PhoneSVG from "../Components/PhoneSVG";
import PhoneSVGCall from "../Components/PhoneSVGCall";
import SectionTitle from "../Components/SectionTitle";
import Sidebar from "../Components/Sidebar";
import TextSection from "../Components/TextSection";
import WalletSVG from "../Components/WalletSVG";
import WhoAreWe from "../Components/WhoAreWe";

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

        <div className="h-screen w-screen bg-[url('/background.jpg')] bg-cover bg-[center_top_45%] md:h-[50vh]">
          <Sidebar
            isSidebarOpen={isSidebarOpen}
            setIsSidebarOpen={setIsSidebarOpen}
          />
          <div className="md:hidden">
            <NavbarButton
              setIsSidebarOpen={setIsSidebarOpen}
              isSidebarOpen={isSidebarOpen}
            />
            <NavbarButton
              setIsSidebarOpen={setIsSidebarOpen}
              isSidebarOpen={isSidebarOpen}
            />
          </div>
          <Navbar />
          <div className="w-screen pt-5">
            <div className="mx-auto w-fit md:hidden">
              <Image
                src="/tuda-logo-transparent(1).png"
                width={200}
                height={200}
              />
            </div>
            <div className="mx-auto w-fit md:uppercase">
              <SectionTitle title={"Empowering drivers"} textSizeBig={true} />
              <Benefits />
            </div>

            <div className="mx-auto mt-10 w-fit md:hidden">
              <CallNowButton />
            </div>
          </div>
        </div>

        {/* About us */}
        <div id="about_us" className="md:hidden">
          <TextSection title="Who are we?">
            International company focused on creating the best conditions for
            the drivers and truck owners. With the highest CPM on the market we
            attract best drivers for the best loads across United States
          </TextSection>
          <TextSection title="Are you an owner operator?">
            We rent trailers under our authority and provide starting at 12%
            from gross income <br />
            <br /> Our operators are waiting for your call 24/7
          </TextSection>
        </div>
        <div className="hidden md:block">
          <WhoAreWe />
          <BenefitsBottom />
        </div>
        <div id="benefits" className="md:hidden">
          <TextSection title="What do we provide?">
            <div className="flex flex-col gap-y-10">
              <div className="flex items-center gap-x-2">
                <div>
                  <HomeSVG />
                </div>
                <p>
                  Flexible schedule to be home with your family every weekend
                </p>
              </div>
              <div className="flex items-center gap-x-2">
                <div>
                  <CarSVG />
                </div>
                <p> Dispatch experience is based on flatbed, reefer, dry van</p>
              </div>
              <div className="flex items-center gap-x-2">
                <div>
                  <WalletSVG />
                </div>
                <div className="w-full">
                  <p className="mx-auto w-36"> Money transfer every friday</p>
                </div>
              </div>
              <div className="flex items-center gap-x-2">
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
          </TextSection>
        </div>
        <div className="md:hidden">
          <CallNowPopup />
        </div>
        <div id="contact_us">
          <ContactForm />
        </div>
        {/* <div className="relative h-screen w-screen">
      
        </div> */}
        {/* <div className="h-screen w-screen"></div> */}
      </main>
    </>
  );
};

export default Home;
