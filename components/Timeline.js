"use client";

import { GetData } from "@/utils/ApiUtil";
import { School } from "lucide-react";
import React, { useEffect, useState } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Timeline = () => {
  const [jobData, setJobData] = useState([]);

  async function getData() {
    const siteURL = process.env.NEXT_PUBLIC_SITE_URL;
    const response = await GetData(siteURL + "api/jobhistory");
    return await response.json();
  }

  useEffect(() => {
    getData().then((res) => setJobData(res));
  }, []);

  if (jobData.length === 0) return;
  return (
    <div id="job-history" className="timeline-container  bg-blue-950 mt-2">
      <VerticalTimeline>
        {
          jobData?.data?.map((m, index) => (
            <VerticalTimelineElement
              key={index}
              dateClassName="text-zinc-50 "
              date={m.DateRange}
              iconStyle={{ background: "#fff", color: "#172554" }}
              icon={<School />}
            >
              <h3 className="vertical-timeline-element-title">
                {m.OrganisationName}
              </h3>
              <p>{m.Position}</p>
            </VerticalTimelineElement>
          ))
        }
      </VerticalTimeline>
    </div>
  );
};

export default Timeline;
