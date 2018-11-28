describe("Drink About", function() {
    describe("Age test", function() {
        it("should return age is incorrect", function() {
            expect(whatCanIDrink(-1)).toBe("Sorry. I can't tell what drink because that age is incorrect!");
        });
        it("should return drink Toddy", function() {
            expect(whatCanIDrink(12)).toBe("Drink Toddy");
        });
        it("should return Drink Coke", function() {
            expect(whatCanIDrink(16)).toBe("Drink Coke");
        });
        it("should return Drink Beer", function() {
            expect(whatCanIDrink(20)).toBe("Drink Beer");
        });
        it("should return Drink Whisky", function() {
            expect(whatCanIDrink(99)).toBe("Drink Whisky");
        });
        it("should return an error if we don't supply numbers", function() {
            expect(whatCanIDrink(140)).toBe("Sorry. I can't tell what drink because that age is incorrect!");
        });
    });
});
/*
describe("My whatCanIDrink function", function() {
    // A test suite begins with a call to the global Jasmine function describe with two parameters: a string and a function.
    beforeEach(function() {
        drink = new whatCanIDrink();
    });
    
    describe("Checks age", function() {
        // Specs are defined by calling the global Jasmine function it
        it("should exist", function() {
            // Expectations are built with the function expect which takes a value, called the actual.
            // Each matcher implements a boolean comparison between the actual value and the expected value.
            // Any matcher can evaluate to a negative assertion by chaining the call to expect with a not before calling the matcher.
            expect(whatCanIDrink).toBeDefined();
        });
        
        it("should return drink toddy when called as whatCanIDrink(13)", function() {
            var result = whatCanIDrink(13)
            expect(result).toBe("Drink Toddy");
        });
        
        
        it("should return drink coke when called as whatCanIDrink(17)", function() {
            var result = whatCanIDrink(17)
            expect(result).toBe("Drink Coke");
        });
        
        it("should return drink beer when called as whatCanIDrink(18)", function() {
            var result = whatCanIDrink(18)
            expect(result).toBe("Drink Beer");
        });
        
        it("should return drink beer when called as whatCanIDrink(20)", function() {
            var result = whatCanIDrink(20)
            expect(result).toBe("Drink Beer");
        }); 
        
        it("should return drink whisky when called as whatCanIDrink(30)", function() {
            var result = whatCanIDrink(30)
            expect(result).toBe("Drink Whisky");
        });
        
        it("should be unable to return a drink when called as whatCanIDrink(140)", function() {
            var result = whatCanIDrink(140)
            expect(result).toBe("Sorry. I can’t tell what drink because that age is incorrect!");
        });
        
        it("should contain Drink when called as whatCanIDrink(17)", function() {
            var result = whatCanIDrink(10).indexOf("Drink");
            expect(result).not.toEqual(-1);
        });
    });
});
*/