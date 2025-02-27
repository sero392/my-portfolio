"use client";

import { School } from "lucide-react";
import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import 'react-vertical-timeline-component/style.min.css';


const Timeline = () => {
  return (
    <div id="job-history" className="timeline-container  bg-blue-950 mt-2">
      <VerticalTimeline>
        <VerticalTimelineElement
          dateClassName="text-zinc-50 "
          date="2024-09-24"
          iconStyle={{  background: "#fff", color: "#172554" }}
          icon={<School />}
        >
          <h3 className="vertical-timeline-element-title">
            Uludağ Üniversitesi
          </h3>
          <p>Yönetim Bilişim Sistemleri - Yüksek Lisans</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          dateClassName="text-zinc-50 "
          date="2020-07-24"
          iconStyle={{ background: "#fff", color: "#172554" }}
          icon={<School />}
        >
          <h3 className="vertical-timeline-element-title">MAKÜ</h3>
          <p>Yönetim Bilişim Sistemleri - Lisans</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          dateClassName="text-zinc-50 "
          date="2015-02-10"
          iconStyle={{ background: "#fff", color: "#172554" }}
          icon={<School />}
        >
          <h3 className="vertical-timeline-element-title">
            Kırcılar Anadolu Meslek Lisesi
          </h3>
          <p>Bilişim Sistemleri</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default Timeline;
