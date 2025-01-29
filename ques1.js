async function getWeather() {
    const location = document.getElementById('location').value;  

    if (!location) {
        document.getElementById('weather-info').innerHTML = "<p>Please enter a city name.</p>";
        return;
    }

    try {

        let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=1ee518586b258851fbeb1da4e65e1a87`);

        if (!response.ok) {
            throw new Error("City not found or invalid API key");
        }

        let data = await response.json();

        const { name, main, weather } = data;
        const { temp, humidity } = main;
        const description = weather[0].description;

        const tempCelsius = (temp - 273.15).toFixed(2);

        const weatherInfo = `
            <div class="weather-box">
                <h3>Location</h3>
                <p><strong>${name}</strong></p>
            </div>
            <div class="weather-box">
                <h3>Temperature</h3>
                <p><strong>${tempCelsius}°C</strong></p>
            </div>
            <div class="weather-box">
                <h3>Humidity</h3>
                <p><strong>${humidity}%</strong></p>
            </div>
            <div class="weather-box">
                <h3>Description</h3>
                <p><strong>${description}</strong></p>
            </div>
        `;


        document.getElementById('weather-info').innerHTML = weatherInfo;

    } catch (error) {

        console.error("Error fetching weather data:", error);
        document.getElementById('weather-info').innerHTML = "<p>Failed to fetch weather data. Please check the city name and try again.</p>";
    }
}