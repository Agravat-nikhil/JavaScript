//* ================================
//*  Callback hell
//* ================================



const getStudentData = () => {
  setTimeout(() => {
    console.log("Hi, My name is nikhil");
    setTimeout(() => {
      console.log("Hi, My middleName is agravat");
      setTimeout(() => {
        console.log("Hi, My lastName is nikhu");
        setTimeout(() => {
          console.log("Hi, I like to code ");
          setTimeout(() => {
            console.log("Hi, I live in kodinar");
            setTimeout(() => {
              console.log("Hi, I was born in kodinar");
              setTimeout(() => {
                console.log("Hi, I love to play cricket");
                setTimeout(() => {
                  console.log("Hi,I was a national Player in tennis ");
                }, 1000);
              }, 1000);
            }, 1000);
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
};

getStudentData();
