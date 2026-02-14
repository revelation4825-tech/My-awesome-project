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
        console.log(response)
        currentTemperature.innerHTML = Math.round(response.data.temperature.current);
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
