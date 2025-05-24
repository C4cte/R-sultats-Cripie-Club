const players = [
  "Alice", "Bob", "Charlie", "Diana", "Eve",
  "Frank", "Grace", "Hugo", "Ivy", "Jack"
];

const days = [1, 2, 3];

function createTable() {
  const size = players.length;
  const table = document.createElement("table");
  const header = document.createElement("tr");
  header.appendChild(document.createElement("th")); // coin vide
  players.forEach(p => {
    const th = document.createElement("th");
    th.textContent = p;
    header.appendChild(th);
  });
  table.appendChild(header);

  for (let i = 0; i < size; i++) {
    const row = document.createElement("tr");
    const th = document.createElement("th");
    th.textContent = players[i];
    row.appendChild(th);

    for (let j = 0; j < size; j++) {
      const td = document.createElement("td");
      td.textContent = i === j ? "—" : ""; // vide ou trait sur diagonale
      row.appendChild(td);
    }

    table.appendChild(row);
  }

  return table;
}

function showDay(dayNumber) {
  document.querySelectorAll(".tab-content").forEach(tab => tab.classList.remove("active"));
  document.querySelectorAll(".tab-button").forEach(btn => btn.classList.remove("active"));

  document.querySelector(`#day${dayNumber}`).classList.add("active");
  document.querySelectorAll(".tab-button")[dayNumber - 1].classList.add("active");
}

// Générer les tableaux pour chaque jour
days.forEach(day => {
  const container = document.querySelector(`#day${day} .table-container`);
  container.appendChild(createTable());
});
