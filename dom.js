import {
    getProject,
    setSelectedProjectId,
    getSelectedProjectid
} from "./app.js";

//variable declaration

const content = document.getElementById("content");
const projectContainer = document.getElementById("projects");
const todoContainer = document.getElementById("todos");

function renderProject(projectArray) {
    projectArray.forEach(project => {
        let projectdiv = document.createElement("div");
        projectdiv.textContent = project.title;
        projectdiv.classList.add("project-item");
        projectContainer.appendChild(projectdiv);

        projectdiv.addEventListener("click", function showTodo() {
            const allProjects = document.querySelectorAll(".project-item");
            allProjects.forEach(project => {
                project.classList.remove("active");
            });
            projectdiv.classList.add("active");
            setSelectedProjectId(project.id);
            todoContainer.innerHTML = "";
            renderTodo(project);


        })
    });
}


function renderTodo(project) {
    let todoArray = project.todos;
    todoArray.forEach(todo => {
        let todoDiv = document.createElement("div");
        todoDiv.textContent = todo.title;
        todoContainer.appendChild(todoDiv);
    });

}

export { renderTodo };
export default renderProject;