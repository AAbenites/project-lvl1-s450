import { random } from 'lodash';
import { cons, car, cdr } from 'hexlet-pairs';
import loop from '..';

const gameDescription = 'What is the result of the expression?';

const askAndCalculate = (a, b) => {
  switch (random(0, 2)) {
    case 0:
      return cons(`${a} + ${b}`, a + b);
    case 1:
      return cons(`${a} - ${b}`, a - b);
    default:
      return cons(`${a} * ${b}`, a * b);
  }
};

const askQuestion = () => {
  const firstNum = random(1, 50);
  const secondNum = random(1, 50);
  const gameData = askAndCalculate(firstNum, secondNum);
  const question = `${car(gameData)}`;
  const correctAnswer = String(cdr(gameData));
  return cons(question, correctAnswer);
};

export default () => loop(gameDescription, askQuestion);
