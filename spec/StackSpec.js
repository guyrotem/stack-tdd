/**
 * Created by Guy_Rotem on 7/20/14.
 */
describe("Stack implementation", function() {

    var myStack;

    beforeEach(function() {
        var CAPACITY = 10;

      myStack = new MyStack(CAPACITY);
    });
    it("stack capacity should be zero initially", function() {
        expect(myStack.count).toBe(0);
    });

    it("stack capacity should be 1 after one push", function() {
        myStack.push(1);
        expect(myStack.count).toBe(1);
    });
    it("stack capacity should be 2 after two pushes", function() {
        myStack.push(1);
        myStack.push(2);
        expect(myStack.count).toBe(2);
    });
    it("pop should throw exception when empty", function() {
        //  TODO: weird!!! what am I doing wrong?
        expect(function() { myStack.pop().bind(myStack); }).toThrow("Stack is already empty");
    });
    it("when size > 0, pop should decrease size (push, pop) => 0", function() {
        myStack.push(2);
        myStack.pop();
        expect(myStack.count).toBe(0);
    });
    it("when size > 0, pop should decrease size (push, push, pop) => 1", function() {
        myStack.push(2);
        myStack.push(5);
        myStack.pop();
        expect(myStack.count).toBe(1);
    });
    it("push(2) => pop() returns '2'", function() {
        var x = 2;
        myStack.push(x);

        var popped = myStack.pop();
        expect(popped).toBe(x);
    });
    it("push(3) => pop() returns '3'", function() {
        var x = 3;

        myStack.push(x);
        var popped = myStack.pop();
        expect(popped).toBe(x);
    });
    it("push(2), push(3) => pop() returns '3', pop() returns '2'", function() {
        var x = 2;
        var y = 3;

        myStack.push(x);
        myStack.push(y);
        var poppedY = myStack.pop();
        var poppedX = myStack.pop();

        expect(poppedX).toBe(x);
        expect(poppedY).toBe(y);
    });
    it("should throw exception when capacity exceeds", function() {
        for(var i=0; i<myStack.getCapacity(); i++) {
            myStack.push(i);
        }
        expect(function () { myStack.push(0);}).toThrow("Stack overflow!");
    });

    it("should throw when no capacity provided", function() {

        expect(function() {new MyStack();}).toThrow("Invalid argument exception");
    });

});