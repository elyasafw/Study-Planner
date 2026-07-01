export async function sendReminder(student) {
    console.log(`Sending reminder ...`);
    try {
        await new Promise((res, rej) => {
            setTimeout(() => {
                if (student.phone) {
                    res(`Reminder sended successfully`);
                } else {
                    rej(`Student ${student.id} does not has A phone number`);
                }
            }, 1000);
        });
    } catch (error) {
        console.log(error);
    }
}
