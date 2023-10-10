import React from 'react';
import './About.css';
import { Typography } from '@mui/material';

function About() {
    return (
        <div className="about">
            <div className="aboutContainer">
                <Typography>This is a random Quote</Typography>
            </div>
            <div className="aboutContainer2">
                <div>
                    <img src='https://ddgimgs-f43e.kxcdn.com/1866670/64lqpd_54c2e22d1fc78eb00a2f6f81db3b83ee19b6f19f.jpg' alt="About Me" className="aboutAvatar" />

                    <Typography
                        variant="h4"
                        style={{ margin: "1vmax 0", color: "black" }}
                    >
                        Vanvir Singh
                    </Typography>

                    <Typography>Full Stack Developer</Typography>

                    <Typography style={{ margin: "1vmax 0", textAlign: "center" }}>
                        I am Full Stack Developer at CodeMafias
                    </Typography>
                </div>

                <div>
                    <Typography
                        style={{
                            wordSpacing: "5px",
                            lineHeight: "50px",
                            letterSpacing: "5px",
                            textAlign: "right",
                        }}
                    >
                        Here's a description about me. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, debitis tempore dignissimos itaque aliquid, beatae id ab quibusdam at officia rerum vero? Incidunt, corrupti provident?
                    </Typography>
                </div>
            </div>
        </div>
    )
}

export default About
