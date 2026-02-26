const planets = [
  {
    name: "Mercury",
    symbol: "☿",
    image: "../assets/mercury.jpg",
    file: "planets/mercury.html",
    subtitle: "The Swift Messenger",
    description: "Mercury is the smallest planet in our Solar System and the closest to the Sun. Named after the Roman messenger god due to its swift movement across the sky, Mercury is a rocky world with extreme temperatures and a thin atmosphere. Despite being closest to the Sun, it's not the hottest planet in our Solar System!",
    stats: {
      diameter: "4,879 km",
      gravity: "3.7 m/s²",
      distance: "57.9 Million km",
      temperature: "-173 to 427°C"
    },
    characteristics: {
      type: "Terrestrial Planet",
      moons: "0",
      orbitalPeriod: "88 Earth days",
      rotationPeriod: "59 Earth days",
      atmosphere: "Virtually none",
      notableFeature: "Extreme temperature swings"
    }
  },
  {
    name: "Venus",
    symbol: "♀",
    image: "../assets/venus.jpg",
    file: "planets/venus.html",
    subtitle: "The Morning Star",
    description: "Venus is the second planet from the Sun and Earth's twin in size, but with a hellish environment. Named after the Roman goddess of love and beauty, it's the hottest planet in our Solar System with a thick, toxic atmosphere of carbon dioxide. Venus rotates backwards (retrograde rotation) and takes longer to rotate than to orbit the Sun!",
    stats: {
      diameter: "12,104 km",
      gravity: "8.87 m/s²",
      distance: "108.2 Million km",
      temperature: "462°C"
    },
    characteristics: {
      type: "Terrestrial Planet",
      moons: "0",
      orbitalPeriod: "225 Earth days",
      rotationPeriod: "243 Earth days (Retrograde)",
      atmosphere: "Thick CO₂",
      notableFeature: "Hottest planet in solar system"
    }
  },
  {
    name: "Earth",
    symbol: "⊕",
    image: "../assets/earth.jpg",
    file: "planets/earth.html",
    subtitle: "Our Blue Planet",
    description: "Earth is our home and the only known planet to harbor life. The third planet from the Sun, it has the perfect conditions for life with liquid water, a protective atmosphere, and moderate temperatures. Earth's one natural satellite, the Moon, helps stabilize our planet's climate and rotation. Approximately 71% of Earth's surface is covered by water.",
    stats: {
      diameter: "12,742 km",
      gravity: "9.8 m/s²",
      distance: "149.6 Million km (1 AU)",
      temperature: "15°C"
    },
    characteristics: {
      type: "Terrestrial Planet",
      moons: "1 (The Moon)",
      orbitalPeriod: "365.25 Earth days",
      rotationPeriod: "24 hours",
      atmosphere: "Nitrogen & Oxygen",
      notableFeature: "Only planet with life"
    }
  },
  {
    name: "Mars",
    symbol: "♂",
    image: "../assets/mars.jpg",
    file: "planets/mars.html",
    subtitle: "The Red Planet",
    description: "Mars is the fourth planet from the Sun and a primary target for future human exploration. Named after the Roman god of war due to its blood-red appearance, Mars is a cold desert world with the largest volcano and deepest canyon in the Solar System. Evidence suggests that liquid water once flowed on Mars' surface, making it a fascinating candidate in the search for past microbial life.",
    stats: {
      diameter: "6,779 km",
      gravity: "3.71 m/s²",
      distance: "227.9 Million km",
      temperature: "-63°C"
    },
    characteristics: {
      type: "Terrestrial Planet",
      moons: "2 (Phobos & Deimos)",
      orbitalPeriod: "687 Earth days",
      rotationPeriod: "24.6 hours",
      atmosphere: "Thin CO₂",
      notableFeature: "Olympus Mons (largest volcano)"
    }
  },
  {
    name: "Jupiter",
    symbol: "♃",
    image: "../assets/jupiter.jpg",
    file: "planets/jupiter.html",
    subtitle: "The Gas Giant",
    description: "Jupiter is the largest planet in our Solar System, a massive gas giant over 11 times wider than Earth. Named after the king of the Roman gods, Jupiter's most famous feature is the Great Red Spot, a storm larger than Earth that has been raging for at least 350 years. Jupiter has a faint ring system and at least 79 known moons, including the four large Galilean moons.",
    stats: {
      diameter: "139,820 km",
      gravity: "24.79 m/s²",
      distance: "778.5 Million km",
      temperature: "-110°C"
    },
    characteristics: {
      type: "Gas Giant",
      moons: "79+",
      orbitalPeriod: "12 Earth years",
      rotationPeriod: "10 hours",
      composition: "Hydrogen & Helium",
      notableFeature: "Great Red Spot storm"
    }
  },
  {
    name: "Saturn",
    symbol: "♄",
    image: "../assets/saturn.jpg",
    file: "planets/saturn.html",
    subtitle: "The Ringed Planet",
    description: "Saturn is famous for its spectacular ring system, making it one of the most beautiful planets in our Solar System. The second-largest planet, Saturn is another gas giant composed primarily of hydrogen and helium. Its rings are made of countless particles of ice and rock, ranging from dust-sized to house-sized chunks. Saturn has 82 confirmed moons, with Titan being the largest and possessing a thick atmosphere.",
    stats: {
      diameter: "116,460 km",
      gravity: "10.44 m/s²",
      distance: "1,434 Million km",
      temperature: "-140°C"
    },
    characteristics: {
      type: "Gas Giant",
      moons: "82",
      orbitalPeriod: "29 Earth years",
      rotationPeriod: "10.7 hours",
      composition: "Hydrogen & Helium",
      notableFeature: "Magnificent ring system"
    }
  },
  {
    name: "Uranus",
    symbol: "♅",
    image: "../assets/uranus.jpg",
    file: "planets/uranus.html",
    subtitle: "The Ice Giant",
    description: "Uranus is an ice giant that rotates on its side compared to other planets, likely due to a collision early in its formation. This unique tilt means Uranus experiences extreme seasons lasting 21 Earth years each. Named after the Greek god of the sky, Uranus has a faint ring system and 27 known moons. Its atmosphere is composed of hydrogen, helium, and methane, which gives it its distinctive blue-green color.",
    stats: {
      diameter: "50,724 km",
      gravity: "8.87 m/s²",
      distance: "2,871 Million km",
      temperature: "-224°C"
    },
    characteristics: {
      type: "Ice Giant",
      moons: "27",
      orbitalPeriod: "84 Earth years",
      rotationPeriod: "17 hours",
      composition: "Water, Methane, Ammonia",
      notableFeature: "Rotates on its side"
    }
  },
  {
    name: "Neptune",
    symbol: "♆",
    image: "../assets/neptune.jpg",
    file: "planets/neptune.html",
    subtitle: "The Windy Giant",
    description: "Neptune is the eighth and most distant planet from the Sun, an ice giant with the strongest winds in the Solar System, reaching speeds up to 2,100 km/h. Named after the Roman god of the sea, Neptune has a striking deep blue color due to methane in its atmosphere. It was the first planet to be discovered through mathematical predictions rather than direct observation, discovered in 1846. Neptune has 14 known moons, with Triton being the largest.",
    stats: {
      diameter: "49,244 km",
      gravity: "11.15 m/s²",
      distance: "4,495 Million km",
      temperature: "-200°C"
    },
    characteristics: {
      type: "Ice Giant",
      moons: "14",
      orbitalPeriod: "165 Earth years",
      rotationPeriod: "16 hours",
      composition: "Water, Methane, Ammonia",
      notableFeature: "Strongest winds in solar system"
    }
  }
];