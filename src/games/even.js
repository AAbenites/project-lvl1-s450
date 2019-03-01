import { random } from 'lodash';
import { cons } from 'hexlet-pairs';
import loop from '..';

const isEven = num => num % 2 === 0;

const getCorrectAnswer = num => (isEven(num) ? 'yes' : 'no');

const askQuestion = () => {
  const question = random(1, 100);
  return cons(question, getCorrectAnswer(question));
};

export default () => loop('Answer "yes" if number even otherwise answer "no".\n', askQuestion);
