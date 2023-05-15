import { Button, Spinner } from "flowbite-react";
import { AiFillWindows } from "react-icons/ai";
import { GoBrowser } from "react-icons/go";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { BsSearch } from "react-icons/bs";
import { IoFilterOutline } from "react-icons/io5";
import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";
import ScrollToTop from "react-scroll-to-top";
import { useTranslation } from "react-i18next";
import PlatformFilter from "../Components/PlatformFilter";
import SortbyFilter from "../Components/SortbyFilter";
import GenreFilter from "../Components/GenreFilter";
import GenreFilterBrowser from "../Components/GenreFilterBrowser";

const Search = () => {
  // Current Value of selecet options Platforms
  const [platfromItem, setPlatfromItem] = useState("all");
  // Current Value of selecet options Genre
  const [genreItem, setGenreItem] = useState("mmo");
  // Current Value of selecet options Sort-by
  const [sortItem, setSortItem] = useState("relevance");

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
        platform: platfromItem,
        "sort-by": sortItem,
        category: genreItem,
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

  // (reRender after change value of states)
  useEffect(() => {
    fetchData();
  }, [platfromItem, genreItem, sortItem]);

  // Current value input for search box
  const [searchGame, setSearchGame] = useState("");

  useEffect(() => {
    // Animations
    AOS.init();
    // scroll to top after render
    window.scrollTo(0, 0);
    // current title
    document.title = "Play - Search Games";
  }, []);

  // Translation Language
  const { t } = useTranslation();

  return (
    <div className="mx-auto my-6 w-full max-w-[1216px] bg-primary-light px-4 py-8 dark:bg-primary-dark sm:px-6 sm:pb-6 sm:pt-0 md:w-[95%] md:rounded-3xl lg:px-8">
      {/* Search Games  */}
      <div className="mx-auto my-4 w-full max-w-[1216px] px-0">
        <div className="mb-4 flex items-center">
          <BsSearch
            size={30}
            className="text-secondry-dark me-1 dark:text-primary-light"
          />
          <label
            htmlFor="search"
            className="text-4xl text-secondry-dark dark:text-primary-light"
          >
            {t("search.searchitem.title")}
          </label>
        </div>
        <input
          id="search"
          type="search"
          placeholder={t("search.searchitem.placeholder")}
          sizing="lg"
          onChange={(e) => setSearchGame(e.target.value)}
          className="ring-none h-10 w-full rounded-md border-light-gray30 bg-primary-light transition duration-200 focus:border-none focus:outline-none focus:ring focus:ring-light-gray30 dark:border-light-slate60 dark:bg-primary-dark dark:text-primary-light dark:placeholder:text-light-gray40 dark:focus:ring-light-slate60 md:h-14"
        />
      </div>
      {/* Filter Items */}
      <div className="mx-auto my-8 flex w-full max-w-[1216px] flex-col items-start px-0">
        <div>
          <h2 className="flex items-center text-4xl text-secondry-dark dark:text-primary-light">
            <IoFilterOutline className="text-secondry-dark me-1 dark:text-primary-light" />{" "}
            {t("search.filteritem.title")}
          </h2>
        </div>
        <div className="mx-auto flex w-full max-w-[1216px] flex-wrap items-center py-8">
          <div className="my-2 me-2">
            <div className="mt mb-2 block">
              <label htmlFor="platform" value="Platform :" />
              <label
                className="font-semibold text-secondry-dark dark:text-primary-light"
                htmlFor="platform"
              >
                {t("search.filteritem.platform")}
              </label>
            </div>
            <select
              className="cursor-pointer rounded-md border border-light-gray30 bg-primary-light text-secondry-dark dark:border-light-slate60 dark:bg-primary-dark dark:text-secondry-light"
              id="platform"
              onChange={(e) => setPlatfromItem(e.target.value)}
            >
              {/* Platform items Component */}
              <PlatformFilter />
            </select>
          </div>
          <div className="my-2 me-2">
            {platfromItem === "all" || platfromItem === "pc" ? (
              <>
                {/* Categories For All & PC Platforms */}
                <div className="mb-2 block">
                  <label
                    className="font-semibold text-secondry-dark dark:text-primary-light"
                    htmlFor="genre"
                  >
                    {t("search.filteritem.genre")}
                  </label>
                </div>
                <select
                  className="cursor-pointer rounded-md border border-light-gray30 bg-primary-light text-secondry-dark dark:border-light-slate60 dark:bg-primary-dark dark:text-secondry-light"
                  id="genre"
                  onChange={(e) => setGenreItem(e.target.value)}
                >
                  {/* Genres for PC Components */}
                  <GenreFilter />
                </select>
              </>
            ) : (
              <>
                {/* Categories For Browser Platfrom */}
                <div className="mb-2 block">
                  <label
                    className="font-semibold text-secondry-dark dark:text-primary-light"
                    htmlFor="genre"
                  >
                    {t("search.filteritem.genre")}
                  </label>
                </div>
                <select
                  className="cursor-pointer rounded-md border border-light-gray30 bg-primary-light text-secondry-dark dark:border-light-slate60 dark:bg-primary-dark dark:text-secondry-light"
                  id="genre"
                  onChange={(e) => setGenreItem(e.target.value)}
                >
                  {/* Genres for Browser Components */}
                  <GenreFilterBrowser />
                </select>
              </>
            )}
          </div>
          <div className="my-2">
            <div className="mb-2 block">
              <label
                className="font-semibold text-secondry-dark dark:text-primary-light"
                htmlFor="sort-by"
              >
                {t("search.filteritem.sortby")}
              </label>
            </div>
            <select
              className="cursor-pointer rounded-md border border-light-gray30 bg-primary-light text-secondry-dark dark:border-light-slate60 dark:bg-primary-dark dark:text-secondry-light"
              id="sort-by"
              onChange={(e) => setSortItem(e.target.value)}
            >
              <SortbyFilter />
            </select>
          </div>
        </div>
      </div>
      {/* Fetch API */}
      {loading ? (
        <div
          data-aos="zoom-in-up"
          className="my-6 flex w-full items-center justify-center"
        >
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
          <div className="mx-auto grid w-full grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
            {response
              .filter((item) => {
                return searchGame.toLowerCase() === ""
                  ? item
                  : item.title.toLowerCase().includes(searchGame);
              })
              .map((game) => {
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
                        <Link to={`/games/${game.genre}/${game.id}`}>
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

export default Search;
