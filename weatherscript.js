// Replace with your OpenWeatherMap API key
const apiKey = "a0d02f348d354ac2fb493081b135e326";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
const searchbox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weathericon");
async function checkWeather(city){
    const response = await fetch(apiUrl +city+ `&appid=${apiKey}`);
    if(response.status == 404){
        document.querySelector(".error").style.display ="block";
        document.querySelector(".weather").style.display = "none";
    }
    else{
    var data = await response.json();
    console.log(data);
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "ºC";
    document.querySelector(".humidity").innerHTML = data.main.humidity +"%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/hr";
    if(data.weather[0].main == "Clouds"){
        weatherIcon.src="cloudy.png";
    }
    else if(data.weather[0].main =="Clear"){
        weatherIcon.src="clouds.png";
    }
    else if(data.weather[0].main =="Rain"){
        weatherIcon.src="rainy-day.png";
    }
    else if(data.weather[0].main =="DriZZle"){
        weatherIcon.src="drizzle.png";
    }
    else if(data.weather[0].main =="Mist"){
        weatherIcon.src="Mist.png";
    }
    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display ="none";
  }
}
searchBtn.addEventListener("click", ()=>{
    checkWeather(searchbox.value);
})
