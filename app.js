console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

const numbers = [2, 22, 12, 17, 18, 39, 129];
let sum = 0;

function arraySum(number) {
  sum += number;
}

numbers.forEach(arraySum);

console.log(sum);



// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

let book = {};

book.title = 'Umineko no Naku Koro ni';

book.numberOfPages = 2000;

book.readCount = 3;

book.info = function() {

return `${this.title}, ${this.numberOfPages} pages, read ${this.readCount} times.`

}

console.log(book.info());





// Exercise 3 Section
console.log("EXERCISE 2:\n==========\n");


let sentence = "The quick brown fox jumps over the lazy dog";


function reverseWords(sentence) {

  let revFinal = [];

  let words = sentence.split(" ");

  for (let i = 0; i < words.length; i++) {
    letters = words[i].split("")
    letters.reverse()
    let reverseWord = letters.join("")
    revFinal.push(reverseWord);

  }
  return revFinal.join(" ")
}

console.log(reverseWords(sentence));






// Exercise 4 Section
console.log("EXERCISE 2:\n==========\n");


let csvData = 'name,age\nFrodo,50\nSam,38\nMerry,36\nPippin,26';
//Headers: name, age.
//Row example: Frodo, 50

function csvConverter(data) {
  //Split csvData into rows based on each newline character.

  let rows = csvData.split('\n');

  //Split the first row or headers into individual strings based on
  //the comma character.

  let headers = rows[0].split(','); //[name, age]

  let result = [];

  //Iterate over every content row.
  for (let i = 1; i < rows.length; i++) {
    let obj = {};

    let data = rows[i].split(','); // Ex. [ 'Frodo', 50 ]

    data.forEach((val, idx) => {
      obj[headers[idx]] = val;
      console.log(obj)
    });

    result.push(obj);
  }

  // return console.log('Split', data);
  return result

}

csvConverter(csvData);