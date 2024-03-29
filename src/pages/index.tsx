import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import Benefits from "../Components/Benefits";
import CallNowButton from "../Components/CallNowButton";
import CallNowPopup from "../Components/CallNowPopup";
import CarSVG from "../Components/CarSVG";
import ContactForm from "../Components/ContactForm";
import HeartSVG from "../Components/HeartSVG";
import HomeSVG from "../Components/HomeSVG";
import Navbar from "../Components/Navbar";
import NavbarButton from "../Components/NavbarButton";
import SectionTitle from "../Components/SectionTitle";
import Sidebar from "../Components/Sidebar";
import TextSection from "../Components/TextSection";
import WalletSVG from "../Components/WalletSVG";
import WhoAreWe from "../Components/WhoAreWe";
import { langaugeTexts, languageText } from "../translations";

const Home: NextPage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedLanguageText, setSelectedLanguageText] =
    useState<languageText>(langaugeTexts.en);

  return (
    <>
      <Head>
        <title>Tuda Freight</title>
        <meta
          name="description"
          content="Tuda Freight LLC has fast become one of North Carolina's leading independent logistics providers, offering complete logistics solutions to all our clients throughout the US."
        />
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
      <main className="relative w-full overflow-y-hidden bg-background">
        {/* Hero */}

        <div className="h-screen w-full bg-[url('/background.jpg')] bg-cover bg-[center_top_47%] md:h-[60vh]">
          <Sidebar
            isSidebarOpen={isSidebarOpen}
            setIsSidebarOpen={setIsSidebarOpen}
            setSelctedLanguageText={setSelectedLanguageText}
            selectedLanguageText={selectedLanguageText}
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
          <Navbar
            setSelctedLanguageText={setSelectedLanguageText}
            selectedLanguageText={selectedLanguageText}
          />
          <div className="w-full pt-5">
            <div className="mx-auto w-fit md:hidden">
              <Image
                src="/tuda-logo-transparent(1).png"
                width={200}
                height={200}
              />
            </div>
            <div className="mx-auto w-fit md:mt-12 md:uppercase">
              <SectionTitle
                title={selectedLanguageText.title}
                textSizeBig={true}
              />
              <Benefits selectedLanguageText={selectedLanguageText} />
            </div>

            <div className="mx-auto mt-8 w-fit md:hidden">
              <CallNowButton />
            </div>
          </div>
        </div>

        {/* About us */}
        <div id="about_us" className="md:hidden">
          <TextSection title={selectedLanguageText.textTitleOne}>
            {selectedLanguageText.textDescriptionOne}
          </TextSection>
          <TextSection title={selectedLanguageText.textTitleTwo}>
            {selectedLanguageText.textDescriptionTwoP1}
            <br />
            <br /> {selectedLanguageText.textDescriptionTwoP1}
          </TextSection>
        </div>
        <div className="hidden md:block">
          <WhoAreWe selectedLanguageText={selectedLanguageText} />
        </div>
        <div id="benefits">
          <div className="mx-auto w-80 pt-20 text-center">
            <SectionTitle title={selectedLanguageText.textTitleThree} />
          </div>
          <div className="mx-auto w-72 pt-5 text-center text-xl font-light text-black md:w-fit">
            <div className="flex flex-col gap-y-10  md:mx-auto md:flex  md:flex-row md:gap-52 md:gap-y-0 lg:gap-64 xl:gap-80">
              <div className="flex items-center gap-x-2 md:w-72">
                <div>
                  <HomeSVG />
                </div>
                <p>{selectedLanguageText.textDescriptionThreeP1}</p>
              </div>
              <div className="flex items-center gap-x-2 md:w-72">
                <div>
                  <CarSVG />
                </div>
                <p> {selectedLanguageText.textDescriptionThreeP2}</p>
              </div>
            </div>
            <div className="flex flex-col gap-y-10 pt-10 md:mx-auto md:flex md:w-fit md:flex-row md:gap-16 md:gap-y-0 lg:gap-28 xl:gap-40">
              <div className="flex items-center gap-x-2 md:w-72">
                <div>
                  <WalletSVG />
                </div>
                <div className="w-full">
                  <p className="mx-auto w-48">
                    {" "}
                    {selectedLanguageText.textDescriptionThreeP3}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-x-2 md:w-72">
                <div>
                  <HeartSVG />
                </div>
                <div className="w-full">
                  <p className="mx-auto w-52">
                    {selectedLanguageText.textDescriptionThreeP4}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="md:hidden">
          <CallNowPopup />
        </div>
        <div id="contact_us">
          <ContactForm selectedLanguageText={selectedLanguageText} />
        </div>

        <div className="mt-20 hidden h-20 w-full bg-footer text-center md:block">
          <div className="mx-auto flex w-fit gap-72 pt-8 text-background">
            <p>Email: TudaFreight@gmail.com</p>
            <p>Phone number: +1 (504) 717-9684</p>
          </div>
        </div>
        {/* <div className="relative h-screen w-full">
      
        </div> */}
        {/* <div className="h-screen w-full"></div> */}
      </main>
    </>
  );
};

export default Home;
