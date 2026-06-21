import createProject, { addTodoToProject } from "./project.js"
import createTodo from "./todo.js";
import newProject, { getSelectedProjectId, setSelectedProjectId, loadProject } from "./app.js";
import renderProject, { renderTodo, renderProjectInfo } from "./dom.js";
import { getProject } from "./app.js";

loadProject();

if (getProject().length === 0) {
    const defaultProject = createProject("default", "asdfghj");

    newProject(defaultProject);

    const todo5 = createTodo(
        "Morning workout",
        "30 minutes of exercise",
        "Low",
        "2026-06-17"
    );

    addTodoToProject(defaultProject, todo5);
}

let projectArray = getProject();

if (projectArray.length > 0) {
    setSelectedProjectId(projectArray[0].id);
}
// console.log(projectArray)

renderProject(getProject());
// console.log(getProject());
// console.log(getSelectedProjectId());
const selectedProject = getProject().find(project => {
    return project.id === getSelectedProjectId();

});
console.log(getSelectedProjectId());
console.log(getProject());
console.log(selectedProject);
renderProjectInfo(selectedProject);

renderTodo(selectedProject);