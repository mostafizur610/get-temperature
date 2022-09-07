// do not show api key on your js file
const API_KEY = '00d368868dcf847a680bdb4f54986f8f';

const loadTemperature = city => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayTemperature(data))
}

const displayTemperature = data => {
    const temperature = document.getElementById('temperature');
    // console.log(data.main.temp);
    temperature.innerText = data.main.temp;

}


loadTemperature('Dhaka')