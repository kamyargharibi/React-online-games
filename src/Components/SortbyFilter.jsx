import React from "react";
import { useTranslation } from "react-i18next";

const SortbyFilter = () => {
  // Translation Language
  const { t } = useTranslation();

  // Sort items
  const SortBy = [
    {
      name: t("search.filteritem.sortbyFilter.relevance"),
      value: "relevance",
    },
    {
      name: t("search.filteritem.sortbyFilter.popularity"),
      value: "popularity",
    },
    {
      name: t("search.filteritem.sortbyFilter.releaseDate"),
      value: "release-date",
    },
    {
      name: t("search.filteritem.sortbyFilter.alphabetical"),
      value: "alphabetical",
    },
  ];
  return (
    <>
      {SortBy.map((sort, index) => {
        return (
          <option key={index} value={sort.value}>
            {sort.name}
          </option>
        );
      })}
    </>
  );
};

export default SortbyFilter;
