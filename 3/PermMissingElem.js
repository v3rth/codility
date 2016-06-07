
function solution(A) {
    var expected = 0;
    var sum = 0;
    for(var i = 1; i <= A.length ; i++) {
        expected +=i;
        sum += A[i - 1];
    }

    return A.length + 1 - (sum - expected);
}