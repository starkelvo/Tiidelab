function HalfNumber(num) {
 const outcome=num/2;
 console.log("Half of " + num +" is " + outcome );
 return HalfNumber;
}

//HalfNumber(5);
function square(n) {
  const square = Math.pow(n, 2);
  console.log("The Square of " + n +" is " + square );
  return square;
 }
 //square(20);
 function area(radius) {
  const area = (22/7)*Math.pow(radius, 2);
  console.log("The area of a circle with radius " + radius +" is " + area );
  return area;
 }
 //area(5);

 function percentageof(n, m) {
  const percentageof = n*100/m;
  console.log(n + " is " + percentageof +" of " + m );
  return percentageof;
 }
 //percentageof(40, 100);

 function calculate (number){
   const Result= HalfNumber(number);
const Result2 = square(Result);
const Result3 = area(Result2);
const Result4= percentageof(Result3, Result2);
return;

 }
console.log(calculate (20));