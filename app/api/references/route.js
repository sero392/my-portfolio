import { GetData } from "@/utils/ApiUtil";

const url = process.env.API_URL;

export async  function GET() {
  const API_URL = url + "api/references/";
  const data = await GetData(API_URL);
  return data;
}
