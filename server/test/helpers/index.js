const crypto = require('crypto');
const words = require('./words.json');


const CONSUMER_URL = process.env.CONSUMER_URL || 'http://localhost:3000';
const wordsLength = words.length;


const createHash = (username) => {
  const shasum = crypto.createHash('sha256');
  shasum.update(username);
  return shasum.digest('hex');
};

const randomString = (num) => {
  const alphabets = 'abcdefghijklmnopqrstuvwxyz';

  let random = '';
  for (let i = 0; i < num; i += 1) {
    random += alphabets[Math.floor(26 * Math.random())];
  }

  return random;
};

const randomNumber = (start, end) => start + Math.floor(Math.random() * ((end - start) + 1));

const randomText = (num = randomNumber(1, 20)) => {
  let text = '';

  for (let i = 0; i < num; i += 1) {
    text += ` ${words[Math.floor(wordsLength * Math.random())]}`;
  }

  return text;
};

const randomAge = () => randomNumber(18, 99);

const randomMobile = () => randomNumber(10 ** 10, 10 ** 11);

const randomGender = () => randomNumber(0, 1);

const randomDate = () => {
  const date = new Date();

  const nextDate = date.getDate() - randomNumber(0, 365);
  date.setDate(nextDate);
  const newDate = date.toLocaleString();

  return newDate.toString();
};

module.exports = {
  CONSUMER_URL,
  createHash,
  randomString,
  randomText,
  randomNumber,
  randomAge,
  randomMobile,
  randomGender,
  randomDate,
};
