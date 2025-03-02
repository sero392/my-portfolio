import { GetData } from "@/utils/ApiUtil";

async function getData() {
  const siteURL = process.env.NEXT_PUBLIC_SITE_URL;
  const response = await GetData(siteURL + "api/skills");
  return await response.json();
}
export default async function Skills() {
  const response = await getData();
  return (
    <div className="bg-blue-950 text-zinc-50 mt-2 p-10">
      <div className="text-center text-6xl font-bold">
        <span>Yetenekler</span>
      </div>

      <div className="flex flex-row mt-3 gap-7 flex-wrap justify-start">
        {
          response?.data?.map((m) => (
            <div
              className="project-container p-10 
          flex flex-col w-[550px] "
            >
              <div className="font-bold w-full flex">
                <span>{m.SkillName}</span>
                <span className="ml-auto text-lg">
                  {m.SkillPercent}%
                </span>
              </div>

              <div className="w-full rounded-full bg-blue-50">
                <div className="bg-blue-600 rounded-full px-2 py-1"
                  style={{ width: `${m.SkillPercent}%` }}
                >

                </div>
              </div>
            </div>

          ))
        }




      </div>
    </div>
  );
}
