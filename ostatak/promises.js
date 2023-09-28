// const getX = () => {
//   let a = Math.random();
//   console.log(a);
//   a >= 0.5;
// };
//dio s ispisom
// function getX() {
//   let a = Math.random();
//   console.log(a);
//   return a >= 0.5;
// }

// var wait = new Promise((resolve, reject) => {
//   const x = getX();
//   if (x) {
//     return setTimeout(resolve, 1000);
//   }
//   return setTimeout(reject, 1000);
// })
//   .then(() => console.log("Yay!"))
//   .catch(() => console.log("Oh no!"));

var getX = () => Math.random() >= 0.5;

var wait = new Promise((resolve, reject) => {
  const x = getX();

  if (x) {
    return setTimeout(() => resolve(x), 1000);
  }
  return setTimeout(reject, 1000);
})
  .then((value) => console.log(value))
    .catch(() => console.log("Oh no!"));
  
    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise 