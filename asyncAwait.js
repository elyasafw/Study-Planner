export async function sendReminder(student) {
    console.log(`-> Sending reminder ...`);
    return await new Promise((res, rej) => {
        setTimeout(() => {
            if (student && student.phone) {
                res(`Reminder sent to: ${student.phone} successfully`);
            } else {
                rej(`Student ${student.id} does not have a phone number`);
            }
        }, 1000);
    });
}
