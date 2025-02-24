import { Star } from "lucide-react";
import Image from "next/image";

export default function References(){
return (
    <div className="bg-zinc-800 text-zinc-50 mt-2 p-5 grid grid-cols-2 gap-2">

        <div className="bg-teal-300  rounded-md m-auto p-3 w-[450px]">
            <div className="flex justify-center">
                <Image className="rounded-full" alt="referans resmi" width={100} height={100} src="/images/S.jpg" />
            </div>

            <div className="card-title text-zinc-700 text-lg font-bold text-center mt-2">
                Burhanettin Yarımbatman
            </div>

            <div className="card-title text-zinc-50 flex justify-center">
               <Star />
               <Star />
               <Star />
               <Star />
               <Star />
            </div>
        </div>

        <div className="bg-teal-300 rounded-md m-auto p-3 w-[450px]">
            <div className="flex justify-center">
                <Image className="rounded-full" alt="referans resmi" width={100} height={100} src="/images/S.jpg" />
            </div>

            <div className="card-title text-zinc-700 text-lg font-bold text-center mt-2">
                Merihcan Korkmaz
            </div>

            <div className="card-title text-zinc-50 flex justify-center">
               <Star />
               <Star />
               <Star />
               <Star />
               <Star />
            </div>
        </div>

        
    </div>
)
}