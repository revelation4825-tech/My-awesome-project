    function search(event) {
        event.preventDefault();
        let searchInputElement = document.querySelector("#search-input");
        let cityElement = document.querySelector("#current-city");
        cityElement.innerHTML = searchInputElement.value;
      }
      let searchForm = document.querySelector("#search-form");
        searchForm.addEventListener("submit", search);

    let apiKey = "203adfb889341eafafcd3o792bteb01b";

    function displayTemperature(response) {
        let currentTemperature = document.querySelector("#current-temperature-value");
        let humidityElement = document.querySelector("#humidity");
        let windSpeedElement = document.querySelector("#wind-speed");
        let timeElement = document.querySelector("#time");
        let date = new Date(response.data.time * 1000);

          console.log(response.data)

        currentTemperature.innerHTML = Math.round(response.data.temperature.current);
        currentDescription.innerHTML = response.data.condition.description;
        humidityElement.innerHTML = `${response.data.temperature.humidity}%`;
        windSpeedElement.innerHTML = `${response.data.wind.speed}km/h`;
        timeElement.innerHTML = formatDate(date);
        }

    function formatDate(date) {
        let minutes = date.getMinutes();
        let hours = date.getHours();
        let days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ];
        if (minutes < 10) {
        minutes = `0${minutes}`;
      }

      if (hours < 10) {
        hours = `0${hours}`;
      }
      
      let day = days[date.getDay()];

      return `${day} ${hours}:${minutes}`
    }

    function searchCity(event) {
        event.preventDefault();

        let cityInput = document.querySelector("#search-input");
        let city = cityInput.value.trim();

        let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

          axios.get(apiUrl).then(displayTemperature);
        }

        let changeCity = document.querySelector("#search-form");
        changeCity.addEventListener("submit", searchCity);
