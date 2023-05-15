import React, { useEffect } from "react";
import { FiSend } from "react-icons/fi";
import contactImg from "../assets/Images/email.png";
import emailjs from "@emailjs/browser";
import { useFormik } from "formik";
import * as Yup from "yup";
import AOS from "aos";
import "aos/dist/aos.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

const Contact = () => {
  // Notify after Submit Message
  const notify = () =>
    toast.success(
      i18n.language === "en" ? (
        <span className="font-semibold text-secondry-dark">
          {t("forms.successfully")}
        </span>
      ) : (
        <span className="font-bold text-secondry-dark">
          {t("forms.successfully")}
        </span>
      ),
      {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      }
    );

  // Validation Form Fields
  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      subject: "",
      message: "",
    },
    onSubmit: (values, { resetForm }) => {
      try {
        emailjs.send(
          "service_g0l71cq",
          "template_1e72ilc",
          values,
          "LRb8j5w-JXmQK6fRm"
        );
      } catch {
        console.log("Error");
      } finally {
        notify();
        resetForm();
      }
    },
    validationSchema: Yup.object({
      fullName: Yup.string()
        .min(3, i18next.t("forms.fullnameMinError"))
        .max(30, i18next.t("forms.fullnameMaxError"))
        .required(i18next.t("forms.fullnameError")),
      email: Yup.string().required(i18next.t("forms.emailError")),
      subject: Yup.string()
        .min(3, i18next.t("forms.subjectMinError"))
        .required(i18next.t("forms.subjectError")),
      message: Yup.string()
        .min(3, i18next.t("forms.messageMinError"))
        .max(500, i18next.t("forms.messageMaxError"))
        .required(i18next.t("forms.messageError")),
    }),
  });

  useEffect(() => {
    // current title
    document.title = "Play - Contact Us";
    // Animations
    AOS.init();
  });

  // Translation Language
  const { t, i18n } = useTranslation();

  return (
    <div className="mx-auto my-auto w-full py-4">
      <div
        data-aos="zoom-in"
        className="mx-auto my-4 w-[90%] max-w-sm rounded-lg border bg-primary-light p-4 shadow-md dark:border-light-slate60 dark:bg-primary-dark sm:w-full sm:p-8"
      >
        <div className="mx-auto flex w-4/5 flex-col items-center justify-center sm:w-full">
          <div className="flex flex-col items-center justify-center">
            <img src={contactImg} className="w-16" alt="Contact-Image" />
            <h2 className="text-3xl font-semibold text-secondry-dark dark:text-primary-light">
              {t("forms.contact")}
            </h2>
          </div>
          <form onSubmit={formik.handleSubmit} className="my-4 w-full">
            <div className="my-3 flex flex-col">
              <input
                type="text"
                placeholder={t("forms.fullname")}
                {...formik.getFieldProps("fullName")}
                className="rounded-md border-light-gray40 bg-primary-light outline-none placeholder:text-light-gray40 dark:border-secondry-dark dark:bg-light-gray40 dark:text-secondry-dark dark:placeholder:text-secondry-dark"
              />
              {formik.touched.fullName && formik.errors.fullName ? (
                <span className="text-red-600">{formik.errors.fullName}</span>
              ) : null}
            </div>
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
                type="text"
                placeholder={t("forms.subject")}
                {...formik.getFieldProps("subject")}
                className="rounded-md border-light-gray40 bg-primary-light outline-none placeholder:text-light-gray40 dark:border-secondry-dark dark:bg-light-gray40 dark:text-secondry-dark dark:placeholder:text-secondry-dark"
              />
              {formik.touched.subject && formik.errors.subject ? (
                <span className="text-red-600">{formik.errors.subject}</span>
              ) : null}{" "}
            </div>
            <div className="my-3 flex flex-col">
              <textarea
                type="text"
                placeholder={t("forms.message")}
                {...formik.getFieldProps("message")}
                className="h-52 rounded-md border-light-gray40 bg-primary-light outline-none placeholder:text-light-gray40 dark:border-secondry-dark dark:bg-light-gray40 dark:text-secondry-dark dark:placeholder:text-secondry-dark"
              />
              {formik.touched.message && formik.errors.message ? (
                <span className="text-red-600">{formik.errors.message}</span>
              ) : null}{" "}
            </div>
            {/* Button for Submit form */}
            <div className="mt-4 flex w-full flex-col">
              <button
                type="submit"
                className="flex items-center justify-center rounded-md bg-secondry-dark py-2 font-semibold text-light-gray10 duration-200 hover:opacity-95 dark:bg-link-blue dark:text-primary-light dark:hover:opacity-90"
              >
                {t("forms.submit")}
                <span className="ms-1">
                  <FiSend size={15} />
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={i18n.language === "en" ? false : true}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
};

export default Contact;
