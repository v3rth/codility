// Correctness: 100%
// Performance: 20%
// Test score: 60%

function solution(A) {

    var cache = [];
    var previous = 0;
    var result = {
        value: -1,
        minStartAt: -1
    };

    var tmp;

    for (var i = 0; i < A.length; i++) {
        cache.push([]);

        for(var j = i; j < A.length; j++) {

            previous = typeof cache[i][j - 1] === 'undefined' ? 0 : cache[i][j - 1];
            cache[i][j] = A[j] + previous;

            tmp = cache[i][j] / (j - i + 1);

            if (i !==j && (tmp < result.value || result.value === -1)) {
                result.value = tmp;
                result.minStartAt = i;
            }
        }
    }

    return result.minStartAt;
}