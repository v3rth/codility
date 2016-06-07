Array.prototype.sum = function () {
    return this.reduce((a, b) => a + b, 0);
};

Array.prototype.getMin = function () {
    return Math.min.apply(Math, this);
};

// testEquals([1,2,3].sum(), 6);
// testEquals([0].sum(), 0);
// testEquals(difference(-3, 3), 6);
// testEquals(difference(3, -3), 6);
// testEquals(difference(-5, -3), 2);
// testEquals(difference(2, 10), 8);
// testEquals(difference(10, 2), 8);
// testEquals([1,2,3].getMin(), 1);
// testEquals([10,2,3].getMin(), 2);

function solution(A) {

    if (A.length == 2) {
        return difference(A[0], A[1]);
    }

    var sum = A.sum();
    var differences = [];
    var leftSum = 0;

    for (var i = 1; i < A.length - 1; i++) {
        leftSum += A[i-1];
        differences.push(difference(leftSum, sum - leftSum));
    }
    return differences.getMin();
}

function difference(a, b) {
    return Math.abs(a > b ? a - b : b - a);
}


/////////// HELPERS ///////////
function testEquals(functionResult, expectedResult) {
    if (JSON.stringify(functionResult) === JSON.stringify(expectedResult)) {
        console.log('TEST: PASSED');
    } else {
        console.log('TEST: FAILED, expected: ', expectedResult, ' got ', functionResult);
    }
}