document.addEventListener("DOMContentLoaded", () => {
    const citynput = document.getElementById("city-input");
    const getWeatherBtn = document.getElementById("get-weather-btn");
    const weatherInfo = document.getElementById("weather-info");
    const cityNameDisplay = document.getElementById("city-name");
    const tempDisplay = document.getElementById("temperature");
    const descriptionDisplay = document.getElementById("description");
    const errorMessage = document.getElementById("error-message");
    const API_KEY = " ###"; //env variable
    getWeatherBtn.addEventListener("click", async () => {
        const city = citynput.value.trim();
        if (city) {
            // it may throw an error
            // server/database is always in another continent
            try{
                const weatherdata= await fetchWeatherData(city);
                displayWeatherData(weatherdata);
            }catch{
                showError();
            }
            return;
        }})
    async function fetchWeatherData(city) {
        //get weather data from api
        const url= `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;
        const response = await fetch(url);
        console.log(typeof response);
        console.log("RESPONSE", response);
        if(!response.ok){
            throw new Error("Network response was not ok");
        }
        const data = await response.json();
        return data;
    }
    function displayWeatherData(data) {
        //display weather data on the page
        console.log(data);
        const{name , main, weather}= data;
        cityNameDisplay.textContent = name;
        tempDisplay.textContent = `Temperature: ${main.temp} °C`;
        descriptionDisplay.textContent = `Description: ${weather[0].description}`;
        errorMessage.classList.add('hidden');
        weatherInfo.classList.remove('hidden');
    }
    function showError() {
        //display error message
        weatherInfo.classList.remove('hidden');
        errorMessage.classList.add('hidden');
    }
       
});

