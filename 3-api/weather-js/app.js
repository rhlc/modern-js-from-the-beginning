const storage = new Storage();
const weatherLocation = storage.getLocationData();
// init weather object
const weather = new Weather(weatherLocation.city, weatherLocation.state);
// get weather on dom load
document.addEventListener('DOMContentLoaded', getWeather);

// change location event
document.getElementById('w-change-btn').addEventListener('click', (e) => {
  const city = document.getElementById('city').value;
  const state = document.getElementById('state').value;
  weather.changeLocation('Miami', 'FL');

  storage.setLocation(city, state);

  // get weather
  getWeather();

  // close model
  $('#locModal').modal('hide');
});
// weather.changeLocation('Miami', 'FL');

function getWeather() {
  weather
    .getWeather()
    .then((results) => {
      console.log(results);
    })
    .catch((err) => console.log(err));
}
