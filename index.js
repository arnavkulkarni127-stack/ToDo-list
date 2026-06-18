import createProject, { addTodoToProject } from "./project.js"
import createTodo from "./todo.js";
import newProject, { getSelectedProjectid, setSelectedProjectId } from "./app.js";
import renderProject, { renderTodo } from "./dom.js";
import { getProject } from "./app.js";

const defaultProject = createProject("default", "asdfghj");
newProject(defaultProject);
setSelectedProjectId(defaultProject.id);
const inboxProject = createProject(
    "Inbox",
    "General tasks"
);

const odinProject = createProject(
    "Odin",
    "JavaScript course work"
);

const personalProject = createProject(
    "Personal",
    "Personal goals and errands"
);
const todo1 = createTodo(
    "Buy groceries",
    "Milk, eggs, bread",
    "Medium",
    "2026-06-17"
);

const todo2 = createTodo(
    "Finish Todo App",
    "Complete data layer",
    "High",
    "2026-06-18"
);

const todo3 = createTodo(
    "Read about localStorage",
    "Study JSON.parse and JSON.stringify",
    "Medium",
    "2026-06-19"
);

const todo4 = createTodo(
    "Morning workout",
    "30 minutes of exercise",
    "Low",
    "2026-06-17"
);

const todo5 = createTodo(
    "Morning workout",
    "30 minutes of exercise",
    "Low",
    "2026-06-17"
);
addTodoToProject(defaultProject, todo5)
addTodoToProject(inboxProject, todo1);

addTodoToProject(odinProject, todo2);
addTodoToProject(odinProject, todo3);

addTodoToProject(personalProject, todo4);
newProject(inboxProject);
newProject(odinProject);
newProject(personalProject);

let projectArray = getProject();
console.log(projectArray)

renderProject(getProject());
const selectedProject = getProject().find(project => {
    console.log("found");
    return project.id === getSelectedProjectid(defaultProject.id);

});
console.log(getSelectedProjectid());
console.log(getProject());
console.log(selectedProject);

renderTodo(selectedProject);