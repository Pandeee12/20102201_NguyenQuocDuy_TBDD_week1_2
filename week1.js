//Ex1
// Coding Challenge #1
// Mark and John are trying to compare their BMI (Body Mass Index), which is
// calculated using the formula:
// BMI = mass / height ** 2 = mass / (height * height) (mass in kg
// and height in meter).
// Your tasks:
// 1. Store Mark's and John's mass and height in variables
// 2. Calculate both their BMIs using the formula (you can even implement both
// versions)
// 3. Create a Boolean variable 'markHigherBMI' containing information about
// whether Mark has a higher BMI than John.
// Test data:
// § Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
// m tall.
// § Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
// m tall.

//Ex2
// Use the BMI example from Challenge #1, and the code you already wrote, and
// improve it.
// Your tasks:
// 1. Print a nice output to the console, saying who has the higher BMI. The message
// is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
// 2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
// BMI (28.3) is higher than John's (23.9)!"


function BMI(m, h) {
    return m / h ** 2;
}

console.log("Ex1: ");

let m1_Marks = 78;
let h1_Marks = 1.69;
let m1_John = 92;
let h1_John = 1.95;
let markHigherBMI1 = true;


let BMI1_Mark = BMI(m1_Marks, h1_Marks);
let BMI1_John = BMI(m1_John, h1_John);
console.log("BMI1_Mark: ", BMI1_Mark);
console.log("BMI1_John: ", BMI1_John);
if (BMI1_Mark > BMI1_John)
    markHigherBMI1 = true;
else
    markHigherBMI1 = false;

if (markHigherBMI1 == true)
    console.log("Mark's BMI1 (", BMI1_Mark, ") is higher than John (", BMI1_John, ")");
else
    console.log("John's BMI1 (", BMI1_John, ") is higher than Mark (", BMI1_Mark, ")");


let m2_Marks = 95;
let h2_Marks = 1.88;
let m2_John = 85;
let h2_John = 1.76;
let markHigherBMI2 = true;

let BMI2_Mark = BMI(m2_Marks, h2_Marks);
let BMI2_John = BMI(m2_John, h2_John);
if (BMI2_Mark > BMI2_John)
    markHigherBMI2 = true;
else
    markHigherBMI2 = false;

if (markHigherBMI2 == true)
    console.log("Mark's BMI2 (", BMI2_Mark, ") is higher than John (", BMI2_John, ")");
else
    console.log("John's BMI2 (", BMI2_John, ") is higher than Mark (", BMI2_Mark, ")");

//Ex3
// There are two gymnastics teams, Dolphins and Koalas. They compete against each
// other 3 times. The winner with the highest average score wins a trophy!
// Your tasks:
// 1. Calculate the average score for each team, using the test data below
// 2. Compare the team's average scores to determine the winner of the competition,
// and print it to the console. Don't forget that there can be a draw, so test for that
// as well (draw means they have the same average score)
// 3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
// team only wins if it has a higher score than the other team, and the same time a
// score of at least 100 points. Hint: Use a logical operator to test for minimum
// score, as well as multiple else-if blocks �
// 4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
// both teams have the same score and both have a score greater or equal 100
// points. Otherwise, no team wins the trophy
// Test data:
// § Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
// § Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
// § Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

function Average(a, b, c) {
    return (a + b + c) / 3;
}

console.log("Ex2: ");

function Compare(Dolphins_Average, Koalas_Average) {
    console.log("Dolphins's Average Score: ", Dolphins_Average);
    console.log("Koalas's Average Score: ", Koalas_Average);
    if (Dolphins_Average < 100 || Koalas_Average < 100)
        console.log("No one is the winner");
    else
    if (Dolphins_Average > Koalas_Average)
        console.log("The winner is Dolphins~");
    else
    if (Dolphins_Average < Koalas_Average)
        console.log("The winner is Koalas~");
    else
        console.log("Draw~");
}


let Dolphins_Average1 = Average(96, 108, 89);
let Koalas_Average1 = Average(88, 91, 110);

let Dolphins_Average2 = Average(97, 112, 101);
let Koalas_Average2 = Average(109, 95, 123);

let Dolphins_Average3 = Average(97, 112, 101);
let Koalas_Average3 = Average(109, 95, 106);

console.log("Average Score 1: ");
Compare(Dolphins_Average1, Koalas_Average1)
console.log("Average Score 2: ");
Compare(Dolphins_Average2, Koalas_Average2)
console.log("Average Score 3: ");
Compare(Dolphins_Average3, Koalas_Average3)