let cityBtn = document.getElementById("getWeatherBtn");
let cityName = document.getElementById("cityName");
let weatherIcon = document.getElementById("weatherIcon");
let WeatherName = document.getElementById("WeatherName");
let time = document.getElementById("time");
let cityInput = "Delhi";
const weatherFunc = async function () {
  cityInput = document.getElementById("cityInput").value;
  document.getElementById("cityInput").value = "";
  let apiUrl = `https://api.weatherapi.com/v1/current.json?key=d05869487ca14961919194357240810&q=${cityInput}&aqi=no`;

  console.log(cityInput);
  try {
    let response = await fetch(apiUrl);
    let data = await response.json();
    console.log(data);
    cityName.innerText = cityInput.toUpperCase();
    WeatherName.innerText = data.current.condition.text;
    weatherIcon.src = data.current.condition.icon;
    time.innerText = data.location.localtime;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
cityBtn.addEventListener("click", weatherFunc);
document.getElementById("cityInput").addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    weatherFunc();
  }
});
