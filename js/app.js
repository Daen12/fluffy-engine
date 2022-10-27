const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector('#greeting');
const HIDDEN_CLASSNAME="hidden";
const USERNAME_KEY = "username"

function onLoginSubmit(event){
    event.preventDefault(); //stops default behavior(refresh page) from happening
    loginForm.classList.add("hidden");
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);
}
function paintGreetings(username){
    greeting.innerText = `Hello ${username}, how's your day?`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}
//Local storage API functions are available to be seen at mozilla, "local storage"
const savedUsername = localStorage.getItem(USERNAME_KEY);
console.log(savedUsername)
if (savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    // removing hidden class so the form shows to the user
    loginForm.addEventListener("submit", onLoginSubmit);
} else{
    // show the greetings
    paintGreetings(savedUsername);
}