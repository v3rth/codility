function solution(X, A) {
    var coveredByLeave = [];

    for(var i = 0; i < A.length ;i++) {
        if (!coveredByLeave[A[i] - 1]) {
            coveredByLeave[A[i] - 1] = true;
            X--;
        }

        if (X === 0) {
            return i;
        }
    }

    return -1;
}