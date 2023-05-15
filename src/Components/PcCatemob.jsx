import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
const PcCateMob = (props) => {
  // Translation Language
  const { t } = useTranslation();
  const PcCateMob = [
    {
      name: t("navbar.categories.mmorpg"),
      to: "/games/mmorpg",
    },
    {
      name: t("navbar.categories.shooter"),
      to: "/games/shooter",
    },
    {
      name: t("navbar.categories.anime"),
      to: "/games/anime",
    },
    {
      name: t("navbar.categories.strategy"),
      to: "/games/strategy",
    },
    {
      name: t("navbar.categories.fantasy"),
      to: "/games/fantasy",
    },
    {
      name: t("navbar.categories.sci-fi"),
      to: "/games/sci-fi",
    },
    {
      name: t("navbar.categories.racing"),
      to: "/games/racing",
    },
    {
      name: t("navbar.categories.social"),
      to: "/games/social",
    },
    {
      name: t("navbar.categories.sports"),
      to: "/games/sports",
    },
    {
      name: t("navbar.categories.fighting"),
      to: "/games/fighting",
    },
    {
      name: t("navbar.categories.battleroyale"),
      to: "/games/battle-royale",
    },
  ];
  return (
    <>
      {PcCateMob.map((item) => (
        <Link
          onClick={props.handleMobileMenu}
          key={item.name}
          as="Link"
          to={item.to}
          className="block rounded-lg py-2 text-sm font-semibold leading-6 text-secondry-dark pe-3 ps-10 hover:text-secondry-dark dark:text-secondry-light dark:hover:text-primary-light"
        >
          {item.name}
        </Link>
      ))}
    </>
  );
};

export default PcCateMob;
