import { useParams } from "react-router-dom";
import useAxios from "../Hooks/useAxios";
import { Button, Spinner } from "flowbite-react";
import { HiArrowRightOnRectangle } from "react-icons/hi2";
import { MdOutlineMoneyOffCsred } from "react-icons/md";
import { AiFillWindows } from "react-icons/ai";
import { GoBrowser } from "react-icons/go";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ModalImage from "react-modal-image-responsive";
import { useTranslation } from "react-i18next";

const GamesInfo = () => {
  // Get game id from link
  const { gameId } = useParams();

  // Get Game Data From API with AXIOS ( custom hook )
  const {
    response: gameInfo,
    loading,
    error,
  } = useAxios({
    method: "GET",
    url: "/game",
    params: { id: gameId },
    headers: {
      "X-RapidAPI-Key": "6709ad6aa6mshc1fbfd39a8b1839p1d1a3djsnb3f20518f330",
      "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
    },
  });

  useEffect(() => {
    // Animations
    AOS.init();
    // current title
    document.title = "Play - Online Games";
  }, []);

  // Translation Language
  const { t } = useTranslation();

  return (
    <div className="mx-auto my-2 w-full max-w-[1216px] bg-primary-light px-2 py-4 dark:bg-primary-dark md:w-[95%] md:rounded-3xl">
      {loading ? (
        <div
          data-aos="zoom-in"
          className="my-8 flex w-full items-center justify-center"
        >
          <Button className="absolute">
            <div className="me-3">
              <Spinner size="sm" light={true} />
            </div>
            {t("globalitem.loading")}
          </Button>
        </div>
      ) : (
        <div>
          <div className="relative flex w-full flex-col justify-between sm:flex-col md:flex-row">
            {/* Game Cover and Buttons */}
            <div className="flex h-full flex-col items-start justify-center px-4">
              <img
                className="w-full rounded-md"
                src={gameInfo.thumbnail}
                alt={gameInfo.title}
              />
              <div className="my-4 flex w-full items-center justify-between">
                <Button className="w-1/3 cursor-default bg-light-slate60 duration-200 me-1 hover:bg-secondry-dark dark:bg-light-slate60 dark:hover:bg-secondry-dark">
                  {t("gameinfo.cover.freebtn")}
                  <MdOutlineMoneyOffCsred className="h-5 w-5 ms-1" />
                </Button>
                <Button className="w-2/3 duration-200 ms-1 md:w-64">
                  {t("gameinfo.cover.playnowbtn")}
                  <HiArrowRightOnRectangle className="h-5 w-5 ms-1" />
                </Button>
              </div>
            </div>
            <div className="w-full px-4 md:w-3/4 md:px-6">
              {/* Game Title */}
              <div>
                <h2 className="mb-6 text-2xl font-bold text-secondry-dark dark:text-primary-light sm:text-4xl">
                  {gameInfo.title}
                </h2>
              </div>
              {/* Game About */}
              <div className="my-8">
                <h2 className="my-2 text-2xl font-semibold text-secondry-dark dark:text-primary-light">
                  {t("gameinfo.about")} {gameInfo.title}
                </h2>
                <hr className="border-light-gray20 dark:border-light-slate60" />
                <p
                  dir="ltr"
                  className="my-2  text-secondry-dark dark:text-primary-light"
                >
                  {gameInfo.description}
                </p>
              </div>
              {/* Game Additional Information */}
              <div className="my-8 w-full">
                <h2 className="my-2 text-2xl font-semibold  text-secondry-dark dark:text-primary-light">
                  {t("gameinfo.AddInfo.AdditionalInfo")}
                </h2>
                <hr className="my-4 border-light-gray20 dark:border-light-slate60" />
                <div className="grid w-full grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
                  <div>
                    <span className="text-lg font-semibold text-light-gray40 dark:text-light-slate60">
                      {t("gameinfo.AddInfo.title")}
                    </span>
                    <p className="font-semibold text-secondry-dark dark:text-primary-light">
                      {gameInfo.title}
                    </p>
                  </div>
                  <div>
                    <span className="text-lg font-semibold text-light-gray40 dark:text-light-slate60">
                      {t("gameinfo.AddInfo.developer")}
                    </span>
                    <p className="font-semibold text-secondry-dark dark:text-primary-light">
                      {gameInfo.developer}
                    </p>
                  </div>
                  <div>
                    <span className="text-lg font-semibold text-light-gray40 dark:text-light-slate60">
                      {t("gameinfo.AddInfo.publisher")}
                    </span>
                    <p className="font-semibold text-secondry-dark dark:text-primary-light">
                      {gameInfo.publisher}
                    </p>
                  </div>
                  <div>
                    <span className="text-lg font-semibold text-light-gray40 dark:text-light-slate60">
                      {t("gameinfo.AddInfo.releasedate")}
                    </span>
                    <p className="font-semibold text-secondry-dark dark:text-primary-light">
                      {gameInfo.release_date}
                    </p>
                  </div>
                  <div>
                    <span className="text-lg font-semibold text-light-gray40 dark:text-light-slate60">
                      {t("gameinfo.AddInfo.genre")}
                    </span>
                    <p className="font-semibold text-secondry-dark dark:text-primary-light">
                      {gameInfo.genre}
                    </p>
                  </div>
                  <div>
                    <span className="text-lg font-semibold text-light-gray40 dark:text-light-slate60">
                      {t("gameinfo.AddInfo.platform")}
                    </span>
                    <p className="font-semibold text-secondry-dark dark:text-primary-light">
                      {gameInfo.platform === "Windows" ? (
                        <>
                          <AiFillWindows
                            className="font-semibold text-secondry-dark me-2 dark:text-primary-light"
                            size={20}
                          />
                          <p>Windows (Client)</p>
                        </>
                      ) : (
                        <>
                          <GoBrowser
                            className="font-semibold text-secondry-dark me-2 dark:text-primary-light"
                            size={20}
                          />
                          <p>Web Browser</p>
                        </>
                      )}
                    </p>
                  </div>
                </div>
              </div>
              {/* Game Screenshots */}
              <div className="my-8 w-full">
                <h2 className="my-2 text-2xl font-semibold  text-secondry-dark dark:text-primary-light">
                  {t("gameinfo.screenshots")} {gameInfo.title}
                </h2>
                <hr className="my-4 border-light-gray20 dark:border-light-slate60" />
                <div
                  dir="ltr"
                  className="grid grid-cols-1 gap-5 sm:grid-cols-2"
                >
                  {gameInfo.screenshots.map((gameImg) => {
                    return (
                      <>
                        <ModalImage
                          key={gameImg.id}
                          small={gameImg.image}
                          large={gameImg.image}
                          alt={gameInfo.title + " Screenshots"}
                          hideDownload={true}
                          showRotate={true}
                        />
                      </>
                    );
                  })}
                </div>
              </div>
              {/* Game Additional Information */}
              <div className="my-8 w-full">
                <h2 className="my-2 text-2xl font-semibold  text-secondry-dark dark:text-primary-light">
                  {t("gameinfo.minimumsystem.minisys")} ({gameInfo.platform})
                </h2>
                <hr className="my-4 border-light-gray20 dark:border-light-slate60" />
                <div>
                  {gameInfo.platform === "Windows" ||
                  gameInfo.platform === "Windows, Web Browser" ? (
                    <div className="grid w-full grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
                      <div>
                        <span className="text-lg font-semibold text-light-gray40 dark:text-light-slate60">
                          {t("gameinfo.minimumsystem.os")}
                        </span>
                        <p className="font-semibold text-secondry-dark dark:text-primary-light">
                          {gameInfo.minimum_system_requirements.os}
                        </p>
                      </div>
                      <div>
                        <span className="text-lg font-semibold text-light-gray40 dark:text-light-slate60">
                          {t("gameinfo.minimumsystem.processor")}
                        </span>
                        <p className="font-semibold text-secondry-dark dark:text-primary-light">
                          {gameInfo.minimum_system_requirements.processor}
                        </p>
                      </div>
                      <div>
                        <span className="text-lg font-semibold text-light-gray40 dark:text-light-slate60">
                          {t("gameinfo.minimumsystem.memory")}
                        </span>
                        <p className="font-semibold text-secondry-dark dark:text-primary-light">
                          {gameInfo.minimum_system_requirements.memory}
                        </p>
                      </div>
                      <div>
                        <span className="text-lg font-semibold text-light-gray40 dark:text-light-slate60">
                          {t("gameinfo.minimumsystem.graphics")}
                        </span>
                        <p className="font-semibold text-secondry-dark dark:text-primary-light">
                          {gameInfo.minimum_system_requirements.graphics}
                        </p>
                      </div>
                      <div>
                        <span className="text-lg font-semibold text-light-gray40 dark:text-light-slate60">
                          {t("gameinfo.minimumsystem.storage")}
                        </span>
                        <p className="font-semibold text-secondry-dark dark:text-primary-light">
                          {gameInfo.minimum_system_requirements.storage}
                        </p>
                      </div>
                      <div>
                        <span className="text-lg font-semibold text-light-gray40 dark:text-light-slate60">
                          {t("gameinfo.minimumsystem.addnotes")}
                        </span>
                        <p className="font-semibold text-secondry-dark dark:text-primary-light">
                          {t("gameinfo.minimumsystem.textnote")}
                        </p>
                      </div>
                    </div>
                  ) : (
                    <>
                      <p className="font-semibold text-secondry-dark dark:text-primary-light">
                        {gameInfo.title} {t("gameinfo.minimumsystem.textweb1")}{" "}
                        {gameInfo.title}, {t("gameinfo.minimumsystem.textweb2")}
                      </p>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GamesInfo;
