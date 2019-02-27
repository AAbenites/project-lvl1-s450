import readlineSync from 'readline-sync';

export default () => {
  console.log('Welcome to the Brain Games!');
  const username = readlineSync.question('What is your name? ');
  console.log(`Hi ${username}`);
};
