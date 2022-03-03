import newGame from '../index.js';

const getRandomNumber = (min, max = 20) => Math.floor(min + Math.random() * (max + 1 - min));
const getRandomNumberLength = (min, max = 9) => Math.floor(min + Math.random() * (max + 1 - min));
const progres = (a, b) => {
  let firstNumber = a;
  const secondNumber = b;
  const result = [];
  while (result.length <= 10) {
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
  let answer = progres(firstNumber, secondNumber);
  const qiestion = answer[str].toString();
  answer[str] = temp;
  answer = answer.toString();
  return [answer, qiestion];
};
const brainProgression = () => newGame(description, generateQuestionAnswer);

export default brainProgression;
