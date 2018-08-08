// Init Storage
const storage = new Storage();
// Get stored location data
const weatherLocation = storage.getLocationData();

// Instantiate weather object
const weather = new Weather(weatherLocation.city);
// Instattiate UI object
const ui = new UI();

// Get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather);

// Change location event
document.getElementById('w-change-btn').addEventListener('click', e => {
  const city = document.getElementById('city').value;

  // Change location
  weather.changeLocation(city);

  // Set location in Local Storage
  storage.setLocationData(city);

  // Get and display weather
  getWeather();

  // Close modal
  $('#locModal').modal('hide');
});

function getWeather() {
  weather
    .getWeather()
    .then(results => {
      console.log(results);

      ui.paint(results);
    })
    .catch(err => console.log(err));
}
