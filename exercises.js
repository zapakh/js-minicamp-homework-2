//Do not change any of the function names

function getBiggest(x, y) {
  if (x > y) return x;
  else return y;
}

function greeting(language) {
  if (language === 'German')
    return 'Guten Tag!';
  else if (language === 'Spanish')
    return 'Hola!';
  else
    return 'Hello!';
}

function isTenOrFive(num) {
  return num === 10 || num === 5;
}

function isInRange(num) {
  return num < 50 && num > 20;
}

function isInteger(num) {
  return num === Math.floor(num);
}

function fizzBuzz(num) {
  // Ah, fizzbuzz.  My old nemesis.
  var ret = '';
  if (num % 3 == 0) ret += 'fizz';
  if (num % 5 == 0) ret += 'buzz';
  if (ret.length == 0) return num;
  else return ret;
}

function isPrime(num) {
  if (num < 2) return false;  // edge case...
  for (var p = 2; p * p <= num; ++p) {
    if (num % p == 0) return false;
  }
  return true;
}

function returnFirst(arr) {
  return arr[0];
}

function returnLast(arr) {
  return arr[arr.length - 1];
}

function getArrayLength(arr) {
  return arr.length;
}

function incrementByOne(arr) {
  for (var i = 0; i < arr.length; ++i) {
    ++arr[i];
  }
  return arr;
}

function addItemToArray(arr, item) {
  arr.push(item);
  return arr;
}

function addItemToFront(arr, item) {
  arr.unshift(item);
  return arr;
}

function wordsToSentence(words) {
  var ret = '';
  for (var i = 0; i < words.length; ++i) {
    ret += words[i];
    if (i < words.length - 1) {
      ret += ' ';
    }
  }
  return ret;
}

function contains(arr, item) {
  for (var i = 0; i < arr.length; ++i) {
    if (arr[i] === item) return true;
  }
  return false;
}

function addNumbers(numbers) {
  var sum = 0;
  for (var i = 0; i < numbers.length; ++i) {
    sum += numbers[i];
  }
  return sum;
}

function averageTestScore(testScores) {
  return addNumbers(testScores) / testScores.length;
}

function largestNumber(numbers) {
  var max = -Infinity;
  for (var i = 0; i < numbers.length; ++i) {
    if (numbers[i] > max)
      max = numbers[i];
  }
  return max;
}

//Do not modify code below this line.
////--------------------------------

module.exports = {
  getBiggest: getBiggest,
  greeting: greeting,
  isTenOrFive: isTenOrFive,
  isInRange: isInRange,
  isInteger: isInteger,
  fizzBuzz: fizzBuzz,
  isPrime: isPrime,
  returnFirst: returnFirst,
  returnLast: returnLast,
  getArrayLength: getArrayLength,
  incrementByOne: incrementByOne,
  addItemToArray: addItemToArray,
  addItemToFront: addItemToFront,
  wordsToSentence: wordsToSentence,
  contains: contains,
  addNumbers: addNumbers,
  averageTestScore: averageTestScore,
  largestNumber: largestNumber
};
