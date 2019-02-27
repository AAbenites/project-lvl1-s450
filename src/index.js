import readlineSync from 'readline-sync';

export const hello = () => {
  console.log('\nWelcome to the Brain Games!');
};

export default () => {
  const username = readlineSync.question('What is your name? ');
  console.log(`Hi ${username}`);
  return username;
};
