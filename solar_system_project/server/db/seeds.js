use solar_system
db.dropDatabase()

db.planets.insertMany([
    {
    name: "Mercury",
    altnames: "",
    temp: "-173 to 427°C",
    planet: "True",
    moons: [],
    gravity: "3.7g",
    distance: "46.925 million",
    image_url: "https://solarsystem.nasa.gov/resources/439/mercurys-subtle-colors/?category=planets_mercury"
  },
  {
    name: "Venus",
    altnames: "",
    temp: "462°C",
    planet: "True",
    moons: [],
    gravity: "8.87g",
    distance: "108.82 million",
    image_url: "https://solarsystem.nasa.gov/resources/2524/newly-processed-views-of-venus-from-mariner-10/?category=planets_venus"
  },
  {
    name: "Earth",
    altnames: "Gaia, Terra, Tellus",
    temp: "-88 to 58°C",
    planet: "True",
    moons: [
      {
        name: "The Moon",
        image_url: "https://solarsystem.nasa.gov/resources/843/rare-full-moon-on-christmas-day/?category=moons_earths-moon"
      }
    ],
    gravity: "9.8g",
    distance: "148.79 million",
    image_url: "https://solarsystem.nasa.gov/resources/581/earth-by-suomi-npp/?category=planets_earth"
  },
  {
    name: "Mars",
    altnames: "The Red Planet",
    temp: "-87 to -5°C",
    planet: "True",
    moons: [
      {
        name: "Phobos"
      },
      {
        name: "Deimos"
      }
    ],
    gravity: "3.71g",
    distance: "243.02 million",
    image_url: "https://solarsystem.nasa.gov/resources/683/valles-marineris-the-grand-canyon-of-mars/?category=planets_mars"
  },
  {
    name: "Jupiter",
    altnames: "Jove, The Gas Giant",
    temp: "-108°C",
    planet: "True",
    moons: [
      {
        name: "Io"
      },
      {
        name: "Europa"
      },
      {
        name: "Ganymede"
      },
      {
        name: "Callisto"
      }
    ],
    gravity: "24.79g",
    distance: "746.6 million",
    image_url: "https://solarsystem.nasa.gov/resources/803/jupiter-and-io/?category=planets_jupiter"
  },
  {
    name: "Saturn",
    altnames: "The Ringed Planet",
    temp: "-139°C",
    planet: "True",
    moons: [
    {
      name: "Titan"
    },
    {
      name: "Rhea"
    },
    {
      name: "Dione"
    },
    {
      name: "Tethys"
    },
    {
      name: "Mimas"
    }
  ],
    gravity: "10.44g",
    distance: "1.4836 billion",
    image_url: "https://solarsystem.nasa.gov/resources/663/saturn-taken-from-voyager-2/?category=planets_saturn"
  },
  {
    name: "Uranus",
    altnames: "The Bulls-Eye Planet",
    temp: "-197°C",
    planet: "True",
    moons: [
      {
        name: "Miranda"
      },
      {
        name: "Ariel"
      },
      {
        name: "Umbriel"
      },
      {
        name: "Titania"
      },
      {
        name: "Oberon"
      }
    ],
    gravity: "8.87g",
    distance: "2.9513 billion",
    image_url: "https://solarsystem.nasa.gov/resources/603/uranus-final-image/?category=planets_uranus"
  },
  {
    name: "Neptune",
    altnames: "The Planet exterior to Uranus",
    temp: "-201°C",
    planet: "True",
    moons: [
      {
        name: "Triton"
      },
      {
        name: "Hippocamp"
      },
      {
        name: "Proteus"
      },
      {
        name: "Galatea"
      },
      {
        name: "Despina"
      }
    ],
    gravity: "11.15g",
    distance: "4.475 billion",
    image_url: "https://solarsystem.nasa.gov/resources/611/neptune-full-disk-view/?category=planets_neptune"
  }
]);
