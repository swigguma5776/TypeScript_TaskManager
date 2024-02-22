import { Managing, Category }  from './types';
import {v4 as uuidv4 } from 'uuid'; 

export class Task {
    private _id: string;
    constructor(
        public name: string,
        public description: string,
        public deadline: Date,
        public category: Category,
        public completed: boolean = false
    ) {  
        this._id = uuidv4()
    }
    
    get id(): string {
        return this._id
    } 
    
}



export class TaskManager implements Managing<Task | string>{
    tasks: Task[] = [];

    addTask(task: Task) {
        this.tasks.push(task);
        this.updateTaskList(); 
    }

    removeTask(taskId: string) {
        const index = this.tasks.findIndex(task => task.id === taskId);
        if (index !== -1) {
            this.tasks.splice(index, 1);
        };
        this.updateTaskList();
    }
    
    private updateTaskList() {
        const container = document.getElementById('tasks') as HTMLElement;

        // Clear existing task list
        container.innerHTML = '';

        // Add each task to the task list
        
        this.tasks.forEach(task => {
            // Generate HTML for a task card
            const taskCardHTML = `
                <div class="card mb-3 rounded">
                    <div class="card-body">
                        <h5 class="card-title">Title: ${task.name}</h5>
                        <p class="card-text">Description: ${task.description}</p>
                        <p class="card-text">Deadline: ${task.deadline}</p>
                        <p class="card-text">Category: ${task.category}</p>
                        <button type="button" class="btn btn-danger btn-sm" data-task="${task.id}">Remove</button>
                    </div>
                </div>
            `;

            // Append task card HTML to the HTML variable
            container.insertAdjacentHTML('beforeend', taskCardHTML)
        });
        
         // Add event listener to handle task removal
         container.querySelectorAll('.btn-danger').forEach(button => {
            button.addEventListener('click', () => {
                const task = button.getAttribute('data-task');
                if (task) {
                    this.removeTask(task); // Call removeTask method with the taskId
                }
            });
        });
        
    }

}