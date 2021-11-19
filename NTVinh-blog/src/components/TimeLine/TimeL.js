import React from 'react';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import { Typography } from '@material-ui/core';
//css
import './TimeL.css';

function TimeL({title,children, icon}) {
    return (
        <div className='timeLineCtn'>
          <Timeline className ={'timeL'}>  
            <TimelineItem className={'timeL_item'}>
              <TimelineSeparator>
              <TimelineDot className={'timeL_header'}>{icon}</TimelineDot>
                {/* <TimelineConnector /> */}
              </TimelineSeparator>
            <TimelineContent>
              <Typography variant='h6' className={'timeL_header-bottom'}>{title}</Typography>
            </TimelineContent>
            </TimelineItem>
              {children}   
          </Timeline>
      </div>
  //      <TimelineItem>
  //      <CustomTimeL />
  //      <TimelineContent>Code</TimelineContent>
  //    </TimelineItem>
  //  </Timeline>
    )
}
export const CustomTimeL =() =>(

    <TimelineSeparator className='timeL-custom'>
    {/* <TimelineDot variant={'outlined'} className={'timeL_header_dot'}/> */}
    {/* <TimelineConnector  /> */}
    </TimelineSeparator>
)
export default TimeL
