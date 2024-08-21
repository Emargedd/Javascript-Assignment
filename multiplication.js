function generateMultiplicationTable(n) {
    for (let i = 1; i <= 7; i++) {
        console.log(`Multiplication Table of ${i}:`);
        for (let j = 1; j <= n; j++) {
            console.log(`${i} x ${j} = ${i * j}`);
        }
        console.log("------------------------");
    }
}

generateMultiplicationTable(10);
