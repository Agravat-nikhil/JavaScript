
// syntax
// function myPromiseFunction() {
//   });
// }

// const pr = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject("Sorry, I can't");
//   }, 2000);
// })
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() => {
//     console.log("Don't worry, We all miss you and keep smiling");
//   });


//* ==========================================
//* Promise Methods
//* ==========================================


// const studentName = "nikhil";

// const enrollStudent = (studentName) => {
//   return new Promise((resolve, reject) => {
/
//     setTimeout(() => {
//       const isSuccessful = Math.random() > 0.4;

//       if (isSuccessful) {
//         resolve(`Enrollment successful for ${studentName}`);
//       } else {
//         reject(`Enrollment failed for ${studentName}. Please try again.`);
//       }
//     }, 2000);
//   });
// };

// enrollStudent(studentName)
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   })
//   .finally(() => {
//     console.log("Enrollment process completed.");
//   });

const promise1 = new Promise((resolve, reject) =>
  setTimeout(() => resolve("First"), 2000)
);

// const promise2 = new Promise((resolve) =>
//   setTimeout(() => resolve("Second"), 5000)
// );

const promise2 = new Promise((resolve, reject) =>
  setTimeout(() => reject("Failed"), 100)
);

const promise3 = new Promise((resolve) =>
  setTimeout(() => resolve("Third"), 1000)
);

// Promise.all([promise1, promise3, promise2])
//   .then((values) => {
//     console.log(values);
//   })
//   .catch((error) => {
//     console.error(error);
//   });

// Promise.allSettled([promise1, promise2, promise3])
//   .then((values) => {
//     console.log(values);
//   })
//   .catch((error) => {
//     console.error(error);
//   });

Promise.race([promise1, promise2, promise3])
  .then((values) => {
    console.log(values);
  })
  .catch((error) => {
    console.error(error);
  });
