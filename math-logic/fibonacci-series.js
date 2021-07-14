class FibonacciSeries {
    constructor() {

    }
    calculateFibonacciValue(number) {
        var s = 0;

        if (number == 0) {
            return (s);
        }
        if (number == 1) {
            s += 1;
            return (s);
        }
        else {
            return (this.calculateFibonacciValue(number - 1) + this.calculateFibonacciValue(number - 2));
        }
    }
}

module.exports = new FibonacciSeries();