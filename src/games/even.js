import { random } from 'lodash';
import { cons } from 'hexlet-pairs';
import loop from '..';

const gameDescription = 'Answer "yes" if number even otherwise answer "no".\n';

const isEven = num => num % 2 === 0;

const getCorrectAnswer = num => (isEven(num) ? 'yes' : 'no');

const askQuestion = () => {
  const question = random(1, 100);
  const correctAnswer = getCorrectAnswer(question);
  return cons(question, correctAnswer);
};

export default () => loop(gameDescription, askQuestion);
