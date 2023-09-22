const key = "910c30a4cb733a65d6e5b968d7518841";

function setCityInfo(data){
    document.querySelector(".city").innerHTML = "Weather in " + data.name;
    document.querySelector(".temp").innerHTML = Math.floor(data.main.temp) + " °C";
    document.querySelector(".prev-text").innerHTML = data.weather[0].description;
    document.querySelector(".hum-text").innerHTML = "Humidity: " + data.main.humidity + " %";
    document.querySelector(".img-prev").src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
    document.querySelector(".img-prev").style.display = "block";
} 

async function getCityInfo(city){
    const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`).then(response => response.json());
    setCityInfo(data);
}

function search(){
    const city = document.querySelector(".city-input").value;
    getCityInfo(city);
}