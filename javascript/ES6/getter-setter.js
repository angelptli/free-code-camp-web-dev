// Use a getter and setters for the Thermostat class to get
// set temperatures in Fahrenheit and Celsius
class Thermostat {
  constructor(fahrenheit) {
    this.fahrenheit = fahrenheit; 
  }

  // Obtain the temperature in Celsius
  get temperature() {
    return (5 / 9) * (this.fahrenheit - 32);
  }

  // Set the temperature to Fahrenheit
  set temperature(celsius) {
    this.fahrenheit = ((celsius * 9.0) / 5) + 32;
  }
}

const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in Celsius
thermos.temperature = 26;
temp = thermos.temperature; // 26 in Celsius