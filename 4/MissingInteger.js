function solution(A) {
    var minimal = 1;
    var existed = [];
    for (var i = 0; i < A.length; i++) {
        existed[A[i] - 1] = true;
        if (A[i] === minimal) {

            do {
                minimal++;
            } while (existed[minimal - 1]);
        }
    }

    return minimal;
}