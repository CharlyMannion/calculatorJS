describe("Simple Calculator", function() {

    describe("Add", function() {
      it("Adds two numbers together", function() {
        var result = addNumbers(2, 3);
        expect(result).toEqual(5);
      });
    });

    describe("Subtract", function() {
        it("Subtracts one number from another", function() {
            var subtractResult = subtractNumbers(10, 5);
            expect(subtractResult).toEqual(5);
        });
    });

    describe("Multiply", function() {
        it("Multiplies two numbers together", function() {
            var multiplyResult = multiplyNumbers(2, 5);
            expect(multiplyResult).toEqual(10);
        });
    });

    describe("Divide", function() {
        it("Divides one number by another", function(){
            var divideResult = divideNumbers(10, 2);
            expect(divideResult).toEqual(5);
        })
    })
  });