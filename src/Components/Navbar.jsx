import { Fragment, useEffect, useState } from "react";
import { Dialog, Disclosure, Transition, Menu } from "@headlessui/react";
import {
  Bars3Icon,
  MoonIcon,
  SunIcon,
  XMarkIcon,
  MagnifyingGlassIcon,
  GiftIcon,
  PuzzlePieceIcon,
  ArrowLongRightIcon,
  Bars3BottomLeftIcon,
  WindowIcon,
  Square2StackIcon,
} from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import Logo from "../assets/Images/Logo.png";
import { Link } from "react-router-dom";
import useScroll from "../Hooks/useScroll";
import { BsArrowRight } from "react-icons/bs";
import { useTranslation } from "react-i18next";
import BrowserCategories from "./BrowserCategories";
import PcCategories from "./PcCategories";
import BrowserCateMob from "./BrowserCateMob";
import PcCateMob from "./PcCatemob";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Navbar = () => {
  // Change Theme Light/Dark mode with Tailwind CSS
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  // Current status of Mobile Menu
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Handle Mobile Menu
  const handleMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  // Change Position After Scroll-Y
  const scrollPosition = useScroll();

  // Translation change language
  const { t, i18n } = useTranslation();

  return (
    <div className="relative">
      <header
        className={`z-10 w-full border-b border-light-gray20 bg-primary-light duration-150 dark:border-none dark:bg-primary-dark dark:shadow-light-slate60 ${
          scrollPosition > 100 ? "fixed top-0 shadow" : ""
        }`}
      >
        <nav
          className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 md:px-8 md:py-4"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <Link to="/" className="-m-1.5 p-1.5">
              <span className="sr-only">{t("navbar.logo.name")}</span>
              <img className="h-10 w-auto" src={Logo} alt="Logo" />
            </Link>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-primary-dark hover:text-secondry-dark dark:text-primary-light dark:hover:text-secondry-light"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">{t("navbar.menu.name")}</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="relative hidden lg:flex lg:gap-x-8">
            {/* Larg Screen Dropdown Categories Free Games */}
            <div>
              <Menu as="div" className="relative inline-block">
                <div>
                  <Menu.Button className="inline-flex w-full items-center justify-center rounded-md py-2 text-sm font-medium text-secondry-dark duration-150  hover:bg-opacity-30 hover:text-light-slate60 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 dark:text-primary-light dark:hover:text-secondry-light">
                    {t("navbar.categories-title.freegames")}
                    <ChevronDownIcon
                      className="h-5 w-5 text-secondry-dark ms-1 me-2 dark:text-primary-light"
                      aria-hidden="true"
                    />
                  </Menu.Button>
                </div>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute right-0 z-50 mt-2 w-56 origin-top-right rounded-md bg-primary-light shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none dark:bg-secondry-dark">
                    {/* PC Categories Components */}
                    <PcCategories />
                  </Menu.Items>
                </Transition>
              </Menu>
            </div>
            {/* Larg Screen Dropdown Categories Browser Games */}
            <div>
              <Menu as="div" className="relative inline-block">
                <div>
                  <Menu.Button className="inline-flex w-full items-center justify-center rounded-md py-2 text-sm font-medium text-secondry-dark duration-150  hover:bg-opacity-30 hover:text-light-slate60 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 dark:text-primary-light dark:hover:text-secondry-light">
                    {t("navbar.categories-title.browsergames")}
                    <ChevronDownIcon
                      className="h-5 w-5 text-secondry-dark ms-1 me-2 dark:text-primary-light"
                      aria-hidden="true"
                    />
                  </Menu.Button>
                </div>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute right-0 z-50 mt-2 w-56 origin-top-right rounded-md bg-primary-light shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none dark:bg-secondry-dark">
                    {/* Browser Categories Components */}
                    <BrowserCategories />
                  </Menu.Items>
                </Transition>
              </Menu>
            </div>
            {/* Buttons Icon */}
            <div className="flex items-center gap-2">
              <Link to="/search" className="text-sm font-semibold leading-6">
                <MagnifyingGlassIcon
                  title={t("navbar.links.search title")}
                  className="h-6 w-6 text-primary-dark duration-200 hover:text-secondry-dark dark:text-primary-light dark:hover:text-secondry-light"
                />
              </Link>
              <Link to="/" className="text-sm font-semibold leading-6">
                <GiftIcon
                  title={t("navbar.links.gift title")}
                  className="h-6 w-6 text-primary-dark duration-200 hover:text-secondry-dark dark:text-primary-light dark:hover:text-secondry-light"
                />
              </Link>
              <Link to="/games" className="text-sm font-semibold leading-6">
                <Square2StackIcon
                  title={t("navbar.links.mygames title")}
                  className="h-6 w-6 text-primary-dark duration-200 hover:text-secondry-dark dark:text-primary-light dark:hover:text-secondry-light"
                />
              </Link>
            </div>
          </div>
          {/* Navbar Buttons */}
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            {/* Select Language */}
            <select
              value={i18n.language}
              onChange={(e) => i18n.changeLanguage(e.target.value)}
              className="w-18 h-7 cursor-pointer rounded-md border border-secondry-light bg-primary-light px-1 py-0 text-secondry-dark me-1 dark:border-secondry-dark dark:bg-primary-dark dark:text-primary-light"
            >
              <option value="fa" title={t("globalitem.farsi")}>
                Fa
              </option>
              <option value="en" title={t("globalitem.english")}>
                En
              </option>
            </select>
            {/* Select Theme Dark/Light Mode */}
            <button
              onClick={handleThemeSwitch}
              className="rounded-md border border-secondry-light bg-primary-light px-1 py-0.5 me-4 dark:border-secondry-dark dark:bg-primary-dark"
            >
              {theme === "light" ? (
                <MoonIcon
                  title={t("globalitem.darkmode")}
                  className="h-5 w-5 text-secondry-dark"
                />
              ) : (
                <SunIcon
                  title={t("globalitem.lightmode")}
                  className="h-5 w-5 dark:text-primary-light"
                />
              )}
            </button>
            {/* Login Button */}
            <Link
              to="/login"
              className="flex items-center text-sm font-semibold leading-6 text-primary-dark duration-200 hover:text-secondry-dark dark:text-primary-light dark:hover:text-secondry-light"
            >
              {t("navbar.links.login")}{" "}
              <BsArrowRight className="ms-1 rtl:rotate-180" />
            </Link>
          </div>
        </nav>
        {/* Mobile Menu */}
        <Dialog
          as="div"
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className="fixed inset-0 z-10" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto border-l border-light-gray20 bg-primary-light px-6 py-6 dark:border-light-gray30 dark:bg-primary-dark sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <span className="sr-only">{t("navbar.menu.name")}</span>
              <div className="flex items-center">
                {/* Select Theme Dark/Light Mode */}
                <button
                  onClick={handleThemeSwitch}
                  className="rounded-md border border-secondry-light bg-primary-light p-0.5 me-2 dark:border-secondry-dark dark:bg-primary-dark"
                >
                  {theme === "light" ? (
                    <MoonIcon
                      title={t("globalitem.darkmode")}
                      className="h-6 w-6 text-secondry-dark"
                    />
                  ) : (
                    <SunIcon
                      title={t("globalitem.lightmode")}
                      className="h-6 w-6 dark:text-primary-light"
                    />
                  )}
                </button>
                {/* Select Language */}
                <select
                  value={i18n.language}
                  onChange={(e) => i18n.changeLanguage(e.target.value)}
                  className="w-18 h-7 cursor-pointer rounded-md border border-secondry-light bg-primary-light px-1 py-0 text-secondry-dark me-1 dark:border-secondry-dark dark:bg-primary-dark dark:text-primary-light"
                >
                  <option value="fa" title={t("globalitem.farsi")}>
                    Fa
                  </option>
                  <option value="en" title={t("globalitem.english")}>
                    En
                  </option>
                </select>
              </div>
              {/* Close Mobile Menu */}
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={handleMobileMenu}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon
                  className="h-6 w-6 text-secondry-dark dark:text-primary-light"
                  aria-hidden="true"
                />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {/* Mobile --> Categories Free Game DropDown */}
                  <Disclosure as="div" className="-mx-3">
                    {({ open }) => (
                      <>
                        <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 text-base font-semibold leading-7 text-primary-dark ps-3 pe-3.5 hover:text-secondry-dark dark:text-primary-light dark:hover:text-secondry-light">
                          <span className="flex items-center">
                            <Bars3BottomLeftIcon className="h-5 w-5 text-secondry-dark me-2 dark:text-secondry-light" />
                            <p>{t("navbar.categories-title.freegames")}</p>
                          </span>

                          <ChevronDownIcon
                            className={classNames(
                              open ? "rotate-180" : "",
                              "h-5 w-5 flex-none text-gray-500"
                            )}
                            aria-hidden="true"
                          />
                        </Disclosure.Button>
                        <Transition
                          enter="transition duration-150 ease-out"
                          enterFrom="transform scale-95 opacity-0"
                          enterTo="transform scale-100 opacity-100"
                          leave="transition duration-100 ease-out"
                          leaveFrom="transform scale-100 opacity-100"
                          leaveTo="transform scale-95 opacity-0"
                        >
                          <Disclosure.Panel className="mt-0 space-y-1">
                            {/* Categories Mobile Component */}
                            <PcCateMob handleMobileMenu={handleMobileMenu} />
                            <Link
                              onClick={handleMobileMenu}
                              to="/games"
                              className="block rounded-lg py-2 text-sm font-semibold leading-7 text-link-blue duration-200 pe-3 ps-10 hover:opacity-80"
                            >
                              {t("navbar.categories.pcGames")}
                            </Link>
                          </Disclosure.Panel>
                        </Transition>
                      </>
                    )}
                  </Disclosure>
                  {/* Mobile --> Categories Browser Game DropDown */}
                  <Disclosure as="div" className="-mx-3">
                    {({ open }) => (
                      <>
                        <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 text-base font-semibold leading-7 text-primary-dark ps-3 pe-3.5 hover:text-secondry-dark dark:text-primary-light dark:hover:text-secondry-light">
                          <span className="flex items-center">
                            <WindowIcon className="h-5 w-5 text-secondry-dark me-2 dark:text-secondry-light" />
                            <p>{t("navbar.categories-title.browsergames")}</p>
                          </span>

                          <ChevronDownIcon
                            className={classNames(
                              open ? "rotate-180" : "",
                              "h-5 w-5 flex-none text-gray-500"
                            )}
                            aria-hidden="true"
                          />
                        </Disclosure.Button>
                        <Transition
                          enter="transition duration-150 ease-out"
                          enterFrom="transform scale-95 opacity-0"
                          enterTo="transform scale-100 opacity-100"
                          leave="transition duration-100 ease-out"
                          leaveFrom="transform scale-100 opacity-100"
                          leaveTo="transform scale-95 opacity-0"
                        >
                          <Disclosure.Panel className="mt-0 space-y-1">
                            {/* Categories Mobile Component */}
                            <BrowserCateMob
                              handleMobileMenu={handleMobileMenu}
                            />
                            <Link
                              onClick={handleMobileMenu}
                              to="/browser"
                              className="block rounded-lg py-2 text-sm font-semibold leading-7 text-link-blue duration-200 pe-3 ps-10 hover:opacity-80"
                            >
                              {t("navbar.categories.browserGames")}
                            </Link>
                          </Disclosure.Panel>
                        </Transition>
                      </>
                    )}
                  </Disclosure>
                  <Link
                    onClick={handleMobileMenu}
                    to="/search"
                    className="-mx-3 flex items-center rounded-lg px-3 py-2 text-base font-semibold leading-7 text-primary-dark hover:text-secondry-dark dark:text-primary-light dark:hover:text-secondry-light"
                    title={t("navbar.links.search title")}
                  >
                    <MagnifyingGlassIcon className="h-5 w-5 text-secondry-dark me-2 dark:text-secondry-light" />
                    {t("navbar.links.search")}
                  </Link>
                  <Link
                    onClick={handleMobileMenu}
                    to="/"
                    className="-mx-3 flex items-center rounded-lg px-3 py-2 text-base font-semibold leading-7 text-primary-dark hover:text-secondry-dark dark:text-primary-light dark:hover:text-secondry-light"
                    title={t("navbar.links.gift title")}
                  >
                    <GiftIcon className="h-5 w-5 text-secondry-dark me-2 dark:text-secondry-light" />
                    {t("navbar.links.gift")}
                  </Link>
                  <Link
                    onClick={handleMobileMenu}
                    to="/games"
                    className="-mx-3 flex items-center rounded-lg px-3 py-2 text-base font-semibold leading-7 text-primary-dark hover:text-secondry-dark dark:text-primary-light dark:hover:text-secondry-light"
                    title={t("navbar.links.mygames title")}
                  >
                    <PuzzlePieceIcon className="h-5 w-5 text-secondry-dark me-2 dark:text-secondry-light" />
                    {t("navbar.links.mygames")}
                  </Link>
                </div>
                <div className="py-6">
                  <Link
                    onClick={handleMobileMenu}
                    to="/login"
                    className="-mx-3 flex  items-center rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-primary-dark hover:text-secondry-dark dark:text-primary-light dark:hover:text-secondry-light"
                  >
                    <ArrowLongRightIcon className="h-5 w-5 text-secondry-dark me-2 dark:text-secondry-light" />
                    {t("navbar.links.login")}
                  </Link>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
    </div>
  );
};

export default Navbar;
