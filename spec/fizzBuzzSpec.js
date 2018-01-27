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

  describe("for multiples of 5", function(){
    it("returns buzz", function(){
      expect(fizzBuzz.run(5)).toEqual("buzz");
    });
  });

  describe("for multiples of 3 and 5", function() {
    it("returns fizzbuzz", function() {
      expect(fizzBuzz.run(15)).toEqual('fizzbuzz');
    })
  })
});
