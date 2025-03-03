
import { GetData } from "@/utils/ApiUtil";
import React from "react";
import TimeLine from "./Timeline";


async function getData() {
  const siteURL = process.env.NEXT_PUBLIC_SITE_URL;
  const response = await GetData(siteURL + "api/jobhistory");
  return await response.json();
}
export default async function JobHistory(){

  const response = await getData();
  return (
    <div id="job-history" className="timeline-container  bg-blue-950 mt-2">
      <TimeLine timeLineData={response?.data}>

      </TimeLine>
    
    </div>
  );
};

