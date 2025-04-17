const characterList = document.getElementById("character-list"); // Contenedor de personajes
const searchInput = document.getElementById("search"); // Campo de búsqueda

let characters = []; // Array para guardar los personajes

// Trae los personajes desde la API
async function fetchCharacters() {
  try {
    const response = await fetch("https://rickandmortyapi.com/api/character/");
    const data = await response.json();
    characters = data.results; // Guarda los personajes en el array
    displayCharacters(characters); // Muestra todos los personajes
  } catch (error) {
    characterList.innerHTML = "<p>Error al cargar los personajes.</p>";
    console.error("Error al obtener personajes:", error);
  }
}

// Muestra los personajes en el DOM
function displayCharacters(personajes) {
  characterList.innerHTML = ""; // Limpia el contenedor
  personajes.forEach((personaje) => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <img src="${personaje.image}" alt="${personaje.name}" />
      <h3>${personaje.name}</h3>
      <p>${personaje.species}</p>
    `;

    characterList.appendChild(card); // Agrega la tarjeta al contenedor
  });
}

// Filtra los personajes según el texto del input
function searchCharacters(event) {
  const query = event.target.value.toLowerCase();  
  const filteredCharacters = characters.filter(personaje =>
    personaje.name.toLowerCase().includes(query)
  );
  displayCharacters(filteredCharacters); // Muestra los filtrados
}

fetchCharacters(); // Carga inicial de personajes

searchInput.addEventListener("input", searchCharacters); // Evento de búsqueda en tiempo real
