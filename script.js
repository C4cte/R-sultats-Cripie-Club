// Données fictives 10 joueurs, 3 jours, résultats (exemple double entrée)
// Chaque jour a un tableau { joueur1: { joueur2: résultat, ... }, ... }

const players = [
  "Alice", "Bob", "Charlie", "David", "Emma", "Fiona", "George", "Hugo", "Isabelle", "Jack"
];

// Résultats par jour, exemple : "W" = victoire, "L" = défaite, "D" = nul, "" = pas joué
const resultsByDay = {
  "Jour 1": {
    "Alice":    { "Bob": "W",   "Charlie": "D", "David": "L",   "Emma": "",   "Fiona": "W", "George": "L", "Hugo": "",   "Isabelle": "W", "Jack": "D" },
    "Bob":      { "Alice": "L", "Charlie": "W", "David": "D",   "Emma": "W",  "Fiona": "",  "George": "L", "Hugo": "D", "Isabelle": "",  "Jack": "W" },
    "Charlie":  { "Alice": "D", "Bob": "L",     "David": "W",   "Emma": "L",  "Fiona": "W", "George": "",  "Hugo": "W", "Isabelle": "L", "Jack": ""  },
    "David":    { "Alice": "W", "Bob": "D",     "Charlie": "L", "Emma": "W",  "Fiona": "L", "George": "W", "Hugo": "L", "Isabelle": "",  "Jack": "D" },
    "Emma":     { "Alice": "",  "Bob": "L",     "Charlie": "W", "David": "L", "Fiona": "D", "George": "W", "Hugo": "",  "Isabelle": "L", "Jack": "W" },
    "Fiona":    { "Alice": "L", "Bob": "",      "Charlie": "L", "David": "W", "Emma": "D", "George": "L", "Hugo": "W", "Isabelle": "D", "Jack": "W" },
    "George":   { "Alice": "W", "Bob": "W",     "Charlie": "",  "David": "L", "Emma": "L", "Fiona": "W", "Hugo": "D", "Isabelle": "W", "Jack": ""  },
    "Hugo":     { "Alice": "",  "Bob": "D",     "Charlie": "L", "David": "W", "Emma": "",  "Fiona": "L", "George": "W", "Isabelle": "D", "Jack": "L" },
    "Isabelle": { "Alice": "L", "Bob": "",      "Charlie": "W", "David": "",  "Emma": "W", "Fiona": "D", "George": "L", "Hugo": "W", "Jack": "D" },
    "Jack":     { "Alice": "D", "Bob": "L",     "Charlie": "",  "David": "W", "Emma": "L", "Fiona": "L", "George": "",  "Hugo": "W", "Isabelle": "W" }
  },
  "Jour 2": {
    // Données fictives, tu peux personnaliser
    "Alice":    { "Bob": "D", "Charlie": "W", "David": "L", "Emma": "W", "Fiona": "D", "George": "L", "Hugo": "W", "Isabelle": "L", "Jack": "W" },
    "Bob":      { "Alice": "D", "Charlie": "L", "David": "W", "Emma": "L", "Fiona": "W", "George": "D", "Hugo": "L", "Isabelle": "W", "Jack": "D" },
    "Charlie":  { "Alice": "L", "Bob": "W", "David": "D", "Emma": "W", "Fiona": "L", "George": "W", "Hugo": "D", "Isabelle": "L", "Jack": "W" },
    "David":    { "Alice": "W", "Bob": "L", "Charlie": "D", "Emma": "L", "Fiona": "W", "George": "L", "Hugo": "W", "Isabelle": "D", "Jack": "L" },
    "Emma":     { "Alice": "L", "Bob": "W", "Charlie": "L", "David": "W", "Fiona": "D", "George": "W", "Hugo": "L", "Isabelle": "W", "Jack": "D" },
    "Fiona":    { "Alice": "D", "Bob": "L", "Charlie": "W", "David": "L", "Emma": "D", "George": "W", "Hugo": "L", "Isabelle": "W", "Jack": "L" },
    "George":   { "Alice": "W", "Bob": "D", "Charlie": "L", "David": "W", "Emma": "L", "Fiona": "L", "Hugo": "D", "Isabelle": "W", "Jack": "D" },
    "Hugo":     { "Alice": "L", "Bob": "W", "Charlie": "D", "David": "L", "Emma": "W", "Fiona": "D", "George": "L", "Isabelle": "W", "Jack": "L" },
    "Isabelle": { "Alice": "W", "Bob": "L", "Charlie": "W", "David": "D", "Emma": "L", "Fiona": "L", "George": "D", "Hugo": "W", "Jack": "D" },
    "Jack":     { "Alice": "L", "Bob": "D", "Charlie": "L", "David": "W", "Emma": "W", "Fiona": "L", "George": "D", "Hugo": "W", "Isabelle": "L" }
  },
  "Jour 3": {
    // Encore des données fictives
    "Alice":    { "Bob": "W", "Charlie": "L", "David": "D", "Emma": "L", "Fiona": "W", "George": "D", "Hugo": "L", "Isabelle": "W", "Jack": "D" },
    "Bob":      { "Alice": "L", "Charlie": "W", "David": "D", "Emma": "W", "Fiona": "L", "George": "D", "Hugo": "W", "Isabelle": "L", "Jack": "W" },
    "Charlie":  { "Alice": "W", "Bob": "L", "David": "W", "Emma": "D", "Fiona": "L", "George": "W", "Hugo": "L", "Isabelle": "D", "Jack": "L" },
    "David":    { "Alice": "D", "Bob": "D", "Charlie": "L", "Emma": "W", "Fiona": "L", "George": "W", "Hugo": "D", "Isabelle": "L", "Jack": "W" },
    "Emma":     { "Alice": "W", "Bob": "L", "Charlie": "D", "David": "L", "Fiona": "W", "George": "D", "Hugo": "W", "Isabelle": "L", "Jack": "D" },
    "Fiona":    { "Alice": "L", "Bob": "W", "Charlie": "L", "David": "W", "Emma": "L", "George": "D", "Hugo": "W", "Isabelle": "D", "Jack": "L" },
    "George":   { "Alice": "D", "Bob": "W", "Charlie": "L", "David": "L", "Emma": "W", "Fiona": "W", "Hugo": "D", "Isabelle": "L", "Jack": "W" },
    "Hugo":     { "Alice": "W", "Bob": "L", "Charlie": "W", "David": "D", "Emma": "L", "Fiona": "L", "George": "W", "Isabelle": "D", "Jack": "L" },
    "Isabelle": { "Alice": "L", "Bob": "W", "Charlie": "W", "David": "W", "Emma": "D", "Fiona": "L", "George": "L", "Hugo": "W", "Jack": "D" },
    "Jack":     { "Alice": "W", "Bob": "L", "Charlie": "D", "David": "L", "Emma": "W", "Fiona": "W", "George": "L", "Hugo": "W", "Isabelle": "L" }
  }
};

