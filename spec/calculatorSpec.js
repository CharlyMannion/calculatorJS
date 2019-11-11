describe("Simple Calculator", function() {

    describe("Adding", function() {
      it("Adds two numbers together", function() {
        var result = addNumbers(2, 3);
        expect(result).toEqual(5);
      });
    });
  });