import React, {Component} from 'react';
import clone from "just-clone";
import {v4} from "uuid";
import ReportWebVitals from "../reportWebVitals";
import HomeScreen from "../pages/HomeScreen";
import EditProjectScreen from "../pages/EditProjectScreen";
import ViewProjectScreen from "../pages/ViewProjectScreen";


class PomaApp extends Component {
    state = {
        page: 'home',
        selectedProjectId: '',
        projects: [
            {
                id: 'abcdefg',
                name: 'Billing System',
                manager: 'Dean',
                members: 'Dave, Tim',
                risks: 'Cost overun [high]',
                dueDate: '12/16/2051',
                description: 'This is a project description'
            }
        ]
    }

    changePage = (pageName) => {
        const newState = clone(this.state);
        newState.page = pageName;
        this.setState(newState);
    }

    selectAndEditProject = (projectId) => {
        this.setState({page: 'edit', selectedProjectId: projectId});
    }

    selectAndViewProject = (projectId) => {
        this.setState({page: 'view', selectedProjectId: projectId})
    }

    createSelectAndEditProject = () => {
        const newState = clone(this.state);
        const newId = v4();
        newState.projects.push({
            id: newId,
            name: 'New project',
            manager: '',
            members: '',
            risks: '',
            description: '',
            dueDate: ''
        });
        newState.selectedProjectId = newId;
        newState.page = 'edit';
        this.setState(newState);
    }

    addProject = (name, members) => {
        const newState = clone(this.state);
        newState.projects.push({
            id: v4(),
            name: name,
            members: members
        })
        this.setState(newState);
    }

    removeProject = (id) => {
        const newState = clone(this.state);
        const newProjects = newState.projects.filter((project) => {
            return project.id !== id;
        })
        console.log(newProjects);
        newState.projects = newProjects;
        this.setState(newState);
    }

    editProjectName = (id, name) => {
        const newState = clone(this.state);
        const project = newState.projects.find((project) => {return project.id === id});
        if (project) {
            project.name = name;
        }
        console.log(newState);
        this.setState(newState);
    }

    editProjectMembers = (id, members) => {
        const newState = clone(this.state);
        const project = newState.projects.find((project) => {return project.id === id});
        if (project) {
            project.members = members;
        }
        this.setState(newState);
    }

    editProjectManager = (id, projectManager) => {
        const newState = clone(this.state);
        const project = newState.projects.find((project) => {return project.id === id});
        if (project) {
            project.manager = projectManager;
        }
        this.setState(newState);
    }

    editProjectRisks = (id, risks) => {
        const newState = clone(this.state);
        const project = newState.projects.find((project) => {return project.id === id});
        if (project) {
            project.risks = risks;
        }
        this.setState(newState);
    }

    editProjectDueDate = (id, date) => {
        const newState = clone(this.state);
        const project = newState.projects.find((project) => {return project.id === id});
        if (project) {
            project.dueDate = date;
        }
        this.setState(newState);
    }

    render() {
        let pageToRender;
        switch (this.state.page) {
            case 'home':
                pageToRender = <HomeScreen
                    createSelectAndEditProject={this.createSelectAndEditProject}
                    selectAndViewProject={this.selectAndViewProject}
                    selectAndEditProject={this.selectAndEditProject}
                    deleteProject={this.removeProject}
                    projects={this.state.projects}
                />;
                break;
            case 'edit':
                pageToRender = <EditProjectScreen
                    changePage={this.changePage}
                    project={this.state.projects.find((prj) => prj.id === this.state.selectedProjectId)}
                    editProjectName={this.editProjectName}
                    editProjectMembers={this.editProjectMembers}
                    editProjectManager={this.editProjectManager}
                    editProjectRisks={this.editProjectRisks}
                    editProjectDueDate={this.editProjectDueDate}
                />
                break;
            case 'view':
                pageToRender = <ViewProjectScreen
                    changePage={this.changePage}
                    project={this.state.projects.find((prj) => prj.id === this.state.selectedProjectId)}
                />
                break;
            default:
                pageToRender = <HomeScreen
                    createSelectAndEditProject={this.createSelectAndEditProject}
                    selectAndViewProject={this.selectAndViewProject}
                    selectAndEditProject={this.selectAndEditProject}
                    deleteProject={this.removeProject}
                    projects={this.state.projects}/>;
                break;
        }
        return (
            <div>
                {pageToRender}
            </div>
        );
    }
};

export default PomaApp;