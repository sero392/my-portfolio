import { GetData } from "@/utils/ApiUtil";
import { Star } from "lucide-react";
import "../styles/references.css";
import { memo } from "react";

async function getData() {
  const url = process.env.PUBLIC_NEXT_API_URL;
  const response = await GetData(url + "api/references");
  return await response.json();
}

export default async function References() {
  const response = await getData();

  const calculateStarCount = (count) => {
    return Array.from({ length: count }, (_, index) => <Star key={index} />);
  };

  return (
    <div id="references" className="bg-blue-950 text-zinc-50 mt-2 p-10">
      <div className="text-center">
        <span className="text-6xl font-bold text-center">Referanslar</span>
      </div>
      <div className="flex mt-9 gap-9 lg:px-20 flex-wrap">
        {response?.data?.map((m, index) => (
          <div
            key={index}
            className="bg-blue-950  rounded-md m-auto p-3  min-h-[100px] 
                      hover:min-h-[500px]
                      animate-glow
                      lg:w-[450px]
                      md:w-[600px]
                      sm:w-[100%]
                      w-[100%]
                      flex flex-col items-center justify-center 
                       transition-all  duration-700
                     
                      "
          >
            <div className="flex justify-center pt-10">
              <img
                className="rounded-full"
                alt="referans resmi"
                width={100}
                height={100}
                src={m.ReferencePhotoURL}
              />
            </div>

            <div className="card-title text-zinc-50 text-2xl  font-bold text-center mt-2">
              {m.ReferenceName}
            </div>

            <div className="card-title text-zinc-50 flex justify-center mt-4">
              {calculateStarCount(m.StarCount)?.map((m) => m)}
            </div>
            <div className="px-10 pb-20 mt-2">
              <span className="text-sm text-zinc-50">{m.ReferenceText}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
