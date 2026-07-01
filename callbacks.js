import { students } from "./data.js";

export function findStudent(id, callback) {
    console.log(`-> Search for student ID: ${id} ...`);
    setTimeout(() => {
        const student = students.find((s) => s.id === id);
        if (!student) {
            callback(`Student ID: ${id} not found`, null);
        } else {
            callback(null, student);
        }
    }, 1000);
}
