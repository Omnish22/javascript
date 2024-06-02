
let btnSearch = document.querySelector('#btn-search')
let cityInput = document.querySelector('#search-input')
let temp = document.querySelector('#temp-data')
let humid = document.querySelector('#humid')
let speed = document.querySelector('#speed')
let cityElement = document.querySelector('#city h1')
let weatherImage = document.querySelector('#img-weather img')

const APIKEY = '5e5dd4c5a0c8c10a849a04eadb8c01ad'

function getCoordinates(cityName){
    const limit = 1;
    const URL = `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=${limit}&appid=${APIKEY}`

    fetch(URL)
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        const _lat = data[0].lat;
        const _lon = data[0].lon;
        let coordinates = {
            lat:_lat,
            lon:_lon
        }
        getWeatherInfo(coordinates, cityName);
    })
    .catch(function(error) {
        // Handle any errors here
        console.error('Error fetching coordinates:', error);
        throw error; // Propagate the error further if needed
    });
}


function getWeatherInfo(coordinates,cityName){
    const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${APIKEY}&units=metric`

    fetch(URL)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data)
        let weather = data.weather[0].main.toLowerCase()
        console.log(weather)
        updateElement(temp, data.main.temp)
        updateElement(humid, data.main.humidity)
        updateElement(speed, data.wind.speed)
        updateElement(cityElement, cityName)
        weatherImage.src=`images/${weather}.png`
    })
}


function updateElement(element, text){
    element.textContent = text;
}

btnSearch.addEventListener('click',function(e){
    let city = cityInput.value;
    getCoordinates(city)
})