/**
 * Created by Guy_Rotem on 7/20/14.
 */
describe("Prime test generator", function() {
    it("should return empty list for input 1", function() {

        expect(PrimeGenerator.For(1)
        ).toEqual([]);
    });
    it("should return factorization of [2] for 2", function() {
        expect(PrimeGenerator.For(2)).toEqual([2]);
    });
    it("should return factorization of [3] for 3", function() {
        expect(PrimeGenerator.For(3)).toEqual([3]);
    });
    it("should return factorization of [4] for 4", function() {
        expect(PrimeGenerator.For(4)).toEqual([2, 2]);
    });
    it("should return factorization of [5] for 5", function() {
        expect(PrimeGenerator.For(5)).toEqual([5]);
    });
    it("should return factorization of [6] for 6", function() {
        expect(PrimeGenerator.For(6)).toEqual([2, 3]);
    });
    it("should return factorization of [7] for 7", function() {
        expect(PrimeGenerator.For(7)).toEqual([7]);
    });
    it("should return factorization of [8] for 8", function() {
        expect(PrimeGenerator.For(8)).toEqual([2, 2, 2]);
    });
    it("should return factorization of [3,3] for 9", function() {
        expect(PrimeGenerator.For(9)).toEqual([3, 3]);
    });
    it("should return factorization of [2,2,2,2,3,3] for 144", function() {
        expect(PrimeGenerator.For(144)).toEqual([2,2,2,2,3, 3]);
    });
    it("should return factorization of [MAX_INT] for MAX_INT", function() {
        expect(PrimeGenerator.For(Math.pow(2,31) -1)).toEqual([Math.pow(2,31) -1]);
    });

});