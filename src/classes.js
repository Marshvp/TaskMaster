export class Projects {
    constructor(title, desc) {
    this.title = title;
    this.desc = desc;
    this.isCompleted = false;
    this.tasks = [];
    }

    addTask(task) {
        this.tasks.push(task)
    }
};

export class Task {
    constructor(title, desc, dueDate, priority) {
    this.title = title;
    this.desc = desc;
    this.dueDate = dueDate;
    this.priority = priority;
    this.checked = false;
    }
}