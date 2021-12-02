import React from 'react';
import ProjectsDisplay from "../components/ProjectsDisplay";

const HomeScreen = (props) => {
    return (
        <div>
            <div className={'navbar'}>
                <div className={'barTitle'}>
                    <h1>Intext Project Management</h1>
                </div>
            </div>
            <ProjectsDisplay
                selectAndEditProject={props.selectAndEditProject}
                selectAndViewProject={props.selectAndViewProject}
                createProject={props.createSelectAndEditProject}
                deleteProject={props.deleteProject}
                projects={props.projects}
            />
        </div>
    );
};

export default HomeScreen;