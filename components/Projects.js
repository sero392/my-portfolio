import { GetData } from "@/utils/ApiUtil";

async function getData() {
  const url = process.env.NEXT_PUBLIC_SITE_URL;

  const response = await GetData(url + "api/project");
  return await response.json();
}


export default async function Projects() {
  const response = await getData();
  return (
    <div id="projects" className="bg-blue-950 text-zinc-50 mt-2 p-10">
      <div className="text-center text-6xl font-bold">
        <span>Projeler</span>
      </div>

      {
        response?.data?.map((m, index) => (
          <div key={index} className="flex flex-row mt-3 gap-7 flex-wrap justify-center">
            <div
              className="project-container  shadow-xl shadow-blue-400/50 p-10 
          flex flex-col w-[400px]
          "
            >
              {m.ProjectLink && (
                <div
                  className="project-pill text-xs font-bold rounded-3xl  
  w-auto px-5 bg-blue-300/90 text-blue-950 py-1 mb-3"
                >
                  {m.ProjectLink}
                </div>
              )}
              <div className="project-title  text-lg font-bold">{m.ProjectTitle}</div>
              <div className="project-text text-sm">{m.ProjectText}</div>

              <div className="project-tags mt-2 flex gap-3 mt-5">
                {
                  m.project_technologies.map((m,index) => (
                    <div key={index} className="tag bg-gray-400/50 text-gray-300 rounded-full min-w-[50px] text-center px-3 text-sm">
                      {m.TechName}
                    </div>
                  ))
                }


              </div>
            </div>
          </div>
        ))
      }



    </div>
  );
}
