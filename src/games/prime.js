import { random } from 'lodash';
import { cons } from 'hexlet-pairs';
import loop from '..';

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".\n';

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const askQuestion = () => {
  const firstNum = random(1, 100);
  const question = `${firstNum}`;
  const correctAnswer = isPrime(firstNum) ? 'yes' : 'no';
  return cons(question, correctAnswer);
};

export default () => loop(gameDescription, askQuestion);
