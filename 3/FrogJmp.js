function solution(X, Y, D) {
    if (X >= Y) {
        return 0;
    }

    return Math.ceil((Y - X) / D);
}