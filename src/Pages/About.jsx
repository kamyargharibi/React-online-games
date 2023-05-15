import React, { useEffect } from "react";
import ScreenShotLight from "../assets/Images/screenshot.png";
import ScreenShotLightFa from "../assets/Images/screenshot-fa.png";
import { Link } from "react-router-dom";
import AboutData from "../Components/AboutData";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";

const About = () => {
  useEffect(() => {
    // Animations
    AOS.init();
    // scroll to top after render
    window.scrollTo(0, 0);
    // current title
    document.title = "Play - About Us";
  }, []);

  // Translation Language
  const { t } = useTranslation();

  return (
    <div className="overflow-hidden bg-primary-light py-2 dark:bg-secondry-dark sm:px-8">
      <div className="mx-auto max-w-7xl overflow-hidden bg-primary-light px-6 py-4 dark:bg-primary-dark sm:px-6 md:rounded-3xl lg:px-6">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pt-4 lg:pe-8">
            <div data-aos="fade-right" className="lg:max-w-lg">
              <h2 className="text-3xl font-semibold text-secondry-dark rtl:leading-relaxed dark:text-primary-light sm:text-4xl">
                {t("aboutus.hero.title1")}{" "}
                <span className="text-link-blue">
                  {t("aboutus.hero.title2")}
                </span>{" "}
                <br />
                {t("aboutus.hero.title3")}
              </h2>
              <p className="my-6 text-sm leading-8 text-light-slate60 dark:text-light-gray40 sm:text-lg">
                {t("aboutus.hero.description")}
              </p>
              <Link
                to="/register"
                className="rounded-md bg-link-blue px-4 py-3 text-sm font-semibold text-primary-light shadow-sm duration-200 hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                {t("aboutus.hero.button")}
              </Link>
            </div>
          </div>
          <img
            data-aos="fade-left"
            src={
              document.body.dir === "ltr" ? ScreenShotLight : ScreenShotLightFa
            }
            alt="Product screenshot"
            className="w-full rounded-xl shadow-xl ring-1 ring-gray-400/10 dark:shadow-light-slate60/50 dark:ring-light-slate60 sm:w-[57rem] md:-ms-4 lg:-ms-0"
            width={2432}
            height={1442}
          />
        </div>
        {/* Divider */}
        <hr className="my-16 border border-light-gray20 dark:border-light-slate60" />
        {/* About Free To Game */}
        <div>
          <div className="mx-auto max-w-7xl px-6 lg:px-6">
            <div
              data-aos="fade-in"
              className="mx-auto max-w-2xl lg:text-center"
            >
              <h2 className="mt-2 text-xl font-bold tracking-tight text-secondry-dark dark:text-primary-light sm:text-3xl">
                {t("aboutus.aboutservice.title")}
              </h2>
              <p className="mt-6 text-sm leading-7 text-secondry-dark dark:text-light-gray30 sm:text-lg">
                {t("aboutus.aboutservice.description")}
              </p>
            </div>
            <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
              <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                <AboutData />
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
