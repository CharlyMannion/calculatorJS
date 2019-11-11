describe("Simple Calculator", function() {

    describe("Add", function() {
      it("Adds two numbers together", function() {
        var result = addNumbers(2, 3);
        expect(result).toEqual(5);
      });
    });

    describe("Subtract", function() {
        it("Subtracts one number from another", function(){
            var subtractResult = subtractNumbers(10, 5);
            expect(subtractResult).toEqual(5);
        });
    });
  });