
function solution(S, P, Q) {
    var response = [];
    var cache = [[0, 0, 0, 0]];
    var newRow;
    var previousRow = [0, 0, 0, 0];

    for (var i = 0; i < S.length; i++) {
        newRow = previousRow.slice(0);
        newRow[getImpact(S[i]) - 1]++;
        cache.push(newRow);
        previousRow = newRow;
    }

    for (var i = 0; i < P.length; i++) {
        var first = P[i];
        var end = Q[i] - 1;

        response.push(getMinImpact(cache, first, end));
    }

    return response;
}

function getMinImpact(cache, first, end) {
    for (var j = 0; j < 4 ; j++) {
        var valChanged = cache[end][j] !== cache[first][j];

        if (valChanged) {
            return (j + 1);
        }
    }
}

function getImpact(s) {
    var map = {
        'A': 1,
        'C': 2,
        'G': 3,
        'T': 4
    };

    return map[s];
}