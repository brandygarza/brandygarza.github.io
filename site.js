//assignment 4 - secret message 
const secretMessage = "This is a secret message!";

localStorage.setItem("It's a secret to everybody.", secretMessage);
if (secretMessage) {
  console.log("Secret Message:", secretMessage);
} else {
  console.log("Secret message not received.");
}
//assignment 3 - dynamic welcome
// const hours = new Date().getHours() 
// function Morning(){
//     const isMorning = hours >= 4 && hours < 12
//     console.log("Good Morning!")
// }
// function Afternoon(){
//     const isAfternoon = hours >= 12 && hours < 17
//     console.log("Good Afternoon!")
// }
// function Evening(){
//     const isEvening = hours >= 17 || hours < 4
//     console.log("Good Evening!")
// }
// function welcomeBox(){
// }
//const timeMessage = document.querySelectorAll('.welcome')
//if(Morning()){
  //  console.log("Good Morning!")
    //}
    //if(Afternoon()){
 //       console.log("Good Afternoon!")
   // }
 //   if (Evening()){
  //      console.log("Good Evening!")
   // }



