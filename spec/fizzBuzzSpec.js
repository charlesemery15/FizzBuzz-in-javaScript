describe("FizzBuzz", function(){
  var fizzBuzz;

  beforeEach(function(){
    fizzBuzz = new FizzBuzz();
  });

  describe("for multiples of 3", function(){
    it("returns fizz", function(){
      expect(fizzBuzz.run(3)).toEqual("fizz");
    });
  });
});
