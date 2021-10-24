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
    image_url: "https://solarsystem.nasa.gov/system/resources/detail_files/439_MercurySubtleColors1200w.jpg"
  },
  {
    name: "Venus",
    altnames: "",
    temp: "462°C",
    planet: "True",
    moons: [],
    gravity: "8.87g",
    distance: "108.82 million",
    image_url: "https://solarsystem.nasa.gov/system/resources/detail_files/2524_PIA23791.jpg"
  },
  {
    name: "Earth",
    altnames: "Gaia, Terra, Tellus",
    temp: "-88 to 58°C",
    planet: "True",
    moons: [
      {
        name: "The Moon"
      }
    ],
    gravity: "9.8g",
    distance: "148.79 million",
    image_url: "https://solarsystem.nasa.gov/system/resources/detail_files/581_PIA18033_1200w.jpg"
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
    image_url: "https://solarsystem.nasa.gov/system/resources/detail_files/683_6453_mars-globe-valles-marineris-enhanced-full2.jpg"
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
    image_url: "https://solarsystem.nasa.gov/system/resources/detail_files/803_192016main_100907_11_detail.jpg"
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
    image_url: "https://solarsystem.nasa.gov/system/resources/detail_files/663_PIA01364.jpg"
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
    image_url: "https://solarsystem.nasa.gov/system/resources/detail_files/603_PIA00143.jpg"
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
    image_url: "https://solarsystem.nasa.gov/system/resources/detail_files/611_PIA01492.jpg"
  }
]);

db.moons.insertMany([
  {
  name: "The Moon",
  temp: "-173 to 427°C",
  planet: "Earth",
  gravity: "3.7g",
  distance: "46.925 million",
  image_url: "https://solarsystem.nasa.gov/system/resources/detail_files/843_christmas2015fullmoon.jpg"
  },
  {
    name: "Phobos",
    temp: "-173 to 427°C",
    planet: "Mars",
    gravity: "3.7g",
    distance: "46.925 million",
    image_url: "https://solarsystem.nasa.gov/system/resources/detail_files/843_christmas2015fullmoon.jpg"
    }

]);
