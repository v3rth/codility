function solution(A) {
    A.sort();

    if (A.length === 1) {
        return A[0];
    }

    for(var i = 0; i < A.length; i=i+2) {
        if (A[i] !== A[i+1]) {
            return A[i];
        }
    }
}