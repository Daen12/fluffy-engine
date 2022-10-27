
const API_KEY = "cccaf44100aea4eba4231a7fcb1599d6";

function onGeoOK(position){
    const lat = position.coords.latitude;
    const long = position.coords.longitude;
    console.log("You live in", lat, long);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_KEY}&units=metric`;
    console.log(url); //click the url to see if it works.Also, remember to use backticks!``
    fetch(url)
    .then(response => response.json()
    .then(data=>{
        const weather = document.querySelector("#weather span:first-child")
        const city = document.querySelector("#weather span:last-child")
        const APIweather = data.weather[0].main ;
        const name = data.name;
        weather.innerText = `${APIweather} / ${data.main.temp}`;
        city.innerText = name}));
    
}

function onGeoError(){
    alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOK, onGeoError);