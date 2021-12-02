import React from 'react';
import TextField from "../components/TextField";

const EditProjectScreen = (props) => {
    return (
        <div>
            <h1>Edit Project: {props.project.name}</h1>
            <TextField
                label={'Project Name:'}
                onChange={(value) => props.editProjectName(props.project.id, value.target.value)}
                value={props.project.name}
            />
            <TextField
                label={'Project Manager:'}
                onChange={(value) => props.editProjectManager(props.project.id, value.target.value)}
                value={props.project.manager}
            />
            <TextField
                label={'Project Risks:'}
                onChange={(value) => props.editProjectRisks(props.project.id, value.target.value)}
                value={props.project.risks}
            />
            <TextField
                label={'Project Members:'}
                onChange={(value) => props.editProjectMembers(props.project.id, value.target.value)}
                value={props.project.members}
            />
            <TextField
                label={'Due Date:'}
                onChange={(value) => props.editProjectDueDate(props.project.id, value.target.value)}
                value={props.project.dueDate}
            />
            <button onClick={() => props.changePage('view')} className={'SaveButton'}>Save</button>
        </div>
    );
};

export default EditProjectScreen;