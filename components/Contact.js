import Image from "next/image";

export default function Contact() {
  return (
    <div className="bg-blue-950 text-zinc-50 mt-2 p-10">
      <div className="p-10  w-[75%] mx-auto flex rounded-md  bg-blue-950 mt-8">
        <div className="flex flex-col gap-4 p-10 w-[50%]">
          <div className=" w-[500px] ml-5">
            <input
              type="text"
              className="w-full px-4 py-2 bg-gray-50 text-blue-950 border border-gray-600 rounded-3xl
               shadow-md shadow-gray-900 focus:outline-none focus:ring-2 
               focus:ring-blue-400 focus:border-blue-500 transition"
              placeholder="Adınız"
            />
          </div>
          <div className=" w-[500px] ml-5">
            <input
              type="text"
              className="
              w-full px-4 py-2 bg-gray-50 text-blue-950 border border-gray-600 rounded-3xl
               shadow-md shadow-gray-900 focus:outline-none focus:ring-2 
                focus:ring-blue-400 focus:border-blue-500 transition
              "
              placeholder="Soy Adınız"
            />
          </div>
          <div className=" w-[500px] ml-5">
            <input
              type="text"
              className="
              w-full px-4 py-2 bg-gray-50 text-blue-950 border border-gray-600 rounded-3xl
               shadow-md shadow-gray-900 focus:outline-none focus:ring-2 
                focus:ring-blue-400 focus:border-blue-500 transition
              "
              placeholder="Mail Adresi"
            />
          </div>

          <div className=" w-[500px] ml-5">
            <textarea
              placeholder="Mesaj"
              rows={7}
              className="
              w-full px-4 py-2 bg-gray-50 text-blue-950 border border-gray-600 rounded-3xl
               shadow-md shadow-gray-900 focus:outline-none focus:ring-2 
               focus:ring-blue-400 focus:border-blue-500 transition
              "
            ></textarea>
          </div>

          <div className=" w-[500px] ml-5">
            <button className="w-full px-4 py-2 bg-gray-50 text-blue-950 font-medium rounded-3xl shadow-md 
            shadow-gray-900 hover:bg-blue-700 hover:shadow-lg hover:text-white
             hover:shadow-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition">
              Gönder
            </button>
          </div>
        </div>
        <div className="w-[50%]">
          <div className="flex justify-center pt-12">
            <Image
              alt="contact resmi"
              width={400}
              height={400}
              src="/images/contact2.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
