import { GetData } from "@/utils/ApiUtil";
import { Star } from "lucide-react";
import Image from "next/image";
import "../styles/references.css";

async function getData() {
  const response = await GetData("http://localhost:3000/api/references");
  return await response.json();
}

export default async function References() {
  const response = await getData();

  const calculateStarCount = (count) => {
    let arr = [];
    for (let index = 0; index < count; index++) {
      arr.push(<Star key={index} />);
    }
    return arr;
  };

  return (
    <div className="bg-blue-950 text-zinc-50 mt-2 p-10">
      <div className="text-center">
        <span className="text-6xl font-bold text-center">Referanslar</span>
      </div>
      <div className="flex mt-9 gap-9 px-20">
        {response?.data?.map((m, index) => (
          <div
            key={index}
            className="bg-blue-950  rounded-md m-auto p-3  min-h-[100px] 
                      hover:min-h-[500px]
                      animate-glow
                      min-w-[550px]  
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
              {
                calculateStarCount(m.StarCount)?.map((m) => m)
              }
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
