class Task {
    constructor(taskName, priority, dueDate, status = "in-progress") {
        this.taskName = taskName;
        this.priority = priority;
        this.dueDate = new Date(dueDate);
        this.status = status;
    }

    isOverdue(currentDate) {
        return this.dueDate < new Date(currentDate);
    }

    markAsCompleted() {
        this.status = "completed";
    }

    updateTask(taskName, priority, dueDate, status) {
        this.taskName = taskName;
        this.priority = priority;
        this.dueDate = new Date(dueDate);
        this.status = status;
    }
}

class TaskManager {
    constructor() {
        this.tasks = [];
    }

    addTask(task) {
        this.tasks.push(task);
    }

    deleteTask(taskName) {
        this.tasks = this.tasks.filter(task => task.taskName !== taskName);
    }

    updateTask(taskName, taskDetails) {
        const task = this.tasks.find(task => task.taskName === taskName);
        if (task) {
            task.updateTask(taskDetails.taskName, taskDetails.priority, taskDetails.dueDate, taskDetails.status);
        }
    }

    sortByPriority() {
        this.tasks.sort((a, b) => a.priority - b.priority);
    }

    sortByDueDate() {
        this.tasks.sort((a, b) => a.dueDate - b.dueDate);
    }

    filterByStatus(status) {
        return this.tasks.filter(task => task.status === status);
    }

    displayTasks(currentDate) {
        this.tasks.forEach(task => {
            if (task.isOverdue(currentDate)) {
                console.log(`%c${task.taskName} - Overdue`, "color: red;");
            } else {
                console.log(`%c${task.taskName} - Upcoming`, "color: green;");
            }
        });
    }
}

const taskManager = new TaskManager();
const task1 = new Task("Complete project", 1, "2023-12-01");
const task2 = new Task("Prepare meeting notes", 2, "2023-12-10");
const task3 = new Task("Finish report", 3, "2023-12-15");

taskManager.addTask(task1);
taskManager.addTask(task2);
taskManager.addTask(task3);

taskManager.sortByPriority();
taskManager.sortByDueDate();

taskManager.displayTasks("2023-12-10");
taskManager.updateTask("Complete project", { taskName: "Complete project", priority: 2, dueDate: "2023-12-12", status: "in-progress" });
taskManager.deleteTask("Finish report");
taskManager.displayTasks("2023-12-10");
