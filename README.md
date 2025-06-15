# Tunch Angular19 Pokedex
## Presentation
https://docs.google.com/presentation/d/1-P3JcWNF77E43qAuQC5CbRW0Fwm7d4sgAo2iMFFv74E/edit?usp=sharing

## Local setup
1. Install the latest version of [Node.js](https://nodejs.org/en/download/)
2. Install dependencies
```bash
  npm install
```
3. Run your code
```bash
  ng serve
```
4. Once the server is running, navigate to [http://localhost:4321](http://localhost:4321). The 
   application will automatically reload whenever you modify any of the source files.


## API documentation
https://pokeapi.co/docs/v2#pokemon

## Assignments
1. Create a resource in the [pokemon.service.ts](src/app/services/pokemon.service.ts) file that will fetch a list of 
   pokemon from the API, and update the [pokedex.component.ts](src/app/smart-components/pokedex/pokedex.component.ts) file to use this resource and extract its data.
2. Use the `selectedPokemon` signal to fetch the details of that pokemon, and put it in the `selectedPokemonDetail` signal.
3. All requests have an intentional delay, display a loading state when fetching the list of pokemon
4. When the reload button is clicked, the list of pokemon should be fetched again
5. Display the previously selected pokemon in the details section, if it exists
6. [Try at home] Add pagination
7. [Try at home] Display a pokemon's weaknesses, using the `/type` api

