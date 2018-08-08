// Instantiate weather object
const weather = new Weather('Dallas');
// Instattiate UI object
const ui = new UI();

// Get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather);

// weather.changeLocation('Miami');

function getWeather() {
  weather
    .getWeather()
    .then(results => {
      console.log(results);

      ui.paint(results);
    })
    .catch(err => console.log(err));
}
