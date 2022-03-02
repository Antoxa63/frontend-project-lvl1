import getRandomNumber from '../common.js';
import newGame from '../index.js';

const description = 'Find the greatest common divisor of given numbers.';
const numberNod = (firstNumber, secondNumber) => {
  if (secondNumber > firstNumber) {
    const temp = firstNumber;
    firstNumber = secondNumber;
    secondNumber = temp;
  }
  while (firstNumber !== 0 || secondNumber !== 0) {
    if (secondNumber === 0) {
      return firstNumber;
    } else {
      firstNumber %= secondNumber;
    }
    if (firstNumber === 0) {
    return secondNumber;
    } else {
      secondNumber %= firstNumber;
    }
  }
};
const generateQuestionAnswer = () => {
  const fromNumber = 0;
  const firstNumber = getRandomNumber(fromNumber);
  const secondNumber = getRandomNumber(fromNumber);
  const question = `${firstNumber} ${secondNumber}`;
  const answer = numberNod(firstNumber, secondNumber).toString();
  return [question, answer];
};
const brainNod = () => newGame(description, generateQuestionAnswer);

export default brainNod;
