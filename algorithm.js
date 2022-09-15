// ^1 Counting the number of words in string.
var str = "Javascript is the universal programming language of the web.";
function countNumber(str) {
  let string = str.replace(/\s+/g, "");
  return string.length;
}
console.log(countNumber(str));
// ^2 An algorithm that read a sentence, which ends with a point, character by character.
function readSentence(str) {
  let string = str.charAt(str.length - 1) == "." ? true : false;
  return string;
}
console.log(readSentence(str));

//^ 3 The number of words in the sentence (assuming that the words are separated by a single space).

// returns number of words in str
function countWords(str) {
  var state = 0;
  var wordCount = 0; // word count
  var i = 0;
  while (i < str.length) {
    if (str[i] == " " || str[i] == "\n") {
      state = 0;
    } else if (state == 0) {
      state = 1;
      ++wordCount;
    }

    // Move to next character
    ++i;
  }

  return wordCount;
}

console.log(countWords(str));

// ^4 The number of vowels in the sentence.const vowels

const vowels = ["a", "e", "i", "o", "u"];

function countVowel(str) {
  let count = 0;
  for (let letter of str.toLowerCase()) {
    if (vowels.includes(letter)) {
      count++;
    }
  }

  return count;
}

console.log(countVowel(str));
