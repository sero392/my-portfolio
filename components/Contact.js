"use client";

import { Mail, MapPin, Phone } from "lucide-react";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { useEffect, useState } from "react";
import { PostData } from "@/utils/ApiUtil";
import iziToast from "izitoast";
import LoaderComp from "./LoaderComp";

export default function Contact() {
  class Contact {
    ContactFirstName = "";
    ContactLastName = "";
    ContactMailAddress = "";
    Message = "";
  }

  const validationSchema = Yup.object({
    ContactMailAddress: Yup.string()
      .email("Geçersiz e-posta")
      .required("Zorunlu Alan"),
    ContactFirstName: Yup.string()
      .required("Zorunlu Alan")
      .max(100, "En Fazla 100 Karakter Girebilirsiniz!"),
    ContactLastName: Yup.string()
      .required("Zorunlu Alan")
      .max(100, "En Fazla 100 Karakter Girebilirsiniz!"),
    Message: Yup.string()
      .max(300, "En Fazla 300 Karakter Girebilirsiniz!")
      .required("Zorunlu Alan"),
  });

  const [loading, setLoading] = useState(false);
  return (
    <div id="contact" className=" relative">
      <LoaderComp isOpen={loading} />
      <div className="bg-blue-950 text-zinc-50 mt-2 p-10">
        <div className="text-center">
          <span className="text-6xl font-bold text-center">İletişim</span>
        </div>
        <div className="p-0 md:p-10  w-[100%] xl:w-[75%] mx-auto flex flex-wrap rounded-md  bg-blue-950 mt-8">
          <Formik
            initialValues={new Contact()}
            validationSchema={validationSchema}
            onSubmit={(values, { resetForm, setSubmitting }) => {
              const url = process.env.NEXT_PUBLIC_SITE_URL;
              setLoading(true);
              PostData(url + "api/contact", JSON.stringify(values)).then((res) => {
                if (res.status === 200) {
                  setLoading(false);
                  iziToast.success({
                    message: "Mesajınız iletilmiştir.",
                    title: "Başarılı",
                  });
                  resetForm();
                  setSubmitting(false)
                }
              });
            }}
          >
            {({ touched, errors, handleChange, values, handleBlur }) => (
              <div className="flex flex-col gap-4 p-0 lg:p-10 w-[100%] xl:w-[60%] items-center">
                <Form>
                  <div className=" w-[300px] md:w-[500px] ml-5">
                    <input
                      type="text"
                      name="ContactFirstName"
                      placeholder="Adınız"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.ContactFirstName}
                      className="w-full px-4 py-2 bg-gray-50 text-blue-950 border border-gray-600 rounded-3xl
   shadow-md shadow-gray-900 focus:outline-none focus:ring-2 
   focus:ring-blue-400 focus:border-blue-500 transition"
                    />
                    {touched.ContactFirstName && errors.ContactFirstName && (
                      <div className="text-rose-400 ml-3">
                        {errors.ContactFirstName}
                      </div>
                    )}
                  </div>
                  <div className=" w-[300px] md:w-[500px] ml-5 mt-3">
                    <input
                      type="text"
                      className="
  w-full px-4 py-2 bg-gray-50 text-blue-950 border border-gray-600 rounded-3xl
   shadow-md shadow-gray-900 focus:outline-none focus:ring-2 
    focus:ring-blue-400 focus:border-blue-500 transition
  "
                      placeholder="Soy Adınız"
                      name="ContactLastName"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.ContactLastName}
                    />

                    {touched.ContactLastName && errors.ContactLastName && (
                      <div className="text-rose-400 ml-3">
                        {errors.ContactLastName}
                      </div>
                    )}
                  </div>
                  <div className="w-[300px] md:w-[500px] ml-5 mt-3">
                    <input
                      type="text"
                      className="
  w-full px-4 py-2 bg-gray-50 text-blue-950 border border-gray-600 rounded-3xl
   shadow-md shadow-gray-900 focus:outline-none focus:ring-2 
    focus:ring-blue-400 focus:border-blue-500 transition
  "
                      placeholder="Mail Adresi"
                      name="ContactMailAddress"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.ContactMailAddress}
                    />
                    {touched.ContactMailAddress &&
                      errors.ContactMailAddress && (
                        <div className="text-rose-400 ml-3">
                          {errors.ContactMailAddress}
                        </div>
                      )}
                  </div>

                  <div className="w-[300px] md:w-[500px] ml-5 mt-3">
                    <textarea
                      placeholder="Mesaj"
                      rows={7}
                      className="
  w-full px-4 py-2 bg-gray-50 text-blue-950 border border-gray-600 rounded-3xl
   shadow-md shadow-gray-900 focus:outline-none focus:ring-2 
   focus:ring-blue-400 focus:border-blue-500 transition
  "
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.Message}
                      name="Message"
                    ></textarea>
                    {touched.Message && errors.Message && (
                      <div className="text-rose-400 ml-3">{errors.Message}</div>
                    )}
                  </div>

                  <div className="w-[300px] md:w-[500px] ml-5 mt-3">
                    <button
                      type="submit"
                      className="w-full px-4 py-2 bg-gray-50 text-blue-950 font-medium rounded-3xl shadow-md 
shadow-gray-900 hover:bg-blue-700 hover:shadow-lg hover:text-white
 hover:shadow-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition"
                    >
                      Gönder
                    </button>
                  </div>
                </Form>
              </div>
            )}
          </Formik>
          <div className="w-[100%] xl:w-[40%]">
            <div className="flex justify-center pt-12">
              {/* <Image
              alt="contact resmi"
              width={400}
              height={400}
              src="/images/contact2.png"
            /> */}

              <div className="shadow-md shadow-blue-400/50 w-full p-10 hover:shadow-xl hover:shadow-blue-500/50 transition">
                <div className="p-2 border-b border-blue-400">
                  <span className="font-bold text-2xl ">
                    İletişim Bilgileri
                  </span>
                </div>

                <div className="py-4 px-7 flex justify-between">
                  <span>
                    <MapPin></MapPin>
                  </span>
                  <span>Osmangazi / BURSA</span>
                </div>

                <div className="py-4 px-7 flex justify-between">
                  <span>
                    <Phone></Phone>
                  </span>
                  <span>(0531) 577 86 97</span>
                </div>

                <div className="py-4 px-7 flex justify-between">
                  <span>
                    <Mail></Mail>
                  </span>
                  <span>serhann798@gmail.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
