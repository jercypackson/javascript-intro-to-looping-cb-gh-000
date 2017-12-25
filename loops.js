function forLoop(array){
  for (let i = 0; i < 25; i++) {
    array.push("I am ${i} strange loop${i === 0 ? '' : 's'}.");
  }
  return array;
}

function whileLoop(n){
  while (n > 0) {
    console.log(n);
    n--;
  }
  return "done";
}

function doWhileLoop(array){
  //loops doWhileLoop(array) removes elements from `array` until `array` is 
  //empty or until `maybeTrue()` returns `false`:

  do {
    array.pop();
  [loopBody];
  } while ([condition]);
}