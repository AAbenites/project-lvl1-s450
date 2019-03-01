import { random } from 'lodash';
import { cons, car, cdr } from 'hexlet-pairs';
import loop from '..';

const getSignAndCalculate = (a, b) => {
  switch (random(0, 2)) {
    case 0:
      return cons('+', a + b);
    case 1:
      return cons('-', a - b);
    default:
      return cons('*', a * b);
  }
};

const askQuestion = () => {
  const firstNum = random(1, 50);
  const secondNum = random(1, 50);
  const gameData = getSignAndCalculate(firstNum, secondNum);
  const question = `${firstNum} ${car(gameData)} ${secondNum}`;
  const correctAnswer = String(cdr(gameData));
  return cons(question, correctAnswer);
};

export default () => loop('What is the result of the expression?\n', askQuestion);
