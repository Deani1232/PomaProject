import React from 'react';

const ViewProjectScreen = (props) => {
    return (
        <div>
            <h1>Project: {props.project.name}</h1>
            <p>{props.project.description}</p>
            <h4>Manager: {props.project.manager}</h4>
            <h4>Members: {props.project.members}</h4>
            <h4>Risks: {props.project.risks}</h4>
            <h4>Due Date: {props.project.dueDate}</h4>
            <h2>Week Stats (Hours spent per task):</h2>
            <h4>Requirements Analysis: 10</h4>
            <h4>Designing: 5</h4>
            <h4>Coding: 15</h4>
            <h4>Testing: 7</h4>
            <h4>Project Management: 2</h4>
            <h4></h4>
            <button className={'ProjectDisplayEditButton'} onClick={() => props.changePage('edit')}>Edit Project</button>
            <button className={'ViewProjectsButton'} onClick={() => props.changePage('home')}>View All Projects</button>
        </div>
    );
};

export default ViewProjectScreen;