import React from "react";
import { useTranslation } from "react-i18next";

const PlatformFilter = () => {
  // Translation Language
  const { t } = useTranslation();

  // Platform items
  const Platforms = [
    {
      name: t("search.filteritem.platformFilter1.allPlatforms"),
      value: "all",
    },
    {
      name: t("search.filteritem.platformFilter1.windows"),
      value: "pc",
    },
    {
      name: t("search.filteritem.platformFilter1.browser"),
      value: "browser",
    },
  ];
  return (
    <>
      {Platforms.map((platfrom, index) => {
        return (
          <option key={index} value={platfrom.value}>
            {platfrom.name}
          </option>
        );
      })}
    </>
  );
};

export default PlatformFilter;
