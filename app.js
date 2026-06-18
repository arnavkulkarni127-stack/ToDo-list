import createProject from "./project.js";

let projects = [];

function newProject(project) {
    projects.push(project);
    // console.log(projects)


}
function getProject() {
    return projects;
}

const projectList = getProject();

let selectedProjectId = null;

function setSelectedProjectId(id) {
    selectedProjectId = id;
}
function getSelectedProjectid() {
    return selectedProjectId;
}




export {
    getProject,
    getSelectedProjectid,
    setSelectedProjectId
};
export default newProject;  