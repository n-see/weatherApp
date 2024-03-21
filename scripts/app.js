let displayCity = document.getElementById("displayCity");
let currentDate = document.getElementById("currentDate");

let searchInput = document.getElementById("searchInput");
let currentTemp = document.getElementById("currentTemp");
let currentCondition = document.getElementById("currentCondition");
let maxTemp = document.getElementById("maxTemp");
let minTemp = document.getElementById("minTemp");
let feelLike = document.getElementById("feelLike");
let humidity = document.getElementById("humidity");
let searchBtn = document.getElementById("searchBtn").addEventListener("click", function(){
    getLocation(searchInput.value);
    searchInput.value = "";
})
let day1 = document.getElementById("day1");
let day2 = document.getElementById("day2");
let day3 = document.getElementById("day3");
let day4 = document.getElementById("day4");
let day5 = document.getElementById("day5");

let defaultCity = "Stockton, CA";
let longitude = "";
let latitude = "";

let date = new Date();
let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let day = days[date.getDay()];
let month = months[date.getMonth()];
currentDate.innerText = "TODAY " + day + " " + month  + " " + date.getDate() + ", " + date.getFullYear();
day1.innerText = days[date.getDay() + 1];
day2.innerText = days[date.getDay() + 2];
day3.innerText = days[date.getDay() + 3];
day4.innerText = days[date.getDay() + 4];
day5.innerText = days[date.getDay() + 5];

//API Fetch to get Longitude and Latitude of the City of Choice -- geocode API

async function getLocation(cityOfChoice){
    let apiResponse = await fetch("http://api.openweathermap.org/geo/1.0/direct?q="+ cityOfChoice +"&limit=2&appid=f6031c8c11189329722b1b29686e18f7").then((Response) => Response.json());
    console.log(apiResponse);
    latitude = apiResponse["0"].lat.toString();
    longitude = apiResponse["0"].lon.toString();
    console.log(latitude);
    console.log(longitude);
    displayCity.innerText = apiResponse["0"].name + ", " + apiResponse["0"].state;
    getWeather(latitude, longitude);
    getFiveDay(latitude, longitude);

}

//Takes the found longitude and Latitude of the city of choice and pull the current weather -- Current weather API

async function getWeather(lat, lon){
    let apiResponse = await fetch("https://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&appid=f6031c8c11189329722b1b29686e18f7&units=imperial").then((Response) => Response.json());
    currentTemp.innerText = apiResponse.main.temp;
    currentTemp.innerText = Math.floor(currentTemp.innerText)+ "°F";
    currentCondition.innerText = apiResponse.weather["0"].main;
    maxTemp.innerText = Math.floor(apiResponse.main.temp_max) + "°F"
    minTemp.innerText = Math.floor(apiResponse.main.temp_min)  + "°F";
    feelLike.innerText = Math.floor(apiResponse.main.feels_like)  + "°F";
    humidity.innerText = apiResponse.main.humidity + "%";
    console.log(apiResponse);
}

//Five day forecast API
async function getFiveDay(lat, lon){
    let apiResponse = await fetch("https://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + lon + "&appid=f6031c8c11189329722b1b29686e18f7&units=imperial").then((Response) => Response.json());

    console.log(apiResponse);
}