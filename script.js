const apiKey = "4a67c178cf2eea10df8df32c515bde52";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=bangalore";

async function checkWeather() {
    const response = await fetch(apiUrl + `&appid=${apiKey}`);
    var data = await response.json(); /*now data will contain all the info about weather*/
    console.log(data);
}
checkWeather();