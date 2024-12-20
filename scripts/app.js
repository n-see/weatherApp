let displayCity = document.getElementById("displayCity");
let currentDate = document.getElementById("currentDate");
let favBox = document.getElementById("favBox");
let colDiv = document.getElementsByClassName("colDiv");
let favCity =[];
let favArr = [];
let cityInFav = [];
let pickedCity;

let searchInput = document.getElementById("searchInput")
addEventListener("keypress", function(event){
    if(event.key === "Enter"){
        getLocation(searchInput.value);
    }
});
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
let cityToDelete = document.getElementsByClassName("cityToDelete");

//Saves the current city to the favorites section
let favIcon = document.getElementById("favIcon").addEventListener("click", function(){
    if(cityInFav.includes(pickedCity)){
        alert(pickedCity + " is already in favorites");
    }else{
        cityInFav.push(pickedCity);
        document.getElementById("favIcon").src = "./assets/filledHeart.png";

            let obj ={
                "cityName" : favCity["0"].name
            }
            favArr.push(obj);
            console.log(favArr);
            localStorage.setItem("favoriteCity", JSON.stringify(favArr));
            console.log(localStorage);
            let colDiv = document.createElement("div");
            let rowDiv = document.createElement("div");
            let pTagCol = document.createElement("div");
            let imgTagCol = document.createElement("div");
            let imgTag = document.createElement("img");
            let pTag = document.createElement("p");
            pTagCol.classList="col-9";
            imgTagCol.classList="col-3";
            rowDiv.classList = "row";
            rowDiv.classList = "row favBtn orbitron";
            imgTag.classList = "favHeart";
            colDiv.classList = "col offCanvassDiv";
            pTag.setAttribute("id", favCity["0"].name);
            pTag.classList = "cityToDelete";
        
            imgTag.src = "../assets/filledHeart.png";
            pTag.innerText = favCity["0"].name;
            pTag.addEventListener("click", function(){
                getLocation(pTag.innerText)
            })
            imgTag.addEventListener("click", function(){
                deleteFunction(pTag.id);
            });
            imgTagCol.appendChild(imgTag);
            pTagCol.appendChild(pTag);
            rowDiv.appendChild(pTagCol);
            rowDiv.appendChild(imgTagCol);
            colDiv.appendChild(rowDiv);
            favBox.appendChild(colDiv);
            console.log(localStorage);
    }
    
        
    

});

//Elements for the five day forecast
let day1 = document.getElementById("day1");
let day2 = document.getElementById("day2");
let day3 = document.getElementById("day3");
let day4 = document.getElementById("day4");
let day5 = document.getElementById("day5");

let date1 = document.getElementById("date1");
let date2 = document.getElementById("date2");
let date3 = document.getElementById("date3");
let date4 = document.getElementById("date4");
let date5 = document.getElementById("date5");

let temp1 = document.getElementById("temp1");
let temp2 = document.getElementById("temp2");
let temp3 = document.getElementById("temp3");
let temp4 = document.getElementById("temp4");
let temp5 = document.getElementById("temp5");

// Weather icons img locations
let currentIcon = document.getElementById("currentIcon");
let day1Icon = document.getElementById("day1Icon");
let day2Icon = document.getElementById("day2Icon");
let day3Icon = document.getElementById("day3Icon");
let day4Icon = document.getElementById("day4Icon");
let day5Icon = document.getElementById("day5Icon");
let icon1 = "";
let icon2 = "";
let icon3 = "";
let icon4 = "";
let icon5 = "";
let icon6 = "";

// let defaultCity = "Stockton, CA";
let longitude = "";
let latitude = "";
let ending = "";


//Gets the current month day year to display
let date = new Date();
let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let day = days[date.getDay()];
let month = months[date.getMonth()];

if(date.getDate() === 1 || date.getDate() === 21 || date.getDate() === 31){
    ending = "st";
}else if(date.getDate() === 2 || date.getDate() === 22){
    ending = "nd";
}else if(date.getDate() === 3 || date.getDate() === 23)
ending = "rd";
else{
    ending = "th";
}

