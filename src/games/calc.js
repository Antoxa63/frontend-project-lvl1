import getRandomNumber from '../common.js';
import gameStructure from '../index.js';

const calculateExpression = (firstNumber, operator, secondNumber) => {
  let correctAnswer;

  switch (operator) {
    case '+':
      correctAnswer = firstNumber + secondNumber;
      break;

    case '-':
      correctAnswer = firstNumber - secondNumber;
      break;

    case '*':
      correctAnswer = firstNumber * secondNumber;
      break;

    default:
      correctAnswer = null;
  }

  return correctAnswer;
};

const description = 'What is the result of the expression?';

const operators = ['+', '-', '*'];

const generateQuestionAnswer = () => {
  const fromNumber = 0;

  const firstNumber = getRandomNumber(fromNumber);
  const secondNumber = getRandomNumber(fromNumber);

  const toNumber = operators.length - 1;

  const operator = operators[getRandomNumber(fromNumber, toNumber)];

  const question = `${firstNumber} ${operator} ${secondNumber}`;
  const answer = calculateExpression(firstNumber, operator, secondNumber).toString();

  return [question, answer];
};

const brainCalc = () => gameStructure(description, generateQuestionAnswer);

export default brainCalc;
