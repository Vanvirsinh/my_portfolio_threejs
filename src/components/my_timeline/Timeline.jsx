import React from 'react';
import { Timeline } from '@mui/lab';
import { TimelineConnector } from '@mui/lab';
import { TimelineContent } from '@mui/lab';
import { TimelineDot } from '@mui/lab';
import { TimelineItem } from '@mui/lab';
import { TimelineOppositeContent } from '@mui/lab';
import { TimelineSeparator } from '@mui/lab';
import { Event } from '@mui/icons-material';
import { Typography } from '@mui/material';

const TimeLine = ({ timelines = [] }) => {
    return (
        <div>
            <Timeline position="alternate">
                {
                    timelines.map((item, index) => (
                        <TimelineItem key={index}>
                            <TimelineOppositeContent
                                sx={{ m: "auto 0" }}
                                align="right"
                                variant="body2"
                                color="text.secondary"
                            >
                                Kuchh bhi
                            </TimelineOppositeContent>

                            <TimelineSeparator>
                                <TimelineConnector />
                                <TimelineDot>
                                    <Event />
                                </TimelineDot>
                                <TimelineConnector />
                            </TimelineSeparator>

                            <TimelineContent sx={{ py: "12px", px: 2 }}>
                                <Typography variant='h6'>Title</Typography>
                                <Typography>Sub title</Typography>
                            </TimelineContent>

                        </TimelineItem>
                    ))
                }
            </Timeline>
        </div>
    )
}

export default TimeLine;