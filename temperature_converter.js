const temperatureConverter = {
    toCelsius: function(fahrenheit) {
        return (fahrenheit - 32) * (5 / 9);
    },

    toFahrenheit: function(celsius) {
        return (celsius * (9 / 5)) + 32;
    }
};

let fahrenheit = 100;
let celsius = 37;

let convertedToCelsius = temperatureConverter.toCelsius(fahrenheit);
console.log(`${fahrenheit}°F is equal to ${convertedToCelsius.toFixed(2)}°C`);

let convertedToFahrenheit = temperatureConverter.toFahrenheit(celsius);
console.log(`${celsius}°C is equal to ${convertedToFahrenheit.toFixed(2)}°F`);

function convertTemperature(value, scale) {
    let result;
    if (scale === 'F') {
        result = temperatureConverter.toCelsius(value);
        console.log(`${value}°F is equal to ${result.toFixed(2)}°C`);
    } else if (scale === 'C') {
        result = temperatureConverter.toFahrenheit(value);
        console.log(`${value}°C is equal to ${result.toFixed(2)}°F`);
    } else {
        console.log("Invalid scale. Use 'F' for Fahrenheit or 'C' for Celsius.");
    }
}

convertTemperature(212, 'F');
convertTemperature(100, 'C');
