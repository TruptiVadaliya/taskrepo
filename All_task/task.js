async function fetchCountriesStates() {
  try {
    // Making the GET request to the API
    const response = await fetch('https://countriesnow.space/api/v0.1/countries/states');


    // Checking if the response is successful
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    // Parsing the JSON data from the response
    const data = await response.json();

    // Log the fetched data
    console.log("data", data)
    // console.log(data.data);

    // Optionally: You can process the data here, for example:
    // Iterate over countries and print their states
    data.data.forEach(country => {
      console.log(`Country: ${country.name}`);
      console.log('States:', country.states);
    });
  } catch (error) {
    // Handling any errors
    console.error('Error fetching data:', error);
  }
}

fetchCountriesStates()