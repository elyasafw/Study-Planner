import { tasks } from "./data";

export function getTasks(title) {
    return new Promise((res, rej) => {
        console.log(`Getting task: ${title} ...`);
        setTimeout(() => {
            if (err) {
                rej(`Error: ${err.message}`);
            }
            const task = tasks.find((t) => t.title === title);
            if (!tasks) {
                rej(`Task: ${title} not found`);
            }
            res(task);
        }, 1000);
    });
}
