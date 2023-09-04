import React from 'react';
import {MdSchool} from 'react-icons/md';
import { 
    VerticalTimeline, 
    VerticalTimelineElement
 }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './Education.css';
const Education = () => {
  return (
    <>
     <div className=" education" id="education">
    <h2 className="col-12 mt-3 mb-1 text-center ">Education Details</h2>
    <hr />
    
      </div>
      <VerticalTimeline>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'white', color: 'black' }}
    contentArrowStyle={{ borderRight: '7px solid  white' }}
    date="Year 2018"
    iconStyle={{ background: 'blue', color: 'black' }}
    icon={<MdSchool />}
  >
    <h3 className="vertical-timeline-element-title">Class 10th</h3>
    <h4 className="vertical-timeline-element-subtitle">Kendriya vidyalaya</h4>
    <p>
    <b>percentage:</b> {79.4}
    </p>
  </VerticalTimelineElement>  
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'white', color: 'black' }}
    contentArrowStyle={{ borderRight: '7px solid  white' }}
    date="Year 2020"
    iconStyle={{ background: 'blue', color: 'black' }}
    icon={<MdSchool />}
  >
    <h3 className="vertical-timeline-element-title">Class 12th</h3>
    <h4 className="vertical-timeline-element-subtitle">Kendriya vidyalaya</h4>
    <p>
    <b>percentage:</b> {65.6}
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'white', color: 'black' }}
    contentArrowStyle={{ borderRight: '7px solid  white' }}
    date="2020-2024"
    iconStyle={{ background: 'blue', color: 'black' }}
    icon={<MdSchool />}
  >
    <h3 className="vertical-timeline-element-title">Btech</h3>
    <h4 className="vertical-timeline-element-subtitle">jain university</h4>
    <p>
    <b>pursuing:</b> {76.8}
    </p>
  </VerticalTimelineElement>
    </VerticalTimeline>
    </>
)
}

export default Education
