/*Opdracht
Je gaat een birthday reminder applicatie maken zoals hieronder op de afbeelding wordt getoond.

Maak een json-bestand met zes verschillende objecten. Elk object heeft een naam, leeftijd en afbeelding van een persoon.
Toon alle data uit je json-bestand op het scherm (zie afbeelding)
Het getal ‘5’ uit de titel is niet handmatig ingevoerd, maar je telt de aantal objecten uit je json-bestand en dat toon je op het scherm
Als je op de ‘clear all’ knop klikt moet alle data van het scherm verwijderd worden (niet uit het json-bestand verwijderen)
Style het zoals op het voorbeeld wordt weergeven (kleur mag afwijken)*/ 


const reminderContainer = document.getElementById('reminders');
const clearButton = document.getElementById('clear-all');
const headerTitle = document.querySelector('.header h1');

function displayBirthdays(people) {
  let out = '';

  for (let person of people) {
    out += `
      <div class="reminder">
        <img src="${person.image}" alt="${person.name}">
        <div class="info">
          <h2>${person.name}</h2>
          <p>${person.age} years</p>
        </div>
      </div>
    `;
  }

  reminderContainer.innerHTML = out;

  headerTitle.innerText = `${people.length} Birthdays Today`;
}


function clearAll() {
  reminderContainer.innerHTML = '';
  headerTitle.innerText = '0 Birthdays Today';
}

clearButton.addEventListener('click', clearAll);

fetch('birthday.json')
.then((response) =>  {
  if (!response.ok) {
    throw new Error('Niet gevonden');
  }
  return response.json();
}
)
.then((data) => {

  displayBirthdays(data);
}
)
.catch((error) => {
  console.error('Er gaat iets mis', error);
  reminderContainer.innerHTML = '<p>Er gaat iets mis bij laden.</p>';
  headerTitle.innerText = '0 verjaardagen vandaag';
});

reminderContainer.innerHTML = '<p>data wordt geladen.</p>';