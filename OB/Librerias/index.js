import axios from "axios"
axios.get('https://pokeapi.co/api/v2/pokemon/quilava')
  .then(function (response) {
    // handle success
    console.log("response");
    console.log(response.data.sprites.versions);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
 