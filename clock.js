const clock = document.querySelector("h2#clock");


function getClock(){
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}
getClock(); // call getClock immediately so that refreshed page doesn't wait for 1 sec for interval function to happen.
setInterval(getClock, 1000); //(function, interval time) Here, 1000ms = 1sec.