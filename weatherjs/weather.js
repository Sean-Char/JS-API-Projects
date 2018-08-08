class Weather {
  constructor(city) {
    this.apiKey = '6d85bb29d9e66a2b5dd480e523c32172';
    this.city = city;
  }

  // Fetch weather from API
  async getWeather() {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${this.city}&APPID=${
        this.apiKey
      }&units=metric`
    );

    const responseData = await response.json();
    return responseData;

    console.log(responseData);
  }

  // Change weather location
  changeLocation(city) {
    this.city = city;
  }
}
