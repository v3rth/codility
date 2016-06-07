// testEquals(reduceK(5, 2), 1);
// testEquals(reduceK(2, 10), 2);
// testEquals(getLeftPart([1,2,3], 1), [3]);
// testEquals(getLeftPart([1,2], 0), [1,2]);
// testEquals(getRightPart([1,2], 0), []);
// testEquals(getRightPart([1,2,3], 1), [1,2]);
// testEquals(getLeftPart([9, 7, 6, 3, 8, 9, 7], 2), [9, 7]);

function solution(A, K) {
    K = reduceK(K, A.length);

    if (K === 0) {
        return A;
    }
    
    var leftPart = getLeftPart(A, K);
    var rightPart = getRightPart(A, K);
    
    return leftPart.concat(rightPart);
}


function getRightPart(A, K) {
    if (K === 0) {
        return [];
    }
    return A.slice(0, A.length - K);
}

function getLeftPart(A, K) {
    return A.slice(K * (-1));
}

function reduceK(K, L) {
    return K - (Math.floor(K / L) * L);
}

/////////// HELPERS ///////////
function testEquals(functionResult, expectedResult) {
    if (JSON.stringify(functionResult) === JSON.stringify(expectedResult)) {
        console.log('TEST: PASSED');
    } else {
        console.log('TEST: FAILED, expected: ', expectedResult, ' got ', functionResult);
    }
}