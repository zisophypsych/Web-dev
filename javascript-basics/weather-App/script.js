const butt = document.getElementById("butt");
const input = document.getElementById("city-name");
const details = document.getElementById("details");
const example = document.getElementById('example');
const city = document.getElementById('city');
const cityTemp = document.getElementById('city-temp');
const cityCondition = document.getElementById('city-condition');
const cityLocalTime = document.getElementById('city-localtime');

async function getData(cityName) {
    const promise = await fetch(
        `http://api.weatherapi.com/v1/current.json?key=0cae0609e1e143b9b7f90348242611&q=${cityName}&aqi=no`
    )
    return await promise.json();
};

butt.addEventListener('click', async () => {
    value = input.value;
    const result = await getData(value);
    example.remove();
    city.innerText = `${result.location.name}, ${result.location.region}, ${result.location.country}`
    cityTemp.innerText = `Temperature: ${result.current.temp_c} degree celcius`
    cityCondition.innerText = `Weather Condition: ${result.current.condition.text}`
    cityLocalTime.innerText = `Local Time: ${result.location.localtime}`

    console.log(result);

});