const myKey = config.MY_KEY;

function setCityInfo(data){
    document.querySelector(".city").innerHTML = "Weather in " + data.name;
    document.querySelector(".temp").innerHTML = Math.floor(data.main.temp) + " °C";
    document.querySelector(".prev-text").innerHTML = data.weather[0].description;
    document.querySelector(".hum-text").innerHTML = "Humidity: " + data.main.humidity + " %";
    document.querySelector(".img-prev").src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
    document.querySelector(".img-prev").style.display = "block";
} 

async function getCityInfo(city){
    const APIResponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${myKey}&units=metric`);
    if(APIResponse.status === 200){
        const data = await APIResponse.json();
        setCityInfo(data);
    }
    else{
        alert("Local Not Found :c");
    }
    document.querySelector(".city-input").value = "";
}

function search(){
    const city = document.querySelector(".city-input").value;
    getCityInfo(city);
}