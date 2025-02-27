export default function Skills() {
  return (
    <div className="bg-blue-950 text-zinc-50 mt-2 p-10">
      <div className="text-center text-6xl font-bold">
        <span>Yetenekler</span>
      </div>

      <div className="flex flex-row mt-3 gap-7 flex-wrap justify-start">
        <div
          className="project-container p-10 
        flex flex-col w-[550px] "
        >
          <div className="font-bold w-full flex">
            <span>HTML</span>
            <span className="ml-auto text-lg">
                90%
            </span>
          </div>

          <div className="w-full rounded-full bg-blue-50">
            <div className="bg-blue-600 rounded-full px-2 py-1 w-[90%]"></div>
          </div>
        </div>
        
        
        
      </div>
    </div>
  );
}
