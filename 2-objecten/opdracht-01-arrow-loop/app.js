// Je gaat even oefenen met het gebruiken van een arrow function en de for/of loop. 

// Maak een array genaamd 'marvels' en plaats hier 4 Marvel films in.
let marvels = ['iron man 1', 'iron man 2', 'iron man 3', 'the avengers']
// Maak een arrow function genaamd 'addMarvel'
let addMarvel = () => {
    marvels.push('black panther')
}
// In je functie voeg je een nieuwe Marvel film toe zonder dit zelf in de bovenstaande array toe te voegen
addMarvel();

// Roep de functie op (het klopt dat je nog niets ziet)
for (let marvel of marvels) {
    console.log(marvel += marvels +   1);
}
// Loop met een for/of loop door de array en toon alle items in de array in je console
