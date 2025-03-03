"use client";
import { School } from "lucide-react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

export default function TimeLine({ timeLineData }) {
  return (
    <div>
      <VerticalTimeline>
        {timeLineData?.map((m, index) => (
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
        ))}
      </VerticalTimeline>
    </div>
  );
}
