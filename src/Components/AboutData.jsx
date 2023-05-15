import React from "react";
import { FaGem } from "react-icons/fa";
import { CgGames } from "react-icons/cg";
import { BsRobot } from "react-icons/bs";
import { MdOutlineCloudDownload } from "react-icons/md";
import { BsCollection } from "react-icons/bs";
import { GiAstronautHelmet } from "react-icons/gi";
import { IoMdFlash } from "react-icons/io";
import { GiMagickTrick } from "react-icons/gi";
import { useTranslation } from "react-i18next";

const AboutData = () => {
  // Translation Language
  const { t } = useTranslation();

  const AboutItems = [
    {
      id: 1,
      title: t("aboutus.aboutItems.item1.title"),
      description: t("aboutus.aboutItems.item1.description"),
      icon: FaGem,
      color: "purple",
    },
    {
      id: 2,
      title: t("aboutus.aboutItems.item2.title"),
      description: t("aboutus.aboutItems.item2.description"),
      icon: CgGames,
      color: "orange",
    },
    {
      id: 3,
      title: t("aboutus.aboutItems.item3.title"),
      description: t("aboutus.aboutItems.item3.description"),
      icon: BsRobot,
      color: "darkcyan",
    },
    {
      id: 4,
      title: t("aboutus.aboutItems.item4.title"),
      description: t("aboutus.aboutItems.item4.description"),
      icon: MdOutlineCloudDownload,
      color: "yellowgreen",
    },
    {
      id: 5,
      title: t("aboutus.aboutItems.item5.title"),
      description: t("aboutus.aboutItems.item5.description"),
      icon: BsCollection,
      color: "blue",
    },
    {
      id: 6,
      title: t("aboutus.aboutItems.item6.title"),
      description: t("aboutus.aboutItems.item6.description"),
      icon: GiAstronautHelmet,
      color: "gray",
    },
    {
      id: 7,
      title: t("aboutus.aboutItems.item7.title"),
      description: t("aboutus.aboutItems.item7.description"),
      icon: IoMdFlash,
      color: "yellow",
    },
    {
      id: 8,
      title: t("aboutus.aboutItems.item8.title"),
      description: t("aboutus.aboutItems.item8.description"),
      icon: GiMagickTrick,
      color: "red",
    },
  ];

  return (
    <>
      {AboutItems.map((item, index) => (
        <div data-aos="zoom-in-right" key={index} className="relative ps-16">
          <dt className="text-base font-semibold leading-7 text-secondry-dark dark:text-primary-light">
            <div className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-lg bg-primary-dark rtl:right-0 dark:bg-light-slate60">
              <item.icon
                className="h-8 w-8 text-white"
                aria-hidden="true"
                color={item.color}
              />
            </div>
            {item.title}
          </dt>
          <dd className="mt-2 text-sm leading-7 text-secondry-dark dark:text-light-gray40 sm:text-base">
            {item.description}
          </dd>
        </div>
      ))}
    </>
  );
};

export default AboutData;
