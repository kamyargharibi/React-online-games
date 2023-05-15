import { Menu } from "@headlessui/react";
import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
const BrowserCategories = () => {
  // Translation Language
  const { t } = useTranslation();
  const BrowserGames = [
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
      {BrowserGames.map((item, index) => (
        <>
          <div key={index} className="px-1 py-1 ">
            <Menu.Item>
              {({ active }) => (
                <Link
                  to={item.to}
                  className={`${
                    active
                      ? "bg-light-gray30 text-secondry-dark dark:bg-primary-dark dark:text-primary-light"
                      : "text-secondry-dark dark:text-primary-light"
                  } group flex w-full items-center rounded-md px-2 py-2 text-sm font-semibold duration-150`}
                >
                  {item.name}
                </Link>
              )}
            </Menu.Item>
          </div>
        </>
      ))}
      <div className="px-1 py-1">
        <Menu.Item>
          {({ active }) => (
            <Link
              to="/browser"
              className={`${
                active
                  ? "bg-light-gray30 text-link-blue dark:bg-primary-dark dark:text-link-blue"
                  : "text-link-blue"
              } group flex w-full items-center rounded-md px-2 py-2 text-sm font-semibold`}
            >
              {t("navbar.categories.browserGames")}
            </Link>
          )}
        </Menu.Item>
      </div>
    </>
  );
};

export default BrowserCategories;
