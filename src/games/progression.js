import { random } from 'lodash';
import { car, cdr, cons } from 'hexlet-pairs';
import loop from '..';

const gameDescription = 'What number is missing in the progression?';

const maxLength = 10;
const minStep = 1;
const maxStep = 5;
const firstNumMin = 1;
const firstNumMax = 10;

const makeProgression = (firstNum, step, numToReplace) => {
  let progression = '';
  const targetValue = firstNum + (numToReplace * step);
  for (let i = 0; i < maxLength; i += 1) {
    progression += (i === numToReplace) ? ' ..' : ` ${firstNum + (i * step)}`;
  }
  return cons(progression.trim(), targetValue);
};

const askQuestion = () => {
  const firstNum = random(firstNumMin, firstNumMax);
  const step = random(minStep, maxStep);
  const numToReplace = random(0, maxLength - 1);
  const gameData = makeProgression(firstNum, step, numToReplace);
  const question = car(gameData);
  const correctAnswer = String(cdr(gameData));
  return cons(question, correctAnswer);
};

export default () => loop(gameDescription, askQuestion);
