/**
 * Created by Guy_Rotem on 7/20/14.
 */
function PrimeGenerator() {
}

PrimeGenerator.For = function (number) {
    var factors = [];

    for(var prime=2; prime * prime <= number; prime++) {
        while (number % prime == 0) {
            factors.push(prime);
            number /= prime;
        }
    }
    if(number > 1) {
        factors.push(number);
    }
    return factors;
};