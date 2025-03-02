import { GetData } from "@/utils/ApiUtil";

const url = process.env.API_URL;

export async  function GET() {
  const API_URL = url + "api/projects?populate=project_technologies";
  const data = await GetData(API_URL);
  return data;
}
