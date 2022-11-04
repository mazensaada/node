var sum = 0;

process.argv.map((el, i) => i > 1 && (sum += Number(el)));

console.log(sum);