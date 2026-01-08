// Problem 1: Reverse a String

function reversedString(str) {
  let newStr = " ";
  for (let i = str.length - 1; i >= 0; i--) {
    newStr += str[i];
  }
  return newStr;
}

console.log(reversedString("Hello"));

// Problem 2: Count Vowels in a String

function countValues(str) {
  let lowStr = str.toLowerCase() 
  
  let count = 0;
  for (let i = 0; i < lowStr.length; i++) {
    if (
      lowStr[i] === "a" ||
      lowStr[i] === "e" ||
      lowStr[i] === "i" ||
      lowStr[i] === "o" ||
      lowStr[i] === "u"
    ) {
      count++;
    }
  }
  return count;
}
console.log(countValues("programming"));

// Problem 3: Check for Palindrome


function isPalindrome(str) {
  let strLower = str.trim().toLowerCase().split(" ").join("");
 
  let reversed = "";
  for (let i = strLower.length - 1; i >= 0; i--) {
    reversed += strLower[i];
  }

  if (strLower === reversed) {
    return true;
  }
  return false;
}

console.log(isPalindrome("madam"));

// Problem 4: Find the Maximum Number


function FindMaxNum(num) {
  let maxNum;
  for (let i = 0; i < num.length; i++) {
    if (!maxNum) {
      maxNum = num[i];
    }
    if (num[i] > maxNum) {
      maxNum = num[i];
    }
  }
  return maxNum;
}

console.log(FindMaxNum([1, 4, 5, 9]));

// Problem 5: Remove Duplicates from an Array


function removeDuplicateNum(arr) {
  let uniqArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (!uniqArr.includes(arr[i])) {
      uniqArr.push(arr[i]);
    }
  }
  return uniqArr;
}

console.log(removeDuplicateNum([1, 2, 2, 3, 4, 4]));

// Problem 6: Sum of All Numbers in an Array


function sum(arr) {
  let sum = 0;
  for (let i of arr) {
    sum += i;
  }
  return sum;
}

console.log(sum([1, 2, 5, 6]));

// Problem 7: Find Even Numbers in an Array


function findEven(arr) {
  let evnNum = [];
  arr.forEach((i) => {
    if (i % 2 === 0) {
      evnNum.push(i);
    }
  });
  return evnNum;
}

console.log(findEven([1, 2, 3, 4, 5, 6]));

// Problem 8: Capitalize First Letter of Each Word



function makeCapLetter(str) {
  let words = str.split(' ');
  let result = [];
  for (let word of words){
    result.push(word[0].toUpperCase() + word.slice(1));
  }

 return result.join(' ');
}

console.log(makeCapLetter('hello world'))

// Problem 9: Find the Factorial of a Number


function findFacNum(num) {
  let result = 1;
  for (let i = 1; i <= num; i++){
    result *= i
  }
return result
}

console.log(findFacNum(5))


// Problem 10: PingPong Challenge


function pingPong() {
  let result = [];
  for (let i = 1; i <= 20; i++){
    if (i % 3 === 0 && i % 5 === 0) {
      result.push('PingPong')
    } else if (i % 3 === 0) {
      result.push('Ping')
    } else if (i % 5 === 0) {
      result.push("Pong")
    } else {
      result.push(i)
    }
  }
  return result;
}

console.log(pingPong());