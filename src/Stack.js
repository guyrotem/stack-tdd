/**
 * Created by Guy_Rotem on 7/20/14.
 */
function MyStack(capacity) {

    this.isEmpty = true;
    this.count = 0;
    this.values = [];

    if(!capacity)
    {
        throw new Error("Invalid argument exception");
    }
    this.capacity = capacity;


    this.push = function (value) {
        if(this.count == this.capacity)
        {
            throw new Error("Stack overflow!");
        }
        this.values[this.getCount()] = value;
        this.incCount();
    };
    this.getCount = function () {
        return this.count;
    };
    this.getCapacity = function () {
        return this.capacity;
    };
    this.incCount = function () {
        this.count++;
    };
    this.decCount = function () {
        this.count--;
    };
    this.pop = function pop() {
        if(this.count === 0) {
            throw new Error("Stack is already empty");
        }
        else
        {
            this.decCount();
            return this.values[this.getCount()];
        }
    };
}