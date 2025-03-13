import { PostData } from "@/utils/ApiUtil";

const url = process.env.API_URL;

export async function POST(MODEL) {

  const body = await MODEL.json();

  const API_URL = url + "api/contacts";
  var mdl = {
    "data" : body
  }
  const data = await PostData(API_URL, JSON.stringify(mdl));
  return data;
}
