import { GetData } from "@/utils/ApiUtil";

export async  function GET() {
  const API_URL = "http://localhost:1337/api/about/";
  const data = await GetData(API_URL);
  return data;
}