currentDate.innerText = day + ", " + month  + " " + date.getDate() + ending;



//Five day forecast day of the week
day1.innerText = days[date.getDay() + 1];
day2.innerText = days[date.getDay() + 2];
day3.innerText = days[date.getDay() + 3];
day4.innerText = days[date.getDay() + 4];
day5.innerText = days[date.getDay() + 5];

//Five day forecast dates

function addOneDays() {
    // Get the current date
    let currentDate = new Date();

    // Get the current day of the month
    let currentDay = currentDate.getDate();

    // Calculate the maximum day of the current month
    let maxDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();

    // Add five days
    currentDate.setDate(currentDay + 1);

    // Check if the new date exceeds the maximum day of the current month
    if (currentDate.getDate() > maxDayOfMonth) {
        // Subtract the excess days
        currentDate.setDate(currentDate.getDate() - maxDayOfMonth);
        
        // Move to the next month
        currentDate.setMonth(currentDate.getMonth() + 1);
    }
    let monthNames = [
        "January", "February", "March", "April", "May", "June", "July",
        "August", "September", "October", "November", "December"
    ];

    if(currentDate.getDate() === 1 || currentDate.getDate() === 21 ||currentDate.getDate() === 31){
        ending = "st";
    }else if(currentDate.getDate() === 2 || currentDate.getDate() === 22){
        ending = "nd";
    }else if(currentDate.getDate() === 3 || currentDate.getDate() === 23)
    ending = "rd";
    else{
        ending = "th";
    }
    

    // Return the result
    date1.innerText = monthNames[currentDate.getMonth()] + " " + currentDate.getDate() + ending;
}
function addTwoDays() {
    // Get the current date
    let currentDate = new Date();

    // Get the current day of the month
    let currentDay = currentDate.getDate();

    // Calculate the maximum day of the current month
    let maxDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();

    // Add five days
    currentDate.setDate(currentDay + 2);

    // Check if the new date exceeds the maximum day of the current month
    if (currentDate.getDate() > maxDayOfMonth) {
        // Subtract the excess days
        currentDate.setDate(currentDate.getDate() - maxDayOfMonth);
        
        // Move to the next month
        currentDate.setMonth(currentDate.getMonth() + 1);
    }
    let monthNames = [
        "January", "February", "March", "April", "May", "June", "July",
        "August", "September", "October", "November", "December"
    ];

    if(currentDate.getDate() === 1 || currentDate.getDate() === 21 ||currentDate.getDate() === 31){
        ending = "st";
    }else if(currentDate.getDate() === 2 || currentDate.getDate() === 22){
        ending = "nd";
    }else if(currentDate.getDate() === 3 || currentDate.getDate() === 23)
    ending = "rd";
    else{
        ending = "th";
    }

    // Return the result
    date2.innerText = monthNames[currentDate.getMonth()] + " " + currentDate.getDate() + ending;
}
function addThreeDays() {
    // Get the current date
    let currentDate = new Date();

    // Get the current day of the month
    let currentDay = currentDate.getDate();

    // Calculate the maximum day of the current month
    let maxDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();

    // Add five days
    currentDate.setDate(currentDay + 3);

    // Check if the new date exceeds the maximum day of the current month
    if (currentDate.getDate() > maxDayOfMonth) {
        // Subtract the excess days
        currentDate.setDate(currentDate.getDate() - maxDayOfMonth);
        
        // Move to the next month
        currentDate.setMonth(currentDate.getMonth() + 1);
    }
    let monthNames = [
        "January", "February", "March", "April", "May", "June", "July",
        "August", "September", "October", "November", "December"
    ];

    if(currentDate.getDate() === 1 || currentDate.getDate() === 21 ||currentDate.getDate() === 31){
        ending = "st";
    }else if(currentDate.getDate() === 2 || currentDate.getDate() === 22){
        ending = "nd";
    }else if(currentDate.getDate() === 3 || currentDate.getDate() === 23)
    ending = "rd";
    else{
        ending = "th";
    }

    // Return the result
    date3.innerText = monthNames[currentDate.getMonth()] + " " + currentDate.getDate() + ending;
}
function addFourDays() {
    // Get the current date
    let currentDate = new Date();

    // Get the current day of the month
    let currentDay = currentDate.getDate();

    // Calculate the maximum day of the current month
    let maxDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();

    // Add five days
    currentDate.setDate(currentDay + 4);

    // Check if the new date exceeds the maximum day of the current month
    if (currentDate.getDate() > maxDayOfMonth) {
        // Subtract the excess days
        currentDate.setDate(currentDate.getDate() - maxDayOfMonth);
        
        // Move to the next month
        currentDate.setMonth(currentDate.getMonth() + 1);
    }
    let monthNames = [
        "January", "February", "March", "April", "May", "June", "July",
        "August", "September", "October", "November", "December"
    ];

    if(currentDate.getDate() === 1 || currentDate.getDate() === 21 ||currentDate.getDate() === 31){
        ending = "st";
    }else if(currentDate.getDate() === 2 || currentDate.getDate() === 22){
        ending = "nd";
    }else if(currentDate.getDate() === 3 || currentDate.getDate() === 23)
    ending = "rd";
    else{
        ending = "th";
    }

    // Return the result
    date4.innerText = monthNames[currentDate.getMonth()] + " " + currentDate.getDate() + ending;
}
function addFiveDays() {
    // Get the current date
    let currentDate = new Date();

    // Get the current day of the month
    let currentDay = currentDate.getDate();

    // Calculate the maximum day of the current month
    let maxDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();

    // Add five days
    currentDate.setDate(currentDay + 5);

    // Check if the new date exceeds the maximum day of the current month
    if (currentDate.getDate() > maxDayOfMonth) {
        // Subtract the excess days
        currentDate.setDate(currentDate.getDate() - maxDayOfMonth);
        
        // Move to the next month
        currentDate.setMonth(currentDate.getMonth() + 1);
    }
    let monthNames = [
        "January", "February", "March", "April", "May", "June", "July",
        "August", "September", "October", "November", "December"
    ];


    // Return the result
    date5.innerText = monthNames[currentDate.getMonth()] + " " + currentDate.getDate() + ending;
}
addOneDays();
addTwoDays();
addThreeDays();
addFourDays();
addFiveDays();

//API Fetch to get Longitude and Latitude of the City of Choice -- geocode API

async function getLocation(cityOfChoice){
    let apiResponse = await fetch("https://api.openweathermap.org/geo/1.0/direct?q="+ cityOfChoice +"&limit=2&appid=f6031c8c11189329722b1b29686e18f7").then((Response) => Response.json());
    console.log(apiResponse);
    latitude = apiResponse["0"].lat.toString();
    longitude = apiResponse["0"].lon.toString();
    console.log(latitude);
    console.log(longitude);
    displayCity.innerText = apiResponse["0"].name + ", " + apiResponse["0"].state;
    getWeather(latitude, longitude);
    getFiveDay(latitude, longitude);
    favCity = apiResponse;
    pickedCity = apiResponse["0"].name;

      //checks if the city is favorite and if it is the heart will be filled
    for(let i = 0; i < favArr.length; i++){
        console.log(favArr);
        if(favArr[i].cityName == apiResponse["0"].name){
            console.log("in favorite");
            document.getElementById("favIcon").src = "./assets/filledHeart.png";
            break;
        }
        else{
            console.log("not in favorite");
            document.getElementById("favIcon").src = "./assets/hollowHeart.png";

        }
    }
        
}

//Takes the found longitude and Latitude of the city of choice and pull the current weather -- Current weather API

async function getWeather(lat, lon){
    let apiResponse = await fetch("https://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&appid=f6031c8c11189329722b1b29686e18f7&units=imperial").then((Response) => Response.json());
    currentTemp.innerText = apiResponse.main.temp;
    currentTemp.innerText = Math.floor(currentTemp.innerText)+ "°";
    currentCondition.innerText = apiResponse.weather["0"].main;
    maxTemp.innerText = Math.floor(apiResponse.main.temp_max) + "°"
    minTemp.innerText = Math.floor(apiResponse.main.temp_min)  + "°";
    feelLike.innerText = Math.floor(apiResponse.main.feels_like)  + "°";
    humidity.innerText = apiResponse.main.humidity + "%";
    icon1 = apiResponse.weather["0"].icon;
    currentIcon.src = "../assets/weatherIcons/" + icon1 +".png";
    console.log(apiResponse);
}

//Five day forecast API
async function getFiveDay(lat, lon){
    let apiResponse = await fetch("https://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + lon + "&appid=f6031c8c11189329722b1b29686e18f7&units=imperial").then((Response) => Response.json());
    temp1.innerText = Math.floor(apiResponse.list["6"].main.temp) + "°";
    temp2.innerText = Math.floor(apiResponse.list["12"].main.temp) + "°";
    temp3.innerText = Math.floor(apiResponse.list["18"].main.temp) + "°";
    temp4.innerText = Math.floor(apiResponse.list["24"].main.temp) + "°";
    temp5.innerText = Math.floor(apiResponse.list["30"].main.temp) + "°";
    icon2 = apiResponse.list["6"].weather["0"].icon;
    icon3 = apiResponse.list["12"].weather["0"].icon;
    icon4 = apiResponse.list["18"].weather["0"].icon;
    icon5 = apiResponse.list["24"].weather["0"].icon;
    icon6 = apiResponse.list["30"].weather["0"].icon;
    day1Icon.src = "../assets/weatherIcons/" + icon2 +".png";
    day2Icon.src = "../assets/weatherIcons/" + icon3 +".png";
    day3Icon.src = "../assets/weatherIcons/" + icon4 +".png";
    day4Icon.src = "../assets/weatherIcons/" + icon5 +".png";
    day5Icon.src = "../assets/weatherIcons/" + icon6 +".png";
    console.log(apiResponse);
}

// Will create fav list names if saved in Local Storage

let favData = JSON.parse(localStorage.getItem("favoriteCity"));
if(favData && favData != null){
    favArr = favData;
    for(let i = 0; i < favArr.length; i++){
        let colDiv = document.createElement("div");
        let rowDiv = document.createElement("div");
        let pTagCol = document.createElement("div");
        let imgTagCol = document.createElement("div");
        let imgTag = document.createElement("img");
        pTagCol.classList="col-9 ";
        imgTagCol.classList="col-3";
        rowDiv.classList = "row favBtn orbitron";
        colDiv.classList = "col offCanvassDiv";
        let pTag = document.createElement("p");
        pTag.classList = "cityToDelete";
        pTag.setAttribute("id", favArr[i].cityName);
        imgTag.classList = "favHeart";
        imgTag.src = "../assets/filledHeart.png";
        pTag.innerText = favArr[i].cityName;
        pTag.addEventListener("click", function(){
            getLocation(pTag.innerText);
            console.log(pTag.id)
        })
        cityInFav.push(pTag.innerText)
        imgTag.addEventListener("click", function(){
            deleteFunction(pTag.id);
        });
        imgTagCol.appendChild(imgTag);
        pTagCol.appendChild(pTag);
        rowDiv.appendChild(pTagCol);
        rowDiv.appendChild(imgTagCol);
        colDiv.appendChild(rowDiv);
        favBox.appendChild(colDiv);
    }
}

//function that deletes the chosen entry from the favorites list
function deleteFunction(deletedCity){
    for(let i = 0; i < favArr.length; i++){
        console.log("deleted");
        
        if(deletedCity === favArr[i].cityName){
            console.log(deletedCity);
            favArr.splice(i, 1);
            let colDiv = favBox.getElementsByClassName("col")[i];
            favBox.removeChild(colDiv);
            console.log(favArr);
            console.log("deleted" + deletedCity);
            for(let i = 0; i < cityInFav.length; i++){
                if(deletedCity == cityInFav[i]){
                    cityInFav.splice(i, 1);
                    console.log(cityInFav);
                }
            }
            
        }
    }
    localStorage.setItem("favoriteCity", JSON.stringify(favArr));
};