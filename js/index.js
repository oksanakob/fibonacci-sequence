alert("Second method")

const n = parseInt(prompt ("Enter your number:"));

//first method

function fib(n) {
  let a = 1, b = 1;
  for (let i = 3; i <= n; i++) {
    let c = a + b;
    a = b;
    b = c;
  }
  return b;
}
alert(fib(n));

alert("Second method") 

const f = parseInt(prompt ("Enter your number:"));

function fib(f) {
  if (f < 2){
    return n;
  }
  return fib(f - 1) + fib(f - 2);
}

alert(fib(f));