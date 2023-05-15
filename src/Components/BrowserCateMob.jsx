import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
const BrowserCateMob = (props) => {
  // Translation Language
  const { t } = useTranslation();
  const BrowserGamesMob = [
    {
      name: t("navbar.categories.mmorpg"),
      to: "/browser/mmorpg",
    },
    {
      name: t("navbar.categories.shooter"),
      to: "/browser/shooter",
    },
    {
      name: t("navbar.categories.anime"),
      to: "/browser/anime",
    },
    {
      name: t("navbar.categories.strategy"),
      to: "/browser/strategy",
    },
    {
      name: t("navbar.categories.fantasy"),
      to: "/browser/fantasy",
    },
    {
      name: t("navbar.categories.sci-fi"),
      to: "/browser/sci-fi",
    },
    {
      name: t("navbar.categories.racing"),
      to: "/browser/racing",
    },
    {
      name: t("navbar.categories.social"),
      to: "/browser/social",
    },
    {
      name: t("navbar.categories.sports"),
      to: "/browser/sports",
    },
  ];
  return (
    <>
      {[...BrowserGamesMob].map((item, index) => (
        <Link
          onClick={props.handleMobileMenu}
          key={index}
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

export default BrowserCateMob;
