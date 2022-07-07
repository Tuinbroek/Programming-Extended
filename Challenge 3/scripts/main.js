// Set API token
mapboxgl.accessToken = 'pk.eyJ1IjoicmljaGllZWxpYSIsImEiOiJjbDU5ZzN6ejUwemI2M2Vxbng0cXRnc2Z5In0.THkdiz8DwnJWMWtaahIHJA';

// Initialate map
var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/richieelia/cl59hjygt009814qp4gw5ojqt',
  center: [10.00000, 50.000000],
  zoom: 1,
});

map.addControl(new mapboxgl.NavigationControl());

var openWeatherMapUrl = 'https://api.openweathermap.org/data/2.5/weather';
var openWeatherMapUrlApiKey = 'd8689c473297b130200a5a21866a4cda';

var cities = [
	{
		name: 'The Hague',
		coordinates: {

			lat: 52.0706,
			lon: 4.3129
		} 
	},
	{
		name: 'London',
		coordinates: {
			lat: 51.5072,
			lon:  0.1276
		}
	},
]

window.onload=function() {
	cities.forEach(function(city, index) {
		var request = openWeatherMapUrl + "?" + "appid=" + openWeatherMapUrlApiKey + "&lon=" + city.coordinates.lon + "&lat=" + city.coordinates.lat;

		fetch(request)
			.then(function(response) {
				if(!response.ok) throw Error(response.statustext);
				return response.json();
			})
			.then(function(response) {
				console.log(response.weather[0].icon, city);
				var icon = response.weather[0].icon;
				var description = response.weather[0].description;
				var temperature = Math.floor(response.main.temp - 273.25);
				var imageSrc = 'http://openweathermap.org/img/w/' + icon + '.png';
				document.getElementById(`city${index+1}-img`).setAttribute('src', imageSrc);
				document.getElementById(`description${index+1}`).innerHTML=description;
				document.getElementById(`temperature${index+1}`).innerHTML=temperature + " °C";
			})
			.catch(function (error) {
				console.log('There was an error:', error);
			});
	});
};