const daysList = document.getElementById('days-list');
const table = document.getElementById('score-table');

let currentDay = "Jour 1";

// Fonction pour générer le tableau selon le jour
function generateTable(day) {
  const results = resultsByDay[day];
  if (!results) return;

  // Animation : ajout classe slide-out à l'ancienne table
  table.classList.add('slide-out-left-active');

  // Après la transition, on met à jour le tableau et on lance la slide-in
  setTimeout(() => {
    table.innerHTML = "";

    // Création entête ligne 1 (vide puis noms joueurs)
    const thead = document.createElement('thead');
    const headerRow = document.createElement('tr');

    const emptyTh = document.createElement('th');
    emptyTh.textContent = "";
    headerRow.appendChild(emptyTh);

    players.forEach(player => {
      const th = document.createElement('th');
      th.textContent = player;
      headerRow.appendChild(th);
    });
    thead.appendChild(headerRow);
    table.appendChild(thead);

    // Création du corps du tableau
    const tbody = document.createElement('tbody');

    players.forEach(playerRow => {
      const tr = document.createElement('tr');
      const th = document.createElement('th');
      th.textContent = playerRow;
      tr.appendChild(th);

      players.forEach(playerCol => {
        const td = document.createElement('td');

        if (playerRow === playerCol) {
          td.textContent = "-"; // pas de partie contre soi-même
          td.style.color = "#444";
        } else {
          const result = results[playerRow]?.[playerCol];
          td.textContent = result || "";
        }
        tr.appendChild(td);
      });

      tbody.appendChild(tr);
    });

    table.appendChild(tbody);

    // Animation slide in from right
    table.classList.remove('slide-out-left-active');
    table.classList.add('slide-in-right');

    // Forcer reflow pour que l'animation fonctionne
    void table.offsetWidth;

    table.classList.add('slide-in-right-active');

    // Nettoyer classes animation après fin (0.5s)
    setTimeout(() => {
      table.classList.remove('slide-in-right');
      table.classList.remove('slide-in-right-active');
    }, 600);

  }, 500); // durée slide-out = 500ms
}

// Gestion du clic sur un jour
daysList.addEventListener('click', e => {
  if (e.target.tagName === 'LI' && e.target.dataset.day !== currentDay) {
    // Mise à jour visuelle du menu
    daysList.querySelectorAll('li').forEach(li => li.classList.remove('active'));
    e.target.classList.add('active');

    // Changement du jour affiché
    currentDay = e.target.dataset.day;
    generateTable(currentDay);
  }
});

// Initialisation
generateTable(currentDay);
