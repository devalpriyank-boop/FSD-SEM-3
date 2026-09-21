/*function signup(){
    console.log("welcome")
    sendConfimationEmail()
    sendNotification()
}
function sendConfimationEmail(){
    console.log("emailsend");
}
function sendNotification(){
    console.log("notificationsend");
}
signup()*/
/*function signup() {
    console.log("welcome")
    sendconfirmationEmail();\
    sendNotification();
}

function sendconfirmationEmail() {
    console.log("email sent successfully");
}

function sendNotification() {
    console.log("notification sent successfully");
}

signup();

import. EventEmitter from "node:events";


// create eventEmitter class instance 
const eventEmitter = new EventEmitter();    

// event registration
Emitter.on("orderrplacedd", () => {
    console.log("order placed successfully")
})

emitter.emit("orderplaced")*/

ogin = new Login();
login.on("login successful", (username) => {
    console.log("login successful for user", username);
})
login.emit("login successful", username);