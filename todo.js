export default createTodo;
import { saveProject } from "./app.js";

function createTodo(title, description, priority, dueDate) {
    let id = crypto.randomUUID();
    let completed = false

    return {
        title,
        description,
        priority,
        dueDate,
        id,
        completed
    };
    saveProject();
}

