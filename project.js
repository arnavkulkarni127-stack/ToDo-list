export default createProject;
export { addTodoToProject };
import createTodo from "./todo.js";
import { saveProject } from "./app.js";
function createProject(title, description) {
    let id = crypto.randomUUID();
    let todos = [];
    return {
        id,
        title,
        description,
        todos
    };
    saveProject();
}

function addTodoToProject(project, todo) {
    project.todos.push(todo);
    saveProject();

}