import readlineSync from 'readline-sync';

export const askName = () => {
    const username = readlineSync.question("What is your name? ");
    console.log(`Hi ${username}`);
};