function solution(N, A) {
    var result = new Array(N).fill(0);
    var maxVal = 0;
    var maxChanged = true;

    for(var i = 0; i < A.length ;i++) {

        if (A[i] > N) {
            if (maxChanged) {
                result.fill(maxVal);
                maxChanged = false;
            }
        } else {
            result[A[i] - 1]++;

            if (result[A[i] - 1] > maxVal) {
                maxVal = result[A[i] - 1];
                maxChanged = true;
            }
        }
    }

    return result;
}