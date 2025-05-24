// Données fictives 10 joueurs, 3 jours, résultats (exemple double entrée)

const players = [
  "Alice", "Bob", "Charlie", "David", "Emma", "Fiona", "George", "Hugo", "Isabelle", "Jack"
];

// Résultats par jour
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
    "David":    { "Alice": "W", "Bob": "L", "Charlie": "D", "Emma": "L", "Fiona": "W", "George": "L", "Hugo": "W", "
