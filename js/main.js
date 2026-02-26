document.addEventListener("DOMContentLoaded", () => {
  const grid = document.getElementById("planet-grid");
  const modal = document.getElementById("planet-modal");
  const closeBtn = document.querySelector(".close");

  planets.forEach((planet, index) => {
    const card = document.createElement("div");
    card.classList.add("planet-card");
    card.style.animation = `fadeIn 0.5s ease-out ${index * 0.1}s forwards`;
    card.style.opacity = "0";

    card.innerHTML = `
      <img src="${planet.image}" alt="${planet.name}">
      <h3>${planet.name}</h3>
    `;

    // Add click handler to open modal
    card.addEventListener("click", () => {
      openPlanetModal(planet);
    });

    grid.appendChild(card);
  });

  // Function to open modal and populate data
  function openPlanetModal(planet) {
    document.getElementById("modal-planet-image").src = planet.image;
    document.getElementById("modal-planet-image").alt = planet.name;
    document.getElementById("modal-planet-subtitle").textContent = planet.symbol + " " + planet.name + " - " + planet.subtitle;
    document.getElementById("modal-planet-description").textContent = planet.description;
    
    // Stats
    document.getElementById("stat-diameter").textContent = planet.stats.diameter;
    document.getElementById("stat-gravity").textContent = planet.stats.gravity;
    document.getElementById("stat-distance").textContent = planet.stats.distance;
    document.getElementById("stat-temperature").textContent = planet.stats.temperature;
    
    // Characteristics
    document.getElementById("char-type").textContent = planet.characteristics.type;
    document.getElementById("char-moons").textContent = planet.characteristics.moons;
    document.getElementById("char-orbital").textContent = planet.characteristics.orbitalPeriod;
    document.getElementById("char-rotation").textContent = planet.characteristics.rotationPeriod;
    document.getElementById("char-atmosphere").textContent = planet.characteristics.atmosphere;
    document.getElementById("char-feature").textContent = planet.characteristics.notableFeature;

    // Show modal
    modal.style.display = "block";
    document.body.style.overflow = "hidden";
  }

  // Close modal when clicking X
  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
    document.body.style.overflow = "auto";
  });

  // Close modal when clicking outside of modal-content
  window.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.style.display = "none";
      document.body.style.overflow = "auto";
    }
  });

  // Add animation styles
  const style = document.createElement('style');
  style.textContent = `
    @keyframes fadeIn {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
  `;
  document.head.appendChild(style);
});