import { Menu } from "@headlessui/react";
import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
const PcCategories = () => {
  // Translation Language
  const { t } = useTranslation();
  const PcCategoriesItems = [
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
      {PcCategoriesItems.map((item, index) => (
        <>
          <div key={index} className="px-1 py-1">
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
              to="/games"
              className={`${
                active
                  ? "bg-light-gray30 text-link-blue dark:bg-primary-dark dark:text-link-blue"
                  : "text-link-blue"
              } group flex w-full items-center rounded-md px-2 py-2 text-sm font-semibold`}
            >
              {t("navbar.categories.pcGames")}
            </Link>
          )}
        </Menu.Item>
      </div>
    </>
  );
};

export default PcCategories;
