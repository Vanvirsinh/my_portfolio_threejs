import React from 'react';
import './YoutubeCard.css';
import { Typography } from '@mui/material';

function YoutubeCard({
    url = 'https://codemafias.com',
    title = 'Title Goes Here',
    image
}) {
    return (
        <div className="youtubeCard">
            <a href={url} target="blank">
                <img src={image} alt="Video" />
                <Typography>{title}</Typography>
            </a>
        </div>
    )
}

export default YoutubeCard
