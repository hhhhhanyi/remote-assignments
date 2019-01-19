/* Assignment 1: Function and Array */
function max(...numbers){
  let max = 0;
  return numbers.reduce((prev, cur) => {
    if ( cur > prev ){
      max = cur;
    }
    return max;
  });
}

document.write("<h1>Assignment 1: Function and Array</h1>max(1, 2, 4, 5) = " +  max(1, 2, 4, 5) + "<br>max(5, 2, 7, 1, 6) = " + max(5, 2, 7, 1, 6));


/* Assignment 2: Object */
const arg = { n1:3, n2:4, op:"+" };

// 方法一
function calculate(args){
  let result;

  if(args.op==="+"){
    result=args.n1+args.n2;
  } else if(args.op==="-"){
    result=args.n1-args.n2;
  } else{
    result="Not supported";
  }

  return result;
}

// 方法二
function add(args){
  return args.n1+args.n2;
}

function minus(args){
  return args.n1-args.n2;
}

// 方法三
class Arg{
  constructor(n1,n2,op){
    this.n1 = n1;
    this.n2 = n2;
    this.op = op;
  }
}

const arg_2 = new Arg(3, 4, "+");

//列印
document.write("<h1>Assignment 2: Object</h1>result: " + calculate(arg));
document.write("<br>result: " + add({n1:3, n2:4}));
document.write("<br>result: " + calculate(arg_2));


/* Assignment 3: Function, Array, and Object */
function avg(data){
  let average = 0;
  for(let i=0; i<data.products.length; i++){
    average += data.products[i].price;
  }
  average /= data.size;
  return average;
}

const list = {
  size:3,
  products:[
          {
          name:"Product 1",
          price:100 },
          {
          name:"Product 2",
          price:700 },
          {
          name:"Product 3",
          price:250 }
  ]
};

document.write("<h1>Assignment 3: Function, Array, and Object</h1>the average price of all products = $" + avg(list));
 // show the average price of all products
