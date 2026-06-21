import createProject from "./project.js";

let projects = [];

function newProject(project) {
    projects.push(project);
    // console.log(projects)
    saveProject();

}
function getProject() {
    return projects;
}

const projectList = getProject();

let selectedProjectId = null;




function setSelectedProjectId(id) {
    selectedProjectId = id;
}
function getSelectedProjectId() {
    return selectedProjectId;
}

function saveProject() {
    let stringprojects = JSON.stringify(projects);
    localStorage.setItem("projects", stringprojects);
    console.log("saved:", projects);
}
function loadProject() {
    const savedProjects = localStorage.getItem("projects");

    if (savedProjects) {
        projects = JSON.parse(savedProjects);
    }
}




export {
    getProject,
    getSelectedProjectId,
    setSelectedProjectId,
    saveProject,
    loadProject,
    newProject


};
export default newProject;  