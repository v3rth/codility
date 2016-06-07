function solution(A) {
    var permutation = [];

    for(var i = 0 ; i<A.length;i++) {
        if (permutation[A[i] - 1] === true || A[i] > A.length) {
            return 0;
        }

        permutation[A[i] - 1] = true;
    }

    return 1;
}