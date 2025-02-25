export default function Contact() {
  return (
    <div className="bg-blue-950 text-zinc-50 mt-2 p-10">
      <div className="text-center">
        <span className="text-6xl font-bold text-center">İletişim</span>
      </div>

      <div className="flex mt-8 flex-col gap-4">
        <div className=" w-[300px] mx-auto">
            <input type="text" className="w-full px-3 h-12 rounded-3xl text-xl text-zinc-700" placeholder="Adınız" />
        </div>
        <div className=" w-[300px] mx-auto">
            <input type="text" className="w-full px-3 h-12 rounded-3xl text-xl text-zinc-700" placeholder="Soyadınız" />
        </div>
        <div className=" w-[300px] mx-auto">
            <input type="text" className="w-full px-3 h-12 rounded-3xl text-xl text-zinc-700" placeholder="Mail Adresi" />
        </div>

        <div className=" w-[300px] mx-auto">
            <textarea placeholder="Mesaj" className="w-full px-3 h-48 rounded-3xl text-xl text-zinc-700">

            </textarea>
        </div>

        <div className=" w-[300px] mx-auto">
       <button className="w-full bg-blue-50 text-blue-950 px-12 py-2 rounded-3xl">Gönder</button>
        </div>
      </div>
    </div>
  );
}
