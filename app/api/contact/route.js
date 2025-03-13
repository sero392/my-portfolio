import { PostData } from "@/utils/ApiUtil";

const url = process.env.API_URL;

export async function POST(MODEL) {
  const API_URL = url + "api/contacts";
  var mdl = {
    "data" : MODEL
  }
  const data = await PostData(API_URL, JSON.stringify(mdl));
  return data;
}
