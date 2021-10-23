use solar_system
db.dropDatabase()

db.planets.insertMany([
    {
    name: "Mercury",
    planet: "True",
    moons: null,
    density: 5.4291,
    gravity: 3.7,
    image_url: "https://solarsystem.nasa.gov/resources/439/mercurys-subtle-colors/?category=planets_mercury"
  },
  {
    name: "Venus",
    planet: "True",
    moons: null,
    density: 5.243,
    gravity: 8.87,
    image_url: "https://solarsystem.nasa.gov/resources/2524/newly-processed-views-of-venus-from-mariner-10/?category=planets_venus"
  },
  {
    name: "Earth",
    planet: "True",
    moons: [
      {
        name: "The Moon",
        image_url: "https://solarsystem.nasa.gov/resources/843/rare-full-moon-on-christmas-day/?category=moons_earths-moon"
      }
    ],
    density: 5.5136,
    gravity: 9.8,
    image_url: "https://solarsystem.nasa.gov/resources/581/earth-by-suomi-npp/?category=planets_earth"
  },
  {
    name: "Mars",
    planet: "True",
    moons: [
      {
        name: "Phobos"
      },
      {
        name: "Deimos"
      }
    ],
    density: 3.9341,
    gravity: 3.71,
    image_url: "https://solarsystem.nasa.gov/resources/683/valles-marineris-the-grand-canyon-of-mars/?category=planets_mars"
  },
  {
    name: "Jupiter",
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
    density: 1.3262,
    gravity: 24.79,
    image_url: "https://solarsystem.nasa.gov/resources/803/jupiter-and-io/?category=planets_jupiter"
  },
  {
    name: "Saturn",
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
    density: 0.6871,
    gravity: 10.44,
    image_url: "https://solarsystem.nasa.gov/resources/663/saturn-taken-from-voyager-2/?category=planets_saturn"
  },
  {
    name: "Uranus",
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
    density: 1.27,
    gravity: 8.87,
    image_url: "https://solarsystem.nasa.gov/resources/603/uranus-final-image/?category=planets_uranus"
  },
  {
    name: "Neptune",
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
    density: 1.638,
    gravity: 11.15,
    image_url: "https://solarsystem.nasa.gov/resources/611/neptune-full-disk-view/?category=planets_neptune"
  }
]);
