import React from 'react';

const ProjectDisplay = (props) => {
    return (
        <div className={'ProjectDisplayContainer'}>
            <h3 className={'ProjectDisplayTitleText'}>{props.name}</h3>
            <hr/>
            <p>{props.description}</p>
            <h4>Manager: {props.manager}</h4>
            <h4>Members: {props.members}</h4>
            <h4>Risks: {props.risks}</h4>
            <div>
                <button className={'ProjectDisplayViewButton'} onClick={props.selectAndViewProject}>View</button>
                <button className={'ProjectDisplayEditButton'} onClick={props.selectAndEditProject}>Edit</button>
                <button className={'ProjectDisplayDeleteButton'} onClick={props.deleteProject}>Delete</button>
            </div>
        </div>
    );
};

export default ProjectDisplay;