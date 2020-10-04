let sum = () => {
  let i = 2;
  let summ = 0;
  while (i < process.argv.length) {
    summ += Number(process.argv[i]);
    i++;
  }
  return summ;
};

console.log(sum(process.argv));
