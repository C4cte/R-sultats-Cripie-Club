const players = [
  "Grégory", "SQUAAD-4", "Frisk", "darkdust", "SezTy", "darkness", "Bendospeed9", "penguin", "444_ma..li", "Nevender", "Draco", "Mimo", "pointriangle", "quentin59279", "yoyo1406_", "Fyn", "Rip_toi", "cripie333", "champion93300"
];

const days = [1, 2, 3];

const results = {
  // Jour 1
  1: {
    "Grégory": { "SQUAAD-4": "1-0", "darkdust": "0-1", "darkness": "0-1", "cripie333": "1-0" },
    "SQUAAD-4": { "Grégory": "0-1" },
    "Frisk": { "darkdust": "1-0" },
    "darkdust": { "Grégory": "1-0", "Frisk": "0-1", "SezTy": "1-0", "darkness": "1-0", "penguin": "1-0", "Nevender": "1-0", "pointriangle": "0-1", "Rip_toi": "0-1" },
    "SezTy": { "darkdust": "0-1", "darkness": "0-1", "penguin": "1-0", "444_ma..li": "1-0", "Nevender": "0-1", "pointriangle": "0-1", "Rip_toi": "1-0", "cripie333": "1-0" },
    "darkness": { "Grégory": "1-0", "darkdust": "0-1", "SezTy": "1-0", "Nevender": "1-0", "Draco": "1-0", "pointriangle": "0-1", "Fyn": "1-0"  },
    "Bendospeed9": { "penguin": "0-1", "pointriangle": "0-1", "quentin59279": "0-1" },
    "penguin": { "darkdust": "0-1", "SezTy": "0-1", "Bendospeed9": "1-0", "444_ma..li": "1-0", "Nevender": "0-1", "pointriangle": "1-0", "Fyn": "1-0" },
    "444_ma..li": { "penguin": "0-1", "pointriangle": "0-1", "quentin59279": "0-1" },
    "Nevender": { "penguin": "0-1", "pointriangle": "0-1", "quentin59279": "0-1" },
    "Draco": { "penguin": "0-1", "pointriangle": "0-1", "quentin59279": "0-1" },
    "Mimo": { "penguin": "0-1", "pointriangle": "0-1", "quentin59279": "0-1" },
    "pointriangle": { "penguin": "0-1", "pointriangle": "0-1", "quentin59279": "0-1" },
    "quentin59279": { "penguin": "0-1", "pointriangle": "0-1", "quentin59279": "0-1" },
    "yoyo1406_": { "penguin": "0-1", "pointriangle": "0-1", "quentin59279": "0-1" },
    "Fyn": { "penguin": "0-1", "pointriangle": "0-1", "quentin59279": "0-1" },
    "Rip_toi": { "penguin": "0-1", "pointriangle": "0-1", "quentin59279": "0-1" },
    "cripie333": { "penguin": "0-1", "pointriangle": "0-1", "quentin59279": "0-1" },
    "champion93300": { "penguin": "0-1", "pointriangle": "0-1", "quentin59279": "0-1" }
  },
  // Jour 2
  2: {
    "Alice": { "Bob": "1-0", "Charlie": "1-0", "Diana": "0-1", "Eve": "½–½" },
    "Bob": { "Alice": "0-1", "Charlie": "1-0", "Diana": "1-0", "Eve": "½–½" },
    "Charlie": { "Alice": "0-1", "Bob": "0-1", "Diana": "1-0", "Eve": "1-0" },
    "Diana": { "Alice": "1-0", "Bob": "0-1", "Charlie": "0-1", "Eve": "0-1" },
    "Eve": { "Alice": "½–½", "Bob": "½–½", "Charlie": "0-1", "Diana": "1-0" }
  },
  // Jour 3
  3: {
    "Alice": { "Bob": "½–½", "Charlie": "1-0", "Diana": "1-0", "Eve": "0-1" },
    "Bob": { "Alice": "½–½", "Charlie": "1-0", "Diana": "1-0", "Eve": "0-1" },
    "Charlie": { "Alice": "0-1", "Bob": "0-1", "Diana": "1-0", "Eve": "1-0" },
    "Diana": { "Alice": "0-1", "Bob": "0-1", "Charlie": "0-1", "Eve": "1-0" },
    "Eve": { "Alice": "1-0", "Bob": "1-0", "Charlie": "0-1", "Diana": "0-1" }
  }
};

// Fonction pour créer un tableau avec les résultats
function createTable(day) {
  const table = document.createElement("table");

  const header = document.createElement("tr");
  header.appendChild(document.createElement("th")); // coin vide
  players.forEach(p => {
    const th = document.createElement("th");
    th.textContent = p;
    header.appendChild(th);
  });
  table.appendChild(header);

  players.forEach(rowPlayer => {
    const row = document.createElement("tr");
    const th = document.createElement("th");
    th.textContent = rowPlayer;
    row.appendChild(th);

    players.forEach(colPlayer => {
      const td = document.createElement("td");
      if (rowPlayer === colPlayer) {
        td.textContent = "—";
        td.classList.add("diagonal");
      } else {
        td.textContent = results[day]?.[colPlayer]?.[rowPlayer] || "";
      }
      row.appendChild(td);
    });

    table.appendChild(row);
  });

  return table;
}

function showDay(dayNumber) {
  document.querySelectorAll(".tab-content").forEach(tab => tab.classList.remove("active"));
  document.querySelectorAll(".tab-button").forEach(btn => btn.classList.remove("active"));

  document.querySelector(`#day${dayNumber}`).classList.add("active");
  document.querySelectorAll(".tab-button")[dayNumber - 1].classList.add("active");
}

days.forEach(day => {
  const container = document.querySelector(`#day${day} .table-container`);
  container.appendChild(createTable(day));
});
