// Messi Goals https://www.codewars.com/kata/grasshopper-messi-goals-function/train/javascript

function goals (laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
  result = laLigaGoals + copaDelReyGoals + championsLeagueGoals;
  return result;
}

// Make negative    https://www.codewars.com/kata/55685cd7ad70877c23000102/train/javascript

function makeNegative(num) {
  if (num > 0) {
    return -num;
  } else {
    return num;
  }
}

// Game Move https://www.codewars.com/kata/grasshopper-terminal-game-move-function/train/javascript

function move (position, roll) {
  const moves = roll * 2 + position;
  return moves;
}

// Personalized Message https://www.codewars.com/kata/grasshopper-personalized-message/train/javascript

function greet (name, owner) {
  if (name == owner) {
    return 'Hello boss';
  } else {
    return 'Hello guest';
  } 
}

// Keep Hydrated https://www.codewars.com/kata/keep-hydrated-1/train/javascript

function litres(time) {
 return Math.floor(time/2); 
}

// Opposites Attract https://www.codewars.com/kata/555086d53eac039a2a000083/train/javascript

function lovefunc(flower1, flower2) {
  if ((flower1 % 2) !== (flower2 % 2)) {
    return true;
  } else {
    return false;
  }
}


// Double Integer    https://www.codewars.com/kata/53ee5429ba190077850011d4/train/javascript
// Twice as old    https://www.codewars.com/kata/5b853229cfde412a470000d0/train/javascript
// Return n-th even number    https://www.codewars.com/kata/5933a1f8552bc2750a0000ed/train/javascript
// What's the real floor     https://www.codewars.com/kata/574b3b1599d8f897470018f6/train/javascript
// Clock    https://www.codewars.com/kata/55f9bca8ecaa9eac7100004a/train/javascript
// Is n divisible by x and y    https://www.codewars.com/kata/5545f109004975ea66000086/train/javascript