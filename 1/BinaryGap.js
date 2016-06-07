
function solution(N) {
    var binVal = intToBin(N);
    binVal = trimBorder(binVal);

    var lengths = binVal.split('1')
            .filter((e) => e.length > 0)
            .map((e) => e.length)
    ;


    if (lengths.length === 0) {
        return 0;
    }

    if (lengths.length === 1) {
        return lengths[0];
    }

    return Math.max.apply(Math, lengths);
}

function intToBin(N) {
    return (N >>> 0).toString(2);
}

function trimBorder(binVal) {
    binVal = binVal.substr(binVal.indexOf('1'));
    binVal = binVal.substr(0, binVal.lastIndexOf('1') + 1);
    return binVal;
}