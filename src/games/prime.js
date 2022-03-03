import getRandomNumber from '../common.js';
import newGame from '../index.js';

const prime = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};
const description = 'Answer "yes" if given number is prime. Otherwise answer "no"';
const generateQuestionAnswer = () => {
  const fromNumber = 0;
  const question = getRandomNumber(fromNumber);
  const answer = prime(question) ? 'yes' : 'no';
  return [question, answer];
};
const brainPrime = () => newGame(description, generateQuestionAnswer);

export default brainPrime;
