1.null--এটি একটি খালি মান । আমরা নিজেই কোনো ভেরিয়েবলে null দিতে পারি।
undefined--যখন একটি ভেরিয়েবল ডিক্লেয়ার করা হয় কিন্তু কোনো মান নেই, তখন JavaScript এটি undefined দেয়।
উদাহরণ
let a = null;
let b;        

console.log(a);
console.log(b);
2.map()--এটি একটি নতুন অ্যারে তৈরি করে, যেখানে মূল অ্যারের প্রতিটি উপাদান পরিবর্তিত হয়।
forEach()-- অ্যারের উপর লুপ চালায়, কিন্তু কোনো নতুন অ্যারে রিটার্ন করে না।
উদাহরণ
const numbers = [1, 2, 3, 4];

const doubled = numbers.map(num => num * 2);
console.log(doubled);

numbers.forEach(num => console.log(num * 2)); 

3.== কেবল মান পরীক্ষা করে, টাইপ পার্থক্য থাকলেও টাইপ কনভার্সন করে।
=== মান ও টাইপ উভয় পরীক্ষা করে, কোন টাইপ কনভার্সন করে না।
উদাহরণ


4. async/await -- এটি API থেকে ডেটা আনার সময় অপেক্ষা করতে সাহায্য করে।
 উদাহরণ
 async function getData() {
  try {
    const response = await fetch('https://fakestoreapi.com/products');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log('Error:', error);
  }
}

getData();

5. Scope -- Scope হলো সেই জায়গা যেখানে একটি ভেরিয়েবল অ্যাক্সেস করা যায়।
 Global Scope: ভেরিয়েবল ফাংশনের বাইরে ডিক্লেয়ার করলে যেকোনো জায়গা থেকে ব্যবহার করা যায়।
Function Scope: ভেরিয়েবল ফাংশনের ভিতরে ডিক্লেয়ার করলে কেবল সেই ফাংশনের ভিতর ব্যবহার করা যায়।
Block Scope: {} এর ভিতরে let বা const দিয়ে ডিক্লেয়ার করলে কেবল সেই ব্লকের ভিতর ব্যবহার করা যায়।
উদাহরণ
let globalVar = "আমি global";

function myFunc() {
  let funcVar = "আমি function এর ভিতরে";
  if(true){
    let blockVar = "আমি block এর ভিতরে";
    console.log(blockVar);ে
  }
  console.log(funcVar);ে
  // console.log(blockVar);
}

console.log(globalVar);ে
// console.log(funcVar); 
