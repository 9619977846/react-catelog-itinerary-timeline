/* eslint-disable global-require, import/no-unresolved, react/no-multi-comp */
import React from "react";
import ReactDOM from "react-dom";
import GithubCorner from "react-github-corner";
import { Catalog, CodeSpecimen, ReactSpecimen, pageLoader } from "catalog";
import SchoolIcon from "material-ui-icons/School";
import WorkIcon from "material-ui-icons/Work";
import StarIcon from "material-ui-icons/Star";
import FlightTakeoff from "material-ui-icons/FlightTakeoff";

import {
  VerticalTimeline,
  VerticalTimelineElement
} from "../src/timeline_module/timeline_module";
import "./main.css";
import "../style.css";

// Add your documentation imports here. These are available to
// React specimen. Do NOT pass React here as Catalog does that.

// const timelineElements = [
//   <VerticalTimelineElement
//     className="vertical-timeline-element--work"
//     date="2011 - present"
//     iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
//     icon={<WorkIcon />}
//   >
//     <h3 className="vertical-timeline-element-title">Creative Director</h3>
//     <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
//     <p>
//       Creative Direction, User Experience, Visual Design, Project Management,
//       Team Leading
//     </p>
//   </VerticalTimelineElement>,
//   <VerticalTimelineElement
//     className="vertical-timeline-element--work"
//     date="2010 - 2011"
//     iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
//     icon={<WorkIcon />}
//   >
//     <h3 className="vertical-timeline-element-title">Art Director</h3>
//     <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
//     <p>
//       Creative Direction, User Experience, Visual Design, SEO, Online Marketing
//     </p>
//   </VerticalTimelineElement>,
//   <VerticalTimelineElement
//     className="vertical-timeline-element--work"
//     date="2008 - 2010"
//     iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
//     icon={<WorkIcon />}
//   >
//     <h3 className="vertical-timeline-element-title">Web Designer</h3>
//     <h4 className="vertical-timeline-element-subtitle">Los Angeles, CA</h4>
//     <p>User Experience, Visual Design</p>
//   </VerticalTimelineElement>,
//   <VerticalTimelineElement
//     className="vertical-timeline-element--work"
//     date="2006 - 2008"
//     iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
//     icon={<WorkIcon />}
//   >
//     <h3 className="vertical-timeline-element-title">Web Designer</h3>
//     <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
//     <p>User Experience, Visual Design</p>
//   </VerticalTimelineElement>,
//   <VerticalTimelineElement
//     className="vertical-timeline-element--education"
//     date="April 2013"
//     iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
//     icon={<SchoolIcon />}
//   >
//     <h3 className="vertical-timeline-element-title">
//       Content Marketing for Web, Mobile and Social Media
//     </h3>
//     <h4 className="vertical-timeline-element-subtitle">Online Course</h4>
//     <p>Strategy, Social Media</p>
//   </VerticalTimelineElement>,
//   <VerticalTimelineElement
//     className="vertical-timeline-element--education"
//     date="November 2012"
//     iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
//     icon={<SchoolIcon />}
//   >
//     <h3 className="vertical-timeline-element-title">
//       Agile Development Scrum Master
//     </h3>
//     <h4 className="vertical-timeline-element-subtitle">Certification</h4>
//     <p>Creative Direction, User Experience, Visual Design</p>
//   </VerticalTimelineElement>,
//   <VerticalTimelineElement
//     className="vertical-timeline-element--education"
//     date="2002 - 2006"
//     iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
//     icon={<SchoolIcon />}
//   >
//     <h3 className="vertical-timeline-element-title">
//       Bachelor of Science in Interactive Digital Media Visual Imaging
//     </h3>
//     <h4 className="vertical-timeline-element-subtitle">Bachelor Degree</h4>
//     <p>Creative Direction, Visual Design</p>
//   </VerticalTimelineElement>,
//   <VerticalTimelineElement
//     iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
//     icon={<StarIcon />}
//   />,
// ];

const data = {
  itinerary_id: "3dd59474-f467-42bc-8098-3c1695ab362d",
  traveler: {
    first_name: "John",
    middle_name: "C.",
    last_name: "Doe"
  },
  origin_iata: "TXL",
  destination_iata: "MUC",
  segments: [
    {
      segment_id: "452dfb51-0ac6-4274-b740-af6f89bc6116",
      type: "GROUND",
      origin: {
        value: "Alte Schönhauser Straße 3, 10119 Berlin",
        type: "STREET_ADDRESS"
      },
      departure: 1523596800,
      destination: {
        type: "AIRPORT",
        value: "TXL"
      }
    },
    {
      segment_id: "39552e6d-6785-4e83-82dc-157a45773b45",
      type: "AIRPORT",
      origin: {
        type: "AIRPORT",
        value: "TXL"
      },
      departure: 1523599200,
      detail: {
        busyness_index: 10
      }
    },
    {
      segment_id: "07f77c9f-7fdf-446b-91d5-52e900f33723",
      type: "FLIGHT",
      origin: {
        type: "AIRPORT",
        value: "TXL"
      },
      destination: { type: "AIRPORT", value: "MUC" },
      departure: 1523602800,
      detail: {
        boarding: 1523601000,
        flight_number: "LH2031",
        gate: "C12",
        seat: "12C"
      }
    }
  ]
};

const timelineElements = [];

data.segments.map((segment, i) => {
  // Return the element. Also pass key
 

    switch(segment.type) { 
      case 'GROUND': { 
        timelineElements.push(
          <VerticalTimelineElement
            className="vertical-timeline-element--GROUND"
            date="07:20"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title">Pick up from</h3>
            <h4 className="vertical-timeline-element-subtitle"></h4>
            <p>
            {segment.origin.value}
            </p>
           
          </VerticalTimelineElement>
        );
         break; 
      } 
      case 'AIRPORT': { 
        timelineElements.push(
          <VerticalTimelineElement
            className="vertical-timeline-element--AIRPORT"
            date="08:00"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<WorkIcon />}
          >
          <h3 className="vertical-timeline-element-title"> {segment.origin.value} Airport</h3>
            <h4 className="vertical-timeline-element-subtitle"></h4>
            <p>
            Terminal C 
            </p>
           
          </VerticalTimelineElement>
        );
         break; 
      } 
      case 'FLIGHT': { 
        timelineElements.push(
          <VerticalTimelineElement
            className="vertical-timeline-element--FLIGHT"
            date="08:40"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<WorkIcon />}
          >
          <div className="row-fluid">
            <div className="span2 offset1">  <h4 className="vertical-timeline-element-subtitle"> {segment.detail.flight_number} <span>Boarding 08:20</span></h4> </div>
            <div className="span2">  <h3 className="vertical-timeline-element-title"> {segment.origin.value} <FlightTakeoff></FlightTakeoff>  {segment.destination.value} </h3></div>
            <div className="span2"> 
                    
                    {segment.detail.gate} 
                  {segment.detail.seat} 
                    <button className="online-btn">online</button>
                </div>
          </div>
            
           
           
          </VerticalTimelineElement>
        );
         break; 
      }
      default: { 
         //statements; 
         break; 
      } 
    }
});

const pages = [
  {
    path: "/",
    title: "Center",
    content: () => <VerticalTimeline>{timelineElements}</VerticalTimeline>
  },
  {
    path: "/one-side",
    title: "One Side TimeLine",
    content: () => (
      <VerticalTimeline layout="1-column">{timelineElements}</VerticalTimeline>
    )
  }
];

ReactDOM.render(
  <div>
    <Catalog
      
      pages={pages}
      theme={{ background: "#e3e3e3" }}
      navBar= {{background : "red"}}
      specimens={{
        javascript: props => <CodeSpecimen {...props} lang="javascript" />,
        js: props => <CodeSpecimen {...props} lang="javascript" />,
        jsx: props => <ReactSpecimen {...props} 
        />
      }}
      title="TimeLine"
    />
  </div>,
  document.getElementById("catalog")
);
