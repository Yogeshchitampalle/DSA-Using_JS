// function addUpTo(n) {
//   let total = 0;
//   for (let i = 1; i <= n; i++) {
//     total += i;
//   }
//   return total;
// }
// var t1 = performance.now();
// addUpTo(10000000);
// var t2 = performance.now();
// console.log(`Total Time : ${(t2 - t1) / 1000} seconds.`);

// function countUpAndDown(n){
//   console.log("Up");
//   for(let i=0; i<n; i++){
//     console.log(i);
//   }
//   console.log("at the top ! \Going down...");
//   for(let j=n-1; j>=0; j--){
//     console.log(j);
//   }
//   console.log("Down");
// }
// countUpAndDown(5);

function printAllpairs(n){
  let count =0;
  for(let i=0; i<n; i++){
   for(let j=0; j<n; j++){
    console.log(i,j);
    count++;
   }
  }
  console.log("Total number of pairs: ", count)
}
printAllpairs(2);