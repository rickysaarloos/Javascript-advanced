// Stap 1

// Maak een persoon object waar je allemaal eigenschappen van een persoon in kunt opslaan en tonen op het scherm.

// Het object moet de volgende properties bevatten:
const person = {
    name: "ricky",
    age: 17,
    birthDate: "2007-12-19",
    gender: "male",  
    isAlive: true,
    hobbies: ["birdwatching", "gaming", "rugby", "golfing"],
    rename: function(newName) {
          this.name = newName;
          return    this.name;
    },
    changeIsAlive: function() {
          this.isAlive = !this.isAlive;
          return this.isAlive;
    },
    addHobby: function(newHobby) {
          this.hobbies.push(newHobby);
          return this.hobbies;
    }         
};
   
    console.log(person.rename("joey"));
    console.log(person.changeIsAlive(false));
    console.log(person.addHobby("discozwemmen"));   
  
//     Naam: de naam van de persoon (string)
//     Leeftijd: de leeftijd van de persoon (number)
//     Geboortedatum: de geboortedatum van de persoon (string)
//     Geslacht: het geslacht van de persoon (string)
//     In leven: geef aan of de persoon nog leeft (boolean)
//     Hobby’s: 4 hobby’s van de persoon (array)
document.getElementById("output").innerHTML =
    `<p>Name: ${person.name}</p>
    <p>Age: ${person.age}</p>
    <p>Birth Date: ${person.birthDate}</p>
     <p>gender: ${person.gender} </p>
    <p>Is Alive: ${person.isAlive}</p>
    <p>Hobbies: ${person.hobbies.join(", ")}</p>`;
// Toon elke property op het scherm door het in een p-tag te plaatsen. Hiervoor gebruik je de div-tag van de vorige opdracht.
// Stap 2:

    
// Het object moet ook de volgende methods bevatten:
 
//     Een method (functie) die de naam moet veranderen. De naam moet je via de parameters kunnen meegeven.
//     Een method (functie) die het ‘in leven’ property kan veranderen.
//     Een method (functie) die een extra hobby toevoegt aan de array. Een hobby moet je via de parameters kunnen meegeven.

// Toon de wijzigingen op het scherm.
console.log(person)
// Gebruik geen arrow function in een object!