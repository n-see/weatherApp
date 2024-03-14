let displayCity = document.getElementById("displayCity");
let searchInput = document.getElementById("searchInput");
let searchBtn = document.getElementById("searchBtn").addEventListener("click", function(){
    getLocation(searchInput.value);
    searchInput.value = "";
})
let defaultCity = "Stockton, CA";
let longitude = 0;
let latitude = 0;

async function getLocation(cityOfChoice){
    let apiResponse = await fetch("http://api.openweathermap.org/geo/1.0/direct?q="+ cityOfChoice +"&limit=2&appid=f6031c8c11189329722b1b29686e18f7").then((Response) => Response.json());
    console.log(apiResponse);
}
