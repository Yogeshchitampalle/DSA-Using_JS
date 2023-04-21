function addUpTo(n) {
  return n * (n + 1) / 2;
}
var time1 = performance.now();
addUpTo(10000000);
var time2 = performance.now();
console.log(` Total Time : ${(time2 - time1) / 1000} seconds.`);