import { students } from "./data.js";
import { findStudent } from "./callbacks.js";
import { getTasks } from "./promises.js";
import { sendReminder } from "./asyncAwait.js";

console.log("=== STUDY PLANER ===");
findStudent(1, (err, student) => {
    if (err) {
        return console.log(`Error: ${err.message}`);
    }
    console.log(student);
});

findStudent(10, (err, student) => {
    if (err) {
        return console.log(`Error: ${err}`);
    }
});

getTasks("work on project")
    .then((task) => console.log(`Build plan for: ${task.title}`))
    .catch((err) => console.error(err))
    .finally(() => console.log("search task done!"));

getTasks("fake title").catch((err) => console.error(err));

const david = students[0];
const dana = students[1];
async function run() {
    try {
        const resultDavid = await sendReminder(david);
        console.log(resultDavid);
        const resultDana = await sendReminder(dana);
        console.log(resultDana);
    } catch (err) {
        console.log(err);
    }
}
run();
