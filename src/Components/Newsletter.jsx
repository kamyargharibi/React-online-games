import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { BsArrowRight } from "react-icons/bs";
import { useTranslation } from "react-i18next";

const Newsletter = () => {
  useEffect(() => {
    // Animations
    AOS.init();
  }, []);

  // Translations change language
  const { t } = useTranslation();

  return (
    <section
      data-aos="fade-down"
      className="my-4 max-w-[1216px] bg-light-gray10 shadow-[inset_-12px_-8px_40px_#46464620] dark:bg-primary-dark dark:shadow-[inset_-12px_-8px_40px_#ffffff24] md:mx-auto md:w-[95%] md:rounded-3xl"
    >
      <div className="p-8 md:p-12 lg:px-16 lg:py-24">
        <div data-aos="zoom-in" className="mx-auto max-w-lg text-center">
          <h2 className="text-2xl font-bold text-secondry-dark dark:text-primary-light md:text-3xl">
            {t("newsletter.title")}
          </h2>

          <p className="hidden text-light-slate60 dark:text-secondry-light sm:mt-4 sm:block">
            {t("newsletter.description")}
          </p>
        </div>

        <div className="mx-auto mt-8 max-w-xl">
          <form action="#" className="sm:flex sm:gap-4">
            <div className="sm:flex-1">
              <label htmlFor="email" className="sr-only">
                {t("newsletter.label")}
              </label>

              <input
                data-aos="zoom-in-right"
                type="email"
                placeholder={t("newsletter.placeholder")}
                className="w-full rounded-md border-light-gray30 text-primary-dark shadow-sm transition focus:border focus:border-light-gray20 focus:outline-none focus:ring focus:ring-light-gray30 dark:border-light-slate60 dark:bg-secondry-dark dark:text-primary-light dark:focus:border-light-slate60 dark:focus:ring-light-slate60"
              />
            </div>

            <button
              data-aos="zoom-in-left"
              type="submit"
              className="group mt-4 flex w-full items-center justify-center gap-2 rounded-md bg-link-blue px-5 py-3 text-white transition focus:outline-none focus:ring focus:ring-light-gray30 sm:mt-0 sm:w-auto"
            >
              <span className="text-sm font-medium">
                {" "}
                {t("newsletter.button")}{" "}
              </span>

              <BsArrowRight className="ms-1 rtl:rotate-180" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
