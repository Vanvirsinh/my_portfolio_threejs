import React from 'react';
import './Projects.css';
import { Button, Typography } from '@mui/material';
import { AiOutlineProject } from 'react-icons/ai';
import { FaRegSmileWink } from 'react-icons/fa';
import { Delete } from '@mui/icons-material'



export const ProjectCard = ({
    url,
    projectImage,
    projectTitle,
    description,
    technologies,
    isAdmin = false
}) => {

    return (
        <>
            <a href={url} className="projectCard" target="black">
                <div>
                    <img src={projectImage} alt="Project" />
                    <Typography variant="h5">{projectTitle}</Typography>
                </div>
                <div>
                    <Typography variant="h4"> About Project</Typography>
                    <Typography>{description}</Typography>
                    <Typography variant="h6">Tech Stack: {technologies}</Typography>
                </div>
            </a>

            {isAdmin && (
                <Button
                    style={{ color: "rgba(40,40,40,0.7)" }}>
                    <Delete />
                </Button>
            )}
        </>
    );
};

let projects = [1, 2, 3];

function Projects() {
    return (
        <div className="projects">
            <Typography variant="h3">
                Projects <AiOutlineProject />
            </Typography>

            <div className="projectsWrapper">
                {projects.map((index, item) => (
                    <ProjectCard
                        key={item}
                        url="https://codemafias.com"
                        projectImage="https://www.zudio.com/cdn/shop/files/Loungwear-Mobile-03.jpg?v=1679910284"
                        projectTitle="Sample Project Title"
                        description="This is a sample description for a sample project."
                        technologies="Node Js, JavaScript, React, MongoDB, EJS, Express"
                    />
                ))}
            </div>

            <Typography variant="h3" style={{ font: "100 1.2rem 'Ubuntu Mono'" }}>
                All The Projects Shown Above Are Made By Me <FaRegSmileWink />
            </Typography>
        </div>
    )
}

export default Projects
