function BMI(m, h) {
    return m / h ** 2;
}

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