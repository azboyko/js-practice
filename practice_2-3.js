// PRACTICE 2

// https://www.codewars.com/kata/convert-a-string-to-an-array/train/javascript
// Write a function to split a string and convert it into an array of words.

function stringToArray(string) {
  return string.split(' ');
}

// https://www.codewars.com/kata/dna-to-rna-conversion/train/javascript
// Create a function which translates a given DNA string into RNA.

function DNAtoRNA(dna) {
  return dna.replace(/T/g, 'U');
}

// https://www.codewars.com/kata/577a98a6ae28071780000989/train/javascript
// Your task is to make two functions ( max and min, or maximum and minimum, etc., depending on the language ) that receive a list of integers as input, and return the largest and lowest number in that list, respectively. Each function returns one number.

var min = function (list) {
  list.sort((a, b) => a - b);
  return list[0];
}
var max = function (list) {
  list.sort((a, b) => a - b);
  list.reverse();
  return list[0];
}

// https://www.codewars.com/kata/544a54fd18b8e06d240005c0/train/javascript
// Write a function that can return the smallest value of an array or the index of that value. The function's 2nd parameter will tell whether it should return the value or the index.

function min(arr, toReturn) {
  const sorted = [...arr].sort((a, b) => a - b);
  const minValue = sorted[0];

  if (toReturn === 'value') {
    return minValue;
  }
  if (toReturn === 'index') {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === minValue) {
        return i;
      }
    }
  }
}



// Double Integer    https://www.codewars.com/kata/53ee5429ba190077850011d4/train/javascript
function doubleInteger(i) {
  i = i * 2
  return i;
}

// Twice as old    https://www.codewars.com/kata/5b853229cfde412a470000d0/train/javascript
function twiceAsOld(dadYearsOld, sonYearsOld) {
  let years = 0;

  while (
    dadYearsOld + years !== 2 * (sonYearsOld + years) &&
    dadYearsOld - years !== 2 * (sonYearsOld - years)
  ) {
    years++;
  }

  return years;
}

// Return n-th even number    https://www.codewars.com/kata/5933a1f8552bc2750a0000ed/train/javascript
function nthEven(n) {
  return (n - 1) * 2;
}

// What's the real floor     https://www.codewars.com/kata/574b3b1599d8f897470018f6/train/javascriptfunction getRealFloor(n) {
function getRealFloor(n) {
  if (n <= 0) {
    return n;
  } if (n < 13) {
    return n - 1;
  } else {
    return n - 2;
  }
}

// Clock    https://www.codewars.com/kata/55f9bca8ecaa9eac7100004a/train/javascript
function past(h, m, s) {
  return h * 3600000 + m * 60000 + s * 1000;
}

// Is n divisible by x and y    https://www.codewars.com/kata/5545f109004975ea66000086/train/javascript
function isDivisible(n, x, y) {
  if (n % x === 0 && n % y === 0) {
    return true;
  } else {
    return false;
  }
}




// PRACTICE 3

// https://www.codewars.com/kata/geometry-basics-circle-circumference-in-2d/train/javascript
// This series of katas will introduce you to basics of doing geometry with computers.
// Point objects have x, y attributes. Circle objects have center which is a Point, and radius, which is a number.
// Write a function calculating circumference of a Circle.
// Tests round answers to 6 decimal places.

function circleCircumference(circle) {
  return 2 * Math.PI * circle.radius;
}

// https://www.codewars.com/kata/training-js-number-12-loop-statement-for-dot-in-and-for-dot-of/train/javascript
// The function giveMeFive accepts 1 parameter, obj, which is an object.
// Create an array (which you will eventually return). Then, traverse obj, checking each key and value. If the length of the key is equal to 5, then push the key to your array. Separately, if the length of the value is equal to 5, then push the value to your array.
// At the end, return your array.
// You should use for..in in your code, otherwise your solution may not pass this kata.

function giveMeFive(obj) {
  let result = [];
  for (let key in obj) {
    if (key.length === 5) {
      result.push(key);
    }
    if (obj[key].length === 5) {
      result.push(obj[key]);
    }
  }
  return result
}

// https://www.codewars.com/kata/understanding-closures-the-basics/train/javascript
// The function buildFun will return an array of functions. The single parameter accepted by buildFun is the number of elements N of the array returned.

function buildFun(n){

	let res = []

	for (let i = 0; i< n; i++){
		res.push(function(){
			console.log(i)
      return i
		})
	}
	return res
}


// https://www.codewars.com/kata/fun-with-es6-classes-number-2-animals-and-inheritance/train/javascript
// 