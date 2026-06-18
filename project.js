export default createProject;
export { addTodoToProject };
import createTodo from "./todo.js";
function createProject(title, description) {
    let id = crypto.randomUUID();
    let todos = [];
    return {
        id,
        title,
        description,
        todos
    };
}

function addTodoToProject(project, todo) {
    console.log("added")
    project.todos.push(todo);
}