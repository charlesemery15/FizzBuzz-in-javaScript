function FizzBuzz() {

}

FizzBuzz.prototype.run = function(number) {
  if(number % 3 === 0) {
    return 'fizz';
  } else {
    return number;
  }
}
