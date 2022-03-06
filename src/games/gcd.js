import getRandomNumber from '../common.js';
import gameStructure from '../index.js';

const description = 'Find the greatest common divisor of given numbers.';
const numberNod = (num1, num2) => {
  const firstNumber = num1;
  const secondNumber = num2;
  if (!secondNumber) {
    return firstNumber;
  }
  return numberNod(secondNumber, firstNumber % secondNumber);
};
const generateQuestionAnswer = () => {
  const fromNumber = 0;
  const firstNumber = getRandomNumber(fromNumber);
  const secondNumber = getRandomNumber(fromNumber);
  const question = `${firstNumber} ${secondNumber}`;
  const answer = numberNod(firstNumber, secondNumber).toString();
  return [question, answer];
};
const brainGcd = () => gameStructure(description, generateQuestionAnswer);

export default brainGcd;
