import { Task, TaskManager } from './TaskManager'; 
import { Category } from './types'; 

const taskForm = document.getElementById('taskForm') as HTMLFormElement;
// // Add the new task to the task manager
const taskManager = new TaskManager()


taskForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent the default form submission behavior

    const taskNameInput = document.getElementById('taskName') as HTMLInputElement;
    const descriptionInput = document.getElementById('description') as HTMLTextAreaElement;
    const deadlineInput = document.getElementById('deadline') as HTMLInputElement;
    const categoryInput = document.getElementById('category') as HTMLInputElement;

    // Get the input values
    let taskName = taskNameInput.value;
    let description = descriptionInput.value;
    let deadline = new Date(deadlineInput.value);
    let category = categoryInput.value as Category;

    console.log(taskName, description, deadline, category); // Log the input values

    // Create a new task
    const newTask = new Task(taskName, description, deadline, category);

    
    taskManager.addTask(newTask);

    taskForm.reset(); 
    
});

