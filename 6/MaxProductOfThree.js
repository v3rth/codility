Array.prototype.multiplyAll = function () {
    return this.reduce((prev, current) => prev * current);
};

function solution(A) {

    A.sort((a, b) => a - b);

    return Math.max(
        A.slice(0, 2).multiplyAll() * A.slice(-1).pop(),
        A.slice(-3).multiplyAll()
    );
}