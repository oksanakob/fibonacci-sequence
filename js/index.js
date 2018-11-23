const n = parseInt(prompt ("Enter your number:"));

//first method

function fib(n) {
  var a = 1, b = 1;
  for (var i = 3; i <= n; i++) {
    var c = a + b;
    a = b;
    b = c;
  }
  return b;
}


/* second method

function fib(n) {
  if (n < 2){
    return n;
  }
  return fib(n - 1) + fib(n - 2);
}*/

alert(fib(n));