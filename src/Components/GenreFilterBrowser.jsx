import React from "react";
import { useTranslation } from "react-i18next";

const GenreFilterBrowser = () => {
  // Translation Language
  const { t } = useTranslation();

  const BrowserGamesGenre = [
    {
      name: t("search.filteritem.genreItems.allGenre"),
      value: "mmo",
    },
    {
      name: t("search.filteritem.genreItems.anime"),
      value: "anime",
    },
    {
      name: t("search.filteritem.genreItems.shooter"),
      value: "shooter",
    },
    {
      name: t("search.filteritem.genreItems.fantasy"),
      value: "fantasy",
    },
    {
      name: t("search.filteritem.genreItems.strategy"),
      value: "strategy",
    },
    {
      name: t("search.filteritem.genreItems.racing"),
      value: "racing",
    },
    {
      name: t("search.filteritem.genreItems.moba"),
      value: "moba",
    },
    {
      name: t("search.filteritem.genreItems.mmorpg"),
      value: "mmorpg",
    },
    {
      name: t("search.filteritem.genreItems.sci-fi"),
      value: "sci-fi",
    },
    {
      name: t("search.filteritem.genreItems.social"),
      value: "social",
    },
    {
      name: t("search.filteritem.genreItems.sports"),
      value: "sports",
    },
    {
      name: t("search.filteritem.genreItems.cardgames"),
      value: "card",
    },
    {
      name: t("search.filteritem.genreItems.zombie"),
      value: "zombie",
    },
  ];
  return (
    <>
      {BrowserGamesGenre.map((genre, index) => {
        return (
          <option key={index} value={genre.value}>
            {genre.name}
          </option>
        );
      })}
    </>
  );
};

export default GenreFilterBrowser;
