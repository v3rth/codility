// TODO fixme

function solution(A) {
    const LIMIT = 1000000000;
    var counter = 0;
    var passed = 0;

    for (var i = 0; i < A.length; i++) {
        if (A[i] === 1) {
            counter += passed;
            if (counter >= LIMIT) {
                return -1;
            }
        } else {
            passed++;
        }
    }

    return counter;
}