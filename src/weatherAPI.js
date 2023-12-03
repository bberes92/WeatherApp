const API_KEY = "Rzcclv6w15XqRyAXmjh76WJEkt17nuw5";

export function AutoComplete() {
  const baseURL =
    "http://dataservice.accuweather.com/locations/v1/cities/autocomplete?";
  const searchInput = document.querySelector("#city-input").value;

  fetch(`${baseURL}apikey=${API_KEY}&q=${searchInput}`)
    .then((res) => res.json())
    .then((results) => {
      if (results != null) {
        let autocompleteSuggestions = [];

        results.forEach((result) => {
          autocompleteSuggestions.push(result["LocalizedName"]);
        });

        const autoCompleteDataList = document.querySelector(
          "#city-name-autocomplete-list"
        );

        autoCompleteDataList.replaceChildren();
        autocompleteSuggestions.forEach((suggestion) => {
          let option = document.createElement("option");
          option.value = suggestion;
          autoCompleteDataList.appendChild(option);
        });
      }
    })
    .catch((error) => console.error(error));
}

export async function getCityLocationKey(cityName) {
  const baseURL =
    "http://dataservice.accuweather.com/locations/v1/cities/search?";

  const response = await fetch(
    `${baseURL}apikey=${API_KEY}&q=${cityName}&offset=1`
  );
  const data = await response.json();
  const cityLocKey = data[0]["Key"];
  return cityLocKey;
}

export async function getCurrentWeather(locationKey) {
  const baseURL = "http://dataservice.accuweather.com/currentconditions/v1/";

  const response = await fetch(
    `${baseURL}${locationKey}?apikey=${API_KEY}&details=true`
  );

  const data = await response.json();
  return data;
}

export async function getFiveDaysWeather(locationKey) {
  const baseURL = "http://dataservice.accuweather.com/forecasts/v1/daily/5day/";

  const response = await fetch(
    `${baseURL}${locationKey}?apikey=${API_KEY}&details=true&metric=true`
  );

  const data = await response.json();
  return data;
}
