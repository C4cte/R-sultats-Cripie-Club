const players = {
  1: ["Grégory", "SQUAAD-4", "Frisk", "darkdust", "SezTy", "darkness", "Bendospeed9", "penguin", "444_ma..li", "Nevender", "Draco", "Mimo", "pointriangle", "quentin59279", "yoyo1406_", "Fyn", "Rip_toi", "cripie333", "champion93300"],
  2: ["1", "2", "3",],
};


const days = [1, 2, 3];

const results = {
  // Jour 1
  1: {
    "Grégory": { "SQUAAD-4": "1-0", "darkdust": "0-1", "darkness": "0-1", "cripie333": "1-0" },
    "SQUAAD-4": { "Grégory": "0-1" },
    "Frisk": { "darkdust": "1-0" },
    "darkdust": { "Grégory": "1-0", "Frisk": "0-1", "SezTy": "1-0", "darkness": "1-0", "penguin": "1-0", "Nevender": "1-0", "pointriangle": "0-1", "Rip_toi": "0-1" },
    "SezTy": { "darkdust": "0-1", "darkness": "0-1", "penguin": "1-0", "444_ma..li": "1-0", "Nevender": "0-1", "pointriangle": "0-1", "Rip_toi": "1-0", "cripie333": "1-0" },
    "darkness": { "Grégory": "1-0", "darkdust": "0-1", "SezTy": "1-0", "Nevender": "1-0", "Draco": "1-0", "pointriangle": "0-1", "Fyn": "1-0" },
    "Bendospeed9": { "penguin": "0-1", "pointriangle": "0-1", "quentin59279": "0-1" },
    "penguin": { "darkdust": "0-1", "SezTy": "0-1", "Bendospeed9": "1-0", "444_ma..li": "1-0", "Nevender": "0-1", "pointriangle": "1-0", "Fyn": "1-0" },
    "444_ma..li": { "SezTy": "0-1", "penguin": "0-1", "Nevender": "0-1", "pointriangle": "0-1", "yoyo1406_": "N/A", "Rip_toi": "1-0" },
    "Nevender": { "darkdust": "0-1", "SezTy": "1-0", "darkness": "0-1", "penguin": "0-1", "444_ma..li": "0-1", "Draco": "0-1", "pointriangle": "0-1", "cripie333": "1-0", "champion93300": "1-0" },
    "Draco": { "darkness": "0-1", "Nevender": "0-1", "Mimo": "1-0", "pointriangle": "1-0", "Fyn": "1-0" },
    "Mimo": { "Draco": "0-1" },
    "pointriangle": { "darkdust": "0-1", "SezTy": "0-1", "darkness": "0-1", "Bendospeed9": "1-0", "penguin": "0-1", "444_ma..li": "1-0", "Nevender": "1-0", "Draco": "1-0", "quentin59279": "1-0" },
    "quentin59279": { "Bendospeed9": "1-0", "pointriangle": "0-1" },
    "yoyo1406_": { "444_ma..li": "N/A" },
    "Fyn": { "darkness": "0-1", "penguin": "0-1", "Draco": "0-1" },
    "Rip_toi": { "darkdust": "0-1", "SezTy": "0-1", "444_ma..li": "0-1", "cripie333": "½-½" },
    "cripie333": { "Grégory": "0-1", "SezTy": "0-1", "Nevender": "0-1", "Rip_toi": "½-½" },
    "champion93300": { "Nevender": "0-1" }
  },
  // Jour 2
  2: {
  },
  // Jour 3
  3: {
  }
};

// Fonction pour créer un tableau avec les résultats
function createTable(day) {
  const table = document.createElement("table");
  const dayPlayers = players[day] || [];

  // Entête
  const header = document.createElement("tr");
  header.appendChild(document.createElement("th"));
  dayPlayers.forEach(p => {
    const th = document.createElement("th");
    th.textContent = p;
    header.appendChild(th);
  });
  table.appendChild(header);

  // Corps
  dayPlayers.forEach(rowPlayer => {
    const row = document.createElement("tr");
    const th = document.createElement("th");
    th.textContent = rowPlayer;
    row.appendChild(th);

    dayPlayers.forEach(colPlayer => {
      const td = document.createElement("td");
      if (rowPlayer === colPlayer) {
        td.textContent = "—";
        td.classList.add("diagonal");
      } else {
        const result = results[day]?.[colPlayer]?.[rowPlayer] || "";
        td.textContent = result;
        switch (result) {
          case "1-0":      td.classList.add("result-win");  break;
          case "0-1":      td.classList.add("result-loss"); break;
          case "½-½":      td.classList.add("result-draw"); break;
          case "N/A":      td.classList.add("result-na");   break;
        }
      }
      row.appendChild(td);
    });

    table.appendChild(row);
  });

  return table;
}

document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector("#day1 .table-container");
  container.appendChild(createTable(1));
});

function showDay(day) {
  document.querySelectorAll(".tab-button").forEach((btn, index) => {
    btn.classList.toggle("active", index === day - 1);
  });

  document.querySelectorAll(".tab-content").forEach((tab, index) => {
    tab.classList.toggle("active", index === day - 1);
  });

  const container = document.querySelector(`#day${day} .table-container`);
  if (!container.querySelector("table")) {
    container.appendChild(createTable(day));
  }
}
