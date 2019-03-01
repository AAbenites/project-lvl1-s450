import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

export const hello = () => {
  console.log('\nWelcome to the Brain Games!');
};

export const askName = () => {
  const username = readlineSync.question('What is your name? ');
  console.log(`Hi ${username}`);
  return username;
};

const winAmount = 3;

export default (description, askQuestion) => {
  hello();
  console.log(description);
  const user = askName();
  const iter = (roundCount) => {
    if (roundCount === 0) {
      console.log(`Congratulations, ${user}!`);
      return;
    }
    const game = askQuestion();
    const question = car(game);
    const correctAnswer = cdr(game);
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
