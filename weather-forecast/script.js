//Elementos
let card = document.querySelector(".card");
let title = document.querySelector("#title");
let temp = document.querySelector("#temp");
let description = document.querySelector("#description");
let temp_max = document.querySelector("#temp_max");
let temp_min = document.querySelector("#temp_min");
let humidity = document.querySelector("#humidity");
let speed = document.querySelector("#speed");
let card_input = document.querySelector("#card-input");
let icon_search = document.querySelector("#icon-search");

//Armazenamento
let city_name = "";

//eventos

card_input.addEventListener('keydown', (press_search) => {
    if (press_search.key === 'Enter') {
        search_temp();
    }
});

icon_search.addEventListener('click', (click_search) => {
    search_temp();
});

function search_temp() {
    if (card_input.value != "") {
        city_name = card_input.value
        API(URL)
        card_input.value = "";
    }
}

//Chamando a Api
async function API() {
    const API_KEY = "cc799acc54ba454ffc607df0924b0b0c";
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${API_KEY}&units=metric&lang=pt_br`
    const resp = await fetch(URL);
    if (resp.status === 200) {
        const obj = await resp.json();
        console.log(obj);
        show_container(obj);
    }
    console.log(resp)
}

//Atualizando o container
function show_container(obj) {
    title.innerHTML = `${obj.name}, ${obj.sys.country}`;
    temp.innerHTML = `${(obj.main.temp).toFixed(1)} <sup> C°</sup>`;
    description.innerHTML = `${obj.weather[0].description}`;
    temp_max.innerHTML = `${(obj.main.temp_max).toFixed(1)}<sup> C°</sup>`;
    temp_min.innerHTML = `${(obj.main.temp_min).toFixed(1)}<sup> C°</sup>`;
    humidity.innerHTML = `${obj.main.humidity} %`;
    speed.innerHTML = `${obj.wind.speed} km/h`;
}