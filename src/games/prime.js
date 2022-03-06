import getRandomNumber from '../common.js';
import gameStructure from '../index.js';

const isPrime = (num) => {
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
  const answer = isPrime(question) ? 'yes' : 'no';
  return [question, answer];
};
const brainPrime = () => gameStructure(description, generateQuestionAnswer);

export default brainPrime;
