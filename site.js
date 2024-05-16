//assignment 4 - secret message 
// const secretMessage = "This is a secret message!";

// localStorage.setItem("It's a secret to everybody.", secretMessage);
// if (secretMessage) {
//   console.log("Secret Message:", secretMessage);
// } else {
//   console.log("Secret message not received.");
// }
//assignment 3 - dynamic welcome

 const hours = new Date().getHours()

 const isMorning = hours >= 4 && hours < 12 //morning?
 const isAfternoon = hours >= 12 && hours < 17 //afternoon?
 const isEvening = hours >= 17 || hours < 4 //evening?

 
 const h1 = welcome.querySelector('h1')
 if(isMorning){
  h1.textcontent = "Good Morning!"
 }
 if(isAfternoon){
  h1.textcontent = "Good Afternoon!"
 }
 if(isEvening){
  h1.textcontent = "Good Evening!"
 }



