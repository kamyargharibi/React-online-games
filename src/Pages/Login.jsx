import React, { useEffect } from "react";
import Logo from "../assets/Images/Logo.png";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

const Login = () => {
  // Validation Form Fields
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log(JSON.stringify(values));
    },
    validationSchema: Yup.object({
      email: Yup.string().required(i18next.t("forms.emailError")),
      password: Yup.string()
        .min(8, i18next.t("forms.passError"))
        .required(i18next.t("forms.passReqError")),
    }),
  });

  useEffect(() => {
    // current title
    document.title = "Play - Login";
    // Animations
    AOS.init();
  });

  // Translation Language
  const { t } = useTranslation();

  return (
    <div className="mx-auto my-auto w-full py-8">
      <div
        data-aos="zoom-in"
        className="mx-auto my-8 w-[90%] max-w-sm rounded-lg border bg-primary-light p-4 shadow-md dark:border-light-slate60 dark:bg-primary-dark sm:w-full sm:p-8"
      >
        <div className="mx-auto flex w-4/5 flex-col items-center justify-center sm:w-full">
          <div className="flex flex-col items-center justify-center">
            <img src={Logo} alt="Free-to-Play" className="mb-4 w-24" />
            <h2 className="text-3xl font-semibold text-secondry-dark dark:text-primary-light">
              {t("forms.welcome")}
            </h2>
          </div>
          <form onSubmit={formik.handleSubmit} className="my-8 w-full">
            <div className="my-3 flex flex-col">
              <input
                type="email"
                placeholder={t("forms.email")}
                {...formik.getFieldProps("email")}
                className="rounded-md border-light-gray40 bg-primary-light outline-none placeholder:text-light-gray40 dark:border-secondry-dark dark:bg-light-gray40 dark:text-secondry-dark dark:placeholder:text-secondry-dark"
              />
              {formik.touched.email && formik.errors.email ? (
                <span className="text-red-600">{formik.errors.email}</span>
              ) : null}
            </div>
            <div className="my-3 flex flex-col">
              <input
                type="password"
                placeholder={t("forms.password")}
                {...formik.getFieldProps("password")}
                className="rounded-md border-light-gray40 bg-primary-light outline-none placeholder:text-light-gray40 dark:border-secondry-dark dark:bg-light-gray40 dark:text-secondry-dark dark:placeholder:text-secondry-dark"
              />
              {formik.touched.password && formik.errors.password ? (
                <span className="text-red-600">{formik.errors.password}</span>
              ) : null}{" "}
            </div>
            {/* Button for Submit form */}
            <div className="my-2 flex w-full flex-col">
              <button
                type="submit"
                className="rounded-md bg-secondry-dark py-2 font-semibold text-light-gray10 duration-200 hover:opacity-95 dark:bg-link-blue dark:text-primary-light dark:hover:hover:opacity-90"
              >
                {t("forms.login")}
              </button>
            </div>
            {/* Link for navigation on pages */}
            <div className="mt-8 flex w-full items-center justify-center">
              <span className="text-secondry-dark dark:text-primary-light">
                {t("forms.register")}{" "}
                <Link
                  to="/register"
                  className="font-semibold text-secondry-dark duration-200 hover:text-link-blue dark:text-primary-light dark:hover:text-link-blue"
                >
                  {t("forms.signup")}
                </Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
