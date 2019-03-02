import { random } from 'lodash';
import { cons } from 'hexlet-pairs';
import loop from '..';

const gameDescription = 'Find the greatest common divisor of given numbers.';

const greatestCommonDivisor = (a, b) => {
  if (b === 0) {
    return a;
  }
  return greatestCommonDivisor(b, a % b);
};

const askQuestion = () => {
  const firstNum = random(1, 100);
  const secondNum = random(1, 100);
  const question = `${firstNum} ${secondNum}`;
  const correctAnswer = String(greatestCommonDivisor(firstNum, secondNum));
  return cons(question, correctAnswer);
};

export default () => loop(gameDescription, askQuestion);
