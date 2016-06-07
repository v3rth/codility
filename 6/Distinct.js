function solution(A) {
    var B = {};
    var counter = 0;

    A.map((e) => {

        if (B[e] !== true) {
            counter++
        }

        B[e] = true;
    });

    return counter;
}