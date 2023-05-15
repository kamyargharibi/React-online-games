import React, { useEffect } from "react";
import HeroImg from "../assets/Images/warzone-hero.jpg";
import { Link } from "react-router-dom";
import CollectionGames from "../Components/CollectionGames";
import Newsletter from "../Components/Newsletter";
import AOS from "aos";
import "aos/dist/aos.css";
import { BsArrowRight } from "react-icons/bs";
import { useTranslation } from "react-i18next";

const Home = () => {
  useEffect(() => {
    // current title
    document.title = "Play - Online Games Service";
    // Animations
    AOS.init();
    // scroll to top after render
    window.scrollTo(0, 0);
  });

  // Translations change language
  const { t } = useTranslation();
  return (
    <div className="bg-primary-light dark:bg-secondry-dark">
      {/* Hero */}
      <div className="mx-auto max-w-7xl py-2 sm:px-6 lg:px-8">
        <div className="relative isolate flex flex-col items-center overflow-hidden bg-light-gray10 px-6 pt-16 shadow-2xl dark:bg-primary-dark sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:flex-row lg:gap-x-20 lg:px-24 lg:pt-0">
          <svg
            viewBox="0 0 1024 1024"
            className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ms-80 lg:left-1/2 lg:-translate-x-1/2 lg:translate-y-0 lg:ms-0"
            aria-hidden="true"
          >
            <circle
              cx={512}
              cy={512}
              r={512}
              fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
              fillOpacity="0.7"
            />
            <defs>
              <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                <stop stopColor="#7775D6" />
                <stop offset={1} stopColor="#E935C1" />
              </radialGradient>
            </defs>
          </svg>
          <div
            data-aos="fade-right"
            className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-start"
          >
            <h2 className="text-secondry-darksm:text-4xl text-3xl font-bold leading-snug tracking-tight rtl:leading-relaxed dark:text-primary-light">
              {t("hero.title1")}
              <br />
              {t("hero.title2")}
            </h2>
            <p className="mt-6 text-lg leading-8 text-light-slate60 dark:text-light-gray30">
              {t("hero.description")}
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
              <Link
                to="/games"
                className="rounded-md bg-link-blue px-3.5 py-2.5 text-sm font-semibold text-primary-light shadow-sm duration-200 hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                {t("hero.button1")}
              </Link>
              <Link
                to="/"
                className="flex items-center text-sm font-semibold leading-6 text-primary-dark duration-200 hover:text-light-slate60 dark:text-primary-light dark:hover:text-light-gray30"
              >
                {t("hero.button2")}{" "}
                <BsArrowRight className="ms-1 rtl:rotate-180" />
              </Link>
            </div>
          </div>
          <div
            data-aos="fade-left"
            className="mx-auto mt-16 h-80 w-full lg:mt-8"
          >
            <img
              className="w-full max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
              src={HeroImg}
              alt="HeroImage"
            />
          </div>
        </div>
      </div>
      {/* Games Collection Component */}
      <CollectionGames />
      {/* Newsletter Component */}
      <Newsletter />
    </div>
  );
};

export default Home;
