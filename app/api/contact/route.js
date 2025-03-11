import { PostData } from "@/utils/ApiUtil";

const url = process.env.API_URL;

export async function POST(MODEL) {
  const API_URL = url + "api/contacts";
  const data = await PostData(API_URL, MODEL);
  return data;
}
