console.log("Hello world!!!!");

// Object example

let totalMarks;

let student = {
  name: "Aayat",
  engMarks: 20,
  mathsMarks: 20,
  evsMarks: 20,
  marathiMarks: 20,
};

console.log(
  (totalMarks =
    student.engMarks +
    student.mathsMarks +
    student.evsMarks +
    student.marathiMarks)
);
console.log("Total marks of " + student.name + " = " + totalMarks);

// function example

function run() {
  console.log("I am executed...");
}

run(); // calling a function

// function eg with parameters
function add(a, b) {
  return a + b;
}
let sum = add(2, 3);
console.log(sum); //  O/P--> 5

// for loop example
for (let i = 0; i < 5; i++) {
  console.log("Incremented i: " + i);
}

// Arrays   push()-->adds  pop()--> deletes
let fruits = [];
fruits.push("Apple");
fruits.push("Mango");
fruits.push("Banana");
fruits.push("Watermelon");
fruits.pop("Watermelon");
console.log(fruits);
