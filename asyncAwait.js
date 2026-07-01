export async function sendReminder(student) {
    console.log(`Sending reminder ...`);
    try {
        await new Promise((res, rej) => {
            setTimeout(() => {
                if (!student.phone) {
                    rej(`Student ${student.id} does not has A phone number`);
                }
                res(`Reminder sended successfully`);
            }, 1000);
        });
    } catch (error) {
        throw error.message;
    }
}
