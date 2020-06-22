class Weather {
  constructor() {
    // api key doesn't work :/
    this.apiKey = 'e51f6fb0ff946eb44b1cd2472a9afa0f';
    this.city = city;
    this.state = state;
  }
  // fetch weather from api
  async getWeather() {
    const response = await fetch(
      `http://api.wunderground.com/api/${this.apiKey}/conditions/q/${this.state}/${this.city}.json`
    );
    const responseData = await response.json();
    return responseData.current_observation;
  }
  // change weather location
  changeLocation(city, state) {
    this.city = city;
    this.state = state;
  }
}
