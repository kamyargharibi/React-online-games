import React, { useEffect, useState } from "react";
import { Button, Spinner } from "flowbite-react";
import { AiFillWindows } from "react-icons/ai";
import { GoBrowser } from "react-icons/go";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import ScrollToTop from "react-scroll-to-top";
import { useTranslation } from "react-i18next";

const BrowserGame = () => {
  // Current Value of Category
  const { categoryGame } = useParams();
  console.log(categoryGame);

  // Handling on Fetch Data
  const [response, setResponse] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    // params, method, url for Fetch API
    const options = {
      method: "GET",
      url: "https://free-to-play-games-database.p.rapidapi.com/api/games",
      params: {
        platform: "browser",
        category: categoryGame,
      },
      headers: {
        "X-RapidAPI-Key": "6709ad6aa6mshc1fbfd39a8b1839p1d1a3djsnb3f20518f330",
        "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
      },
    };

    // Try, Catch data with {axios}
    try {
      const result = await axios.request(options);
      setResponse(result.data);
      console.log(response);
      console.log(result.data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  // (reRender after change value of state)
  useEffect(() => {
    fetchData();
  }, [categoryGame]); // The dependencies

  useEffect(() => {
    // scroll to top after render
    window.scrollTo(0, 0);
    // current title
    document.title = "Play - BROWSER " + categoryGame.toUpperCase();
  }, []);

  // Translation Language
  const { t } = useTranslation();

  return (
    <div className="mx-auto my-2 w-full max-w-[1216px] bg-primary-light px-4 py-4 dark:bg-primary-dark sm:px-6 sm:py-4 md:w-[95%] md:rounded-3xl lg:px-8">
      {loading ? (
        <div className="my-6 flex w-full items-center justify-center">
          <Button>
            <div className="me-3">
              <Spinner size="sm" light={true} />
            </div>
            {t("globalitem.loading")}
          </Button>
        </div>
      ) : (
        <div>
          {/* Games List Map Method on API Data */}
          <div className="mx-auto my-auto flex w-full flex-col items-center">
            <h2 className="mb-8 border-b-2 border-light-gray30 bg-gradient-to-r from-amber-500 via-fuchsia-600 to-violet-600 bg-clip-text px-4 py-2 text-center font-mono text-3xl font-semibold text-transparent dark:border-secondry-dark">
              {t("gameinfo.games")}{" "}
              {categoryGame.charAt(0).toUpperCase() + categoryGame.slice(1)}
            </h2>
            <div className="mx-auto grid w-full grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
              {response.map((game) => {
                return (
                  <div
                    key={game.id}
                    className="mx-auto flex w-full max-w-sm flex-col items-center justify-center duration-300 md:hover:scale-105 md:hover:transform"
                  >
                    <div className="h-52 w-full rounded-lg bg-gray-300 shadow-md">
                      <img
                        className="h-full w-full"
                        src={game.thumbnail}
                        alt={game.title}
                      />
                    </div>
                    <div className="-mt-10 w-56 overflow-hidden rounded-lg bg-white shadow-lg dark:bg-gray-800 md:w-64">
                      <h3 className="py-2 text-center font-bold uppercase tracking-wide text-gray-800 dark:text-white">
                        {game.title}
                      </h3>
                      <div className="flex items-center justify-between bg-gray-200 px-3 py-2 dark:bg-gray-700">
                        <span className="font-bold text-gray-800 dark:text-gray-200">
                          {game.platform === "PC (Windows)" ? (
                            <AiFillWindows
                              title={t("globalitem.platformpc")}
                              size={25}
                            />
                          ) : (
                            <GoBrowser
                              title={t("globalitem.platformbrowser")}
                              size={25}
                            />
                          )}
                        </span>
                        <Link to={`/browser/${categoryGame}/${game.id}`}>
                          <button className="transform rounded bg-gray-800 px-2 py-1 text-xs font-semibold uppercase text-white transition-colors duration-300 hover:bg-gray-700 focus:bg-gray-700 focus:outline-none dark:hover:bg-gray-600 dark:focus:bg-gray-600">
                            {t("globalitem.addtolibrary")}
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
      <ScrollToTop
        className="flex items-center justify-center"
        style={{ background: "#0400ff" }}
        width="50"
        height="25"
        smooth
        color="white"
      />
    </div>
  );
};

export default BrowserGame;
