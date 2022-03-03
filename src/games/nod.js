import getRandomNumber from '../common.js';
import newGame from '../index.js';

const description = 'Find the greatest common divisor of given numbers.';
const numberNod = (num1, num2) => {
  let firstNumber = num1;
  let secondNumber = num2;
  if (secondNumber > firstNumber) {
    const temp = firstNumber;
    firstNumber = secondNumber;
    secondNumber = temp;
  }
  while (firstNumber !== 0 || secondNumber !== 0) {
    if (secondNumber !== 0) {
      firstNumber %= secondNumber;
    } else {
      return firstNumber;
    }
    if (firstNumber !== 0) {
      secondNumber %= firstNumber;
    } else {
      return secondNumber;
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
