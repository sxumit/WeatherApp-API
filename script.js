const apiKey = "4a67c178cf2eea10df8df32c515bde52";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
const searchBox = document.querySelector(".search input"); // for city input in search div
const searchBtn = document.querySelector(".search button"); // 

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json(); /*now data will contain all the info about weather*/
    console.log(data);
    document.querySelector(".city").innerHTML = data.name; /*it selects the city element and innerhtml will update the city name coming from data.name*/
    /*document.querySelector(".temp").innerHTML = data.main.temp+ "°C"; it selects the temperture element and innerhtml will update the temp coming from data.main.temp*/
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C"; // used math.round fun to round off the temp only
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
}

searchBtn.addEventListener("click", () => { /*when pressed the check weather will be called */
    checkWeather();
})