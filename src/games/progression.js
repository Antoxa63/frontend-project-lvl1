import gameStructure from '../index.js';

const getRandomNumber = (min = 1, max = 20) => Math.floor(min + Math.random() * (max + 1 - min));
const getRandomNumberLength = (min, max = 5) => Math.floor(min + Math.random() * (max + 1 - min));
const getRandomNumberRound = (min = 5, max = 10) => Math.floor(min + Math.random() * (max + 1 - min));

const generatString = (a, b) => {
  let firstNumber = a;
  const secondNumber = b;
  const result = [];
  while (result.length < getRandomNumberRound()) {
    firstNumber += secondNumber;
    result.push(firstNumber);
  }
  return result;
};

const description = 'What number is missing in the progression?';
const generateQuestionAnswer = () => {
  const fromNumber = 0;
  const firstNumber = getRandomNumber(fromNumber);
  const secondNumber = getRandomNumber(fromNumber);
  const str = getRandomNumberLength(fromNumber);
  const temp = '..';
  let answer = generatString(firstNumber, secondNumber);
  const qiestion = answer[str].toString();
  answer[str] = temp;
  answer = answer.join(' ');
  return [answer, qiestion];
};
const brainProgression = () => gameStructure(description, generateQuestionAnswer);

export default brainProgression;
