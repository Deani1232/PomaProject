import React from 'react';
import ProjectDisplay from "./ProjectDisplay";

const ProjectsDisplay = (props) => {
    const projects = props.projects.map((project) => {
        return (
            <ProjectDisplay
                deleteProject={() => props.deleteProject(project.id)}
                name={project.name}
                id={project.id}
                members={project.members}
                risks={project.risks}
                description={project.description}
                manager={project.manager}
                selectAndEditProject={() => props.selectAndEditProject(project.id)}
                selectAndViewProject={() => props.selectAndViewProject(project.id)}
            />
        );
    });

    return (
        <div className={'ProjectsDisplay'}>
            <h1>Projects</h1>
            {projects}
            <button className={'AddProjectButton'} onClick={() => props.createProject()}>Add Project</button>
        </div>
    );
};

export default ProjectsDisplay;