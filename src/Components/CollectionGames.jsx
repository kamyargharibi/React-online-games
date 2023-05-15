import React, { useEffect } from "react";
import { PlusSmallIcon } from "@heroicons/react/24/outline";
import Fortnite from "../assets/Images/fortnite.jpg";
import Rocket from "../assets/Images/rocket.jpg";
import Pubg from "../assets/Images/pubg.png";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";

const CollectionGames = () => {
  useEffect(() => {
    // Animations
    AOS.init();
  }, []);

  // Translations
  const { t } = useTranslation();

  return (
    <>
      <section>
        <div className="mx-auto my-4 w-full max-w-[1216px] bg-light-gray10 px-4 py-6 dark:bg-primary-dark sm:px-6 sm:py-8 md:w-[95%] md:rounded-3xl lg:px-8">
          <header className="text-center">
            <h2 className="text-xl font-bold text-secondry-dark dark:text-primary-light sm:text-3xl">
              {t("collection.title")}
            </h2>

            <p className="mx-auto mt-4 max-w-md text-light-slate60 dark:text-secondry-light">
              {t("collection.description")}
            </p>
          </header>

          <ul className="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-3">
            <li data-aos="zoom-in">
              <Link to="/games/list/57" className="group relative block">
                <img
                  src={Fortnite}
                  alt="Fortnite"
                  className="aspect-square w-full object-cover transition duration-500 group-hover:opacity-90"
                />

                <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                  <h3 className="text-xl font-medium text-white">FORTNITE</h3>

                  <span className="mt-1.5 flex items-center bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white">
                    <PlusSmallIcon className="h-6 w-6 text-primary-light" />
                    {t("collection.library")}
                  </span>
                </div>
              </Link>
            </li>

            <li data-aos="zoom-in">
              <Link to="/games/list/474" className="group relative block">
                <img
                  src={Rocket}
                  alt="Rocket League"
                  className="aspect-square w-full object-cover transition duration-500 group-hover:opacity-90"
                />

                <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                  <h3 className="text-xl font-medium text-white">
                    ROCKET LEAGUE
                  </h3>

                  <span className="mt-1.5 flex items-center bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white">
                    <PlusSmallIcon className="h-6 w-6 text-primary-light" />
                    {t("collection.library")}
                  </span>
                </div>
              </Link>
            </li>

            <li
              data-aos="zoom-in-up"
              className="lg:col-span-2 lg:col-start-2 lg:row-span-2 lg:row-start-1"
            >
              <Link to="/games/list/516" className="group relative block">
                <img
                  src={Pubg}
                  alt="PUBG"
                  className="aspect-square w-full object-cover transition duration-500 group-hover:opacity-90"
                />

                <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                  <h3 className="text-xl font-medium text-white">PUBG</h3>

                  <span className="mt-1.5 flex items-center bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white">
                    <PlusSmallIcon className="h-6 w-6 text-primary-light" />
                    {t("collection.library")}
                  </span>
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default CollectionGames;
