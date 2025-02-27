"use client";

import { Mail, MapPin, MarsStroke, Phone } from "lucide-react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";

export default function Contact() {
  class Contact {
    FirstName = "";
    LastName = "";
    Mail = "";
    Message = "";
  }

  const validationSchema = Yup.object({
    Mail: Yup.string().email('Geçersiz e-posta').required("Zorunlu Alan"),
    FirstName: Yup.string().required("Zorunlu Alan").max(100,"En Fazla 100 Karakter Girebilirsiniz!"),
    LastName: Yup.string().required("Zorunlu Alan").max(100,"En Fazla 100 Karakter Girebilirsiniz!"),
    Message: Yup.string().max(300,"En Fazla 300 Karakter Girebilirsiniz!").required("Zorunlu Alan"),
  });
  return (
    <div id="contact" className="bg-blue-950 text-zinc-50 mt-2 p-10">
      <div className="text-center">
        <span className="text-6xl font-bold text-center">İletişim</span>
      </div>
      <div className="p-0 md:p-10  w-[100%] xl:w-[75%] mx-auto flex flex-wrap rounded-md  bg-blue-950 mt-8">
        <Formik
          initialValues={new Contact()}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {({ touched, errors, handleChange, values, handleBlur }) => (
            <div className="flex flex-col gap-4 p-0 lg:p-10 w-[100%] xl:w-[60%] items-center">
              <Form>
                <div className=" w-[300px] md:w-[500px] ml-5">
                  <input
                    type="text"
                    name="FirstName"
                    placeholder="Adınız"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.FirstName}
                    className="w-full px-4 py-2 bg-gray-50 text-blue-950 border border-gray-600 rounded-3xl
   shadow-md shadow-gray-900 focus:outline-none focus:ring-2 
   focus:ring-blue-400 focus:border-blue-500 transition"
                  />
                  {touched.FirstName && errors.FirstName && (
                    <div className="text-rose-400 ml-3">{errors.FirstName}</div>
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
                    name="LastName"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.LastName}
                  />

                  {touched.LastName && errors.LastName && (
                    <div className="text-rose-400 ml-3">{errors.LastName}</div>
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
                    name="Mail"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.Mail}
                  />
                  {touched.Mail && errors.Mail && (
                    <div className="text-rose-400 ml-3">{errors.Mail}</div>
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
                <span className="font-bold text-2xl ">İletişim Bilgileri</span>
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
  );
}
