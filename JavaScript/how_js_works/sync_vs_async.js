
// const fun2 = () => {
//   console.log("fun2 starts and ends");
// };

// const fun1 = () => {
//   console.log("fun1 is start");
//   fun2();
//   console.log("fun1 ends");
// };

// fun1();

const fun2 = () => {
  setTimeout(() => {
    console.log("fun2 starts and ends");
  }, 2000);
};

const fun1 = () => {
  console.log("fun1 is start");
  fun2();
  console.log("fun1 ends");
};
fun1();
