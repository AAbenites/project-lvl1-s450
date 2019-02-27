import readlineSync from 'readline-sync';
import { random } from 'lodash';
import askName, { hello } from '..';

const isEven = num => num % 2 === 0;

const getExpectedAnswer = num => (isEven(num) ? 'yes' : 'no');

export default () => {
  const winAmount = 3;
  hello();
  console.log('Answer "yes" if number even otherwise answer "no".\n');
  const user = askName();
  const iter = (acc) => {
    if (acc === 0) {
      console.log(`Congratulations, ${user}!`);
      return;
    }
    const number = random(1, 100);
    const expected = getExpectedAnswer(number);
    console.log(`\nQuestion:${number}`);
    const actual = readlineSync.question('Your answer: ');
    const isCorrect = actual === expected;
    const result = isCorrect
      ? 'Correct!'
      : `'${actual}' is wrong answer ;(. Correct answer was '${expected}'.\nLet's try again, ${user}!`;
    console.log(result);
    if (isCorrect) {
      iter(acc - 1);
    }
  };
  return iter(winAmount);
};
