
import {
    getProject,
    setSelectedProjectId,
    getSelectedProjectId,
    saveProject,
    loadProject,
    newProject
} from "./app.js";
import createProject, { addTodoToProject } from "./project.js";
import createTodo from "./todo.js";

//variable declaration

const projectContainer = document.getElementById("projects");
const todoContainer = document.getElementById("todo-list");
function renderProject(projectArray) {
    projectArray.forEach(project => {
        let projectdiv = document.createElement("div");
        projectdiv.textContent = project.title;
        projectdiv.classList.add("project-item");
        if (project.id === getSelectedProjectId()) {
            projectdiv.classList.add("active");
        }
        projectContainer.appendChild(projectdiv);

        projectdiv.addEventListener("click", function showTodo() {
            const allProjects = document.querySelectorAll(".project-item");
            allProjects.forEach(project => {
                project.classList.remove("active");
            });
            projectdiv.classList.add("active");
            setSelectedProjectId(project.id);
            todoContainer.innerHTML = "";
            renderProjectInfo(project);
            renderTodo(project);
        })

    });
}


function renderTodo(project) {
    let todoArray = project.todos;
    todoArray.forEach(todo => {
        let todocard = document.createElement("div");
        const titleRow = document.createElement("div");
        titleRow.setAttribute("id", "titleRow");

        // delete a todo

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "🗑️";

        todocard.appendChild(titleRow);
        let todoTitle = document.createElement("h3");
        todoTitle.textContent = todo.title;
        todocard.appendChild(todoTitle);
        titleRow.appendChild(todoTitle);
        titleRow.appendChild(deleteButton);
        //...
        let todoDescription = document.createElement("p");
        todoDescription.textContent = todo.description;
        todocard.appendChild(todoDescription);
        //...
        let todoPriority = document.createElement("h4");
        todoPriority.textContent = "priority" + ": " + todo.priority;
        todocard.appendChild(todoPriority);
        //..
        let todoDue = document.createElement("h4");
        todoDue.textContent = todo.dueDate;
        todocard.appendChild(todoDue);
        //...status
        let todostatus = document.createElement("h4");
        todostatus.textContent = "";
        if (todo.completed === false) {
            todostatus.textContent = "Status: " + "🟩";
        }
        else {
            todostatus.textContent = "Status: " + "✅";
        }

        // deletee todo event listener 
        deleteButton.addEventListener("click", () => {
            project.todos = project.todos.filter(currentTodo => {
                return currentTodo.id !== todo.id;
                saveProject();
            });
            todoContainer.innerHTML = "";
            renderTodo(project);
            saveProject();

        });



        // end....
        todostatus.addEventListener("click", () => {

            todo.completed = !todo.completed;
            console.log(todo.completed);
            if (todo.completed === false) {
                todostatus.textContent = "Status: " + "🟩";

            }
            else {
                todostatus.textContent = "Status: " + "✅";


            }
            saveProject();

        });
        todocard.appendChild(todostatus);
        todoContainer.appendChild(todocard);
    });



}
function renderProjectInfo(project) {
    const projectInfo = document.getElementById("project-info");
    projectInfo.innerHTML = " ";
    const proTitle = document.createElement("h2");
    const prodescription = document.createElement("p");

    proTitle.textContent = project.title;
    prodescription.textContent = project.description;
    projectInfo.appendChild(proTitle);
    projectInfo.appendChild(prodescription);
}


// add a Todo
const addTodoBtn = document.getElementById("add-todo-btn");
const todoForm = document.getElementById("todo-form");
addTodoBtn.addEventListener("click", () => {
    console.log("hey")
    todoForm.classList.remove("hidden");

})


todoForm.addEventListener("submit", () => {
    event.preventDefault();
    const todoTitle = document.getElementById("todo-title").value;
    const todoDescription = document.getElementById("todo-description").value;
    const todoPriority = document.getElementById("todo-priority").value;
    const todoDate = document.getElementById("todo-date").value;
    const newTodo = createTodo(todoTitle, todoDescription, todoPriority, todoDate);


    const selectedProject = getProject().find(project => {
        return project.id === getSelectedProjectId();
    });
    addTodoToProject(selectedProject, newTodo);
    todoForm.classList.add("hidden")
    todoForm.reset();

    todoContainer.textContent = "";
    saveProject();
    renderTodo(selectedProject);



    // console.log(
    //     todoTitle,
    //     todoDescription,
    //     todoPriority,
    //     todoDate
    // );
})
//  End...

// adding project ui getter

const addProjectBtn = document.getElementById("add-project-btn");
const projectForm = document.getElementById("project-form");
addProjectBtn.addEventListener("click", () => {
    projectForm.classList.remove("hidden");
});
projectForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const title = document.getElementById("project-title").value;
    const description = document.getElementById("project-description").value;

    const project = createProject(title, description);

    newProject(project);
    saveProject();
    setSelectedProjectId(project.id);

    projectContainer.innerHTML = "";
    renderProject(getProject());

    renderProjectInfo(project);

    todoContainer.innerHTML = "";
    renderTodo(project);

    projectForm.reset();
    projectForm.classList.add("hidden");

});
export { renderTodo, renderProjectInfo };
export default renderProject;