function solution(A, B, K) {

    while(A % K !== 0 && A !== B) {
        A++;
    }

    while(B % K !== 0 && B !== A) {
        B--;
    }

    if (A === B) {
        return A % K === 0 ? 1 : 0
    }

    return (B / K) - (A / K) + 1;
}