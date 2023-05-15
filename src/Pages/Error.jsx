import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import unhappy from "../assets/Images/unhappy.png";

const Error = () => {
  useEffect(() => {
    // scroll to top after render
    window.scrollTo(0, 0);
    // current title
    document.title = "Play - 404 Page not found";
  }, []);

  return (
    <>
      <main className="grid min-h-[70vh] place-items-center bg-primary-light px-6 py-8 dark:bg-secondry-dark sm:py-12">
        <div className="text-center">
          <div className="w-full max-w-sm">
            <img className="w-full" src={unhappy} alt="unHappy" />
          </div>
          <p className="text-2xl font-semibold text-indigo-600">404</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-primary-dark dark:text-primary-light sm:text-5xl">
            Page not found
          </h1>
          <p className="mt-6 text-base leading-7 text-light-slate60 dark:text-secondry-light">
            Sorry, we couldn’t find the page you’re looking for.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              to="/"
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm duration-300 hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Go back home
            </Link>
            <Link
              to="/contact"
              className="text-sm font-semibold text-primary-dark duration-200 hover:text-light-slate60 dark:text-secondry-light dark:hover:text-primary-light"
            >
              Contact support <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
};

export default Error;
