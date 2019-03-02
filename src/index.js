import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

const askName = () => {
  const username = readlineSync.question('May I have your name? ');
  console.log(`Hi ${username}`);
  return username;
};

const winAmount = 3;

export default (description, askQuestion) => {
  console.log('\nWelcome to the Brain Games!');
  console.log(`${description}\n`);
  const user = askName();
  const iter = (roundCount) => {
    if (roundCount === 0) {
      console.log(`Congratulations, ${user}!`);
      return;
    }
    const gameData = askQuestion();
    const question = car(gameData);
    const correctAnswer = cdr(gameData);
    console.log(`\nQuestion: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const isCorrect = userAnswer === correctAnswer;
    const result = isCorrect
      ? 'Correct!'
      : `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${user}!`;
    console.log(result);
    if (isCorrect) {
      iter(roundCount - 1);
    }
  };
  return iter(winAmount);
};
