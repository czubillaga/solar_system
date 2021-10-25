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
    trivia1: "Mercury does not have any moons or rings",
    trivia2: "Mercury is the smallest planet",
    trivia3: "Mercury is the closest planet to the Sun",
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
    trivia1: "A day on Venus is longer than a year",
    trivia2: "Venus is hotter than Mercury despite being further away from the Sun",
    trivia3: "Unlike the other planets in our solar system, Venus spins clockwise on its axis",
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
    trivia1: "Earth is Mostly Iron, Oxygen and Silicon",
    trivia2: "70% of the Earth's Surface is Covered in Water",
    trivia3: "The Earth's Atmosphere Extends to a Distance of 10,000 km",
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
    trivia1: "Mars is named after the Roman god of war",
    trivia2: "One year on Mars is 687 days long. That’s 1.9 Earth years",
    trivia3: "Mars has very weak gravity. Gravity on Mars is 37% less than on Earth. This means that on Mars you could jump 3x higher than on Earth",
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
    trivia1: "The ancient Babylonians were the first to record their sightings of Jupiter",
    trivia2: "Jupiter has the shortest day of all the planets",
    trivia3: "Jupiter orbits the Sun once every 11.8 Earth years",
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
    trivia1: "Saturn is the most distant planet that can be seen with the naked eye",
    trivia2: "Saturn was known to the ancients, including the Babylonians and Far Eastern observers",
    trivia3: "Saturn is the flattest planet",
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
    trivia1: "Uranus is the coldest planet in the Solar System",
    trivia2: "Uranus orbits the Sun on its side",
    trivia3: "Uranus is the second-least dense planet",
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
    trivia1: "Neptune is the smallest gas giant",
    trivia2: "Neptune is named after the Roman god of the sea",
    trivia3: "A year on Neptune lasts 165 Earth years",
    image_url: "https://solarsystem.nasa.gov/system/resources/detail_files/611_PIA01492.jpg"
  }
]);

db.moons.insertMany([
  {
  name: "The Moon",
  planet: "Earth",
  trivia: "There is water on the Moon!",
  image_url: "https://solarsystem.nasa.gov/system/resources/detail_files/843_christmas2015fullmoon.jpg"
  },
  {
    name: "Phobos",
    planet: "Mars",
    trivia: "Phobos moves across the sky of Mars twice a day",
    image_url: "https://solarsystem.nasa.gov/system/content_pages/main_images/428_phobosincolor_pia10369.jpg"
  },
  {
    name: "Deimos",
    planet: "Mars",
    trivia: "It takes Deimos 30.3 hours to orbit around Mars",
    image_url: "https://solarsystem.nasa.gov/system/content_pages/main_images/433_PIA11826.jpg"
  },
  {
    name: "Io",
    planet: "Jupiter",
    trivia: "most volcanically active body in the solar system, spewing out sulphur as high as 300 km in the air",
    image_url: "https://solarsystem.nasa.gov/system/resources/detail_files/810_PIA01667.jpg"
  },
  {
    name: "Europa",
    planet: "Jupiter",
    trivia: "Europa's surface temperature at the equator never rises above minus minus 160 degrees Celsius",
    image_url: "https://solarsystem.nasa.gov/system/resources/detail_files/204_EuropaStunningSurface1200w.jpg"
  },
  {
    name: "Ganymede",
    planet: "Jupiter",
    trivia: "It takes Ganymede about seven Earth-days to orbit Jupiter",
    image_url: "https://solarsystem.nasa.gov/system/content_pages/main_images/445_Ganymede-Juno-800x600.jpg"
  },
  {
    name: "Callisto",
    planet: "Jupiter",
    trivia: "Callisto is tidally locked, so the same side always faces Jupiter",
    image_url: "https://solarsystem.nasa.gov/system/resources/detail_files/811_PIA03456.jpg"
  },
  {
    name: "Titan",
    planet: "Saturn",
    trivia: "Only moon in the solar system with a dense atmosphere, and it's the only world besides Earth that has standing bodies of liquid, including rivers, lakes and seas, on its surface",
    image_url: "https://solarsystem.nasa.gov/system/resources/detail_files/867_PIA08235.jpg"
  },
  {
    name: "Rhea",
    planet: "Saturn",
    trivia: "It is less than a third the radius of Saturn's largest moon, Titan.",
    image_url: "https://solarsystem.nasa.gov/system/content_pages/main_images/805_PIA12648.jpg"
  },
  {
    name: "Dione",
    planet: "Saturn",
    trivia: "Dione orbits around Saturn once every 2.7 Earth-days, at a distance of 234,000 miles, approximately the same distance from Earth to its moon.",
    image_url: "https://solarsystem.nasa.gov/system/content_pages/main_images/603_PIA21349.jpg"
  },
  {
    name: "Tethys",
    planet: "Saturn",
    trivia: "Its mass is 6.17×1020 kg, 0.000103 Earth mass, which is less than 1% of the Moon. The density of Tethys is 0.98 g/cm³, indicating that it is composed almost entirely of water-ice",
    image_url: "https://solarsystem.nasa.gov/system/content_pages/main_images/896_PIA08400_768.jpg"
  },
  {
    name: "Mimas",
    planet: "Saturn",
    trivia: "With a giant crater covering a significant fraction of its surface, Saturn's gray moon Mimas resembles a real-life Death Star from the Star Wars movies. Along with its Pac-Man-shaped thermal imaging, the icy satellite provides some fascinating images.",
    image_url: "https://solarsystem.nasa.gov/system/content_pages/main_images/1108_PIA12739_modest.jpg"
  },
  {
    name: "Miranda",
    planet: "Uranus",
    trivia: "Miranda orbits Uranus every 33.6 hours, and it has the closest orbit to Uranus of all the five major moons",
    image_url: "https://solarsystem.nasa.gov/system/content_pages/main_images/259_PIA00141.jpg"
  },
  {
    name: "Ariel",
    planet: "Uranus",
    trivia: "Ariel is the smallest of all 19 known spherical moons in our Solar System",
    image_url: "https://solarsystem.nasa.gov/system/content_pages/main_images/220_PIA00041.jpg"
  },
  {
    name: "Umbriel",
    planet: "Uranus",
    trivia: "It reflects only 16 percent of the light that strikes its surface, a feature similar to the highland areas of Earth's Moon. Other Uranian moons are much brighter. The process by which Umbriel's ancient cratered surface was darkened remains a mystery",
    image_url: "https://solarsystem.nasa.gov/system/content_pages/main_images/300_PIA00040_umbriel.jpg"
  },
  {
    name: "Titania",
    planet: "Uranus",
    trivia: "Titania is the seventeenth farthest moon from Uranus out of all 27 known moons. Titania is the eighth largest moon in our Solar System. The largest chasma on Titania is Messina Chasmata and has a diameter of 927 miles",
    image_url: "https://solarsystem.nasa.gov/system/content_pages/main_images/292_PIA00036.jpg"
  },
  {
    name: "Oberon",
    planet: "Uranus",
    trivia: "Oberon is the ninth most massive moon in our Solar System. Oberon is the eighteenth farthest moon from Uranus out of all 27 known moons. The largest crater on Oberon is Hamlet with a diameter of 128 miles",
    image_url: "https://solarsystem.nasa.gov/system/content_pages/main_images/262_Oberon_732.jpg"
  },
  {
    name: "Triton",
    planet: "Neptune",
    trivia: "It is unusual because it is the only large moon in our solar system that orbits in the opposite direction of its planet's rotation―a retrograde orbit. Scientists think Triton is a Kuiper Belt Object captured by Neptune's gravity millions of years ago",
    image_url: "https://solarsystem.nasa.gov/system/content_pages/main_images/529_PIA00317_modest.jpg"
  },
  {
    name: "Hippocamp",
    planet: "Neptune",
    trivia: "Hippocamp has a diameter of approximately 20 miles. This makes it the smallest moon that orbits the planet Neptune. It thought that Hippocamp might actually be a piece of another Neptune moon called Proteus. Astronomers think that a collision with a comet billions of years ago may have caused this",
    image_url: "https://solarsystem.nasa.gov/system/content_pages/main_images/532_Hippocamp_1600.jpg"
  },
  {
    name: "Proteus",
    planet: "Neptune",
    trivia: "The moon has an odd box-like shape and if it had just a little more mass it would be able to transform into a sphere. Proteus orbits Neptune about every 27 hours",
    image_url: "https://solarsystem.nasa.gov/system/content_pages/main_images/520_Proteus732X520.jpg"
  },
  {
    name: "Galatea",
    planet: "Neptune",
    trivia: "Small and irregularly-shaped like Despina, Galatea orbits in the same direction as Neptune and is relatively close to the gas giant's equatorial plane",
    image_url: "https://solarsystem.nasa.gov/system/content_pages/main_images/477_galatea_main.jpg"
  },
  {
    name: "Despina",
    planet: "Neptune",
    trivia: "",
    image_url: "https://solarsystem.nasa.gov/system/content_pages/main_images/474_despina_main.jpg"
  }

]);

db.asteroids.insertMany([
  {
    name: "101955 Bennu",
    discovered: 1999,
    impact: "1 in 2700",
    year: "438 Earth Days",
    image_url: "https://solarsystem.nasa.gov/system/resources/detail_files/921_683_bennu_carousel_5.jpg"
  },
  {
    name: "10199 Chariklo",
    discovered: 1997,
    impact: null,
    year: "63 Earth Years",
    image_url: "https://solarsystem.nasa.gov/system/content_pages/main_images/411_10199_chariklo_main.jpg"
  },
  {
    name: "16 Psyche",
    discovered: 1852,
    impact: null,
    year: "5 Earth Years",
    image_url: "https://solarsystem.nasa.gov/system/content_pages/main_images/416_16_psyche_main.jpg"
  },
  {
    name: "2019 OK",
    discovered: 2019,
    impact: null,
    year: "993 Earth Days",
    image_url: "https://cdn.images.express.co.uk/img/dynamic/151/590x/asteroid-close-approach-2019-OK-near-miss-2019-ok-space-news-1166276.webp?r=1565989375217"
  },
  {
    name: "25143 Itokawa",
    discovered: 1998,
    impact: null,
    year: "993 Earth Days",
    image_url: "https://solarsystem.nasa.gov/system/content_pages/main_images/425_itokawa_main.jpg"
  },
  {
    name: "Apophis",
    discovered: 2004,
    impact: "Maybe in 2029, maybe in 100 years",
    year: "0.9 Earth Years",
    image_url: "https://ichef.bbci.co.uk/news/976/cpsprodpb/A161/production/_117731314_nasaasteroidgraphic.png"
  },
  {
    name: "Didymos",
    discovered: 1996,
    impact: "Maybe in 2029, maybe in 100 years",
    year: "2.11 Earth Years",
    image_url: "https://www.esa.int/var/esa/storage/images/esa_multimedia/images/2018/06/didymos_asteroid_system/17534590-1-eng-GB/Didymos_asteroid_system_pillars.png"
  }

]);

db.all.insertMany([
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
  },
  {
  name: "The Moon",
  planet: "Earth",
  gravity: "3.7g",
  distance: "46.925 million",
  image_url: "https://solarsystem.nasa.gov/system/resources/detail_files/843_christmas2015fullmoon.jpg"
  },
  {
    name: "Phobos",
    planet: "Mars",
    gravity: "3.7g",
    distance: "46.925 million",
    image_url: "https://solarsystem.nasa.gov/system/content_pages/main_images/428_phobosincolor_pia10369.jpg"
  },
  {
    name: "Deimos",
    planet: "Mars",
    gravity: "3.7g",
    distance: "46.925 million",
    image_url: "https://solarsystem.nasa.gov/system/content_pages/main_images/433_PIA11826.jpg"
  },
  {
    name: "Io",
    planet: "Jupiter",
    gravity: "3.7g",
    distance: "46.925 million",
    image_url: "https://solarsystem.nasa.gov/system/resources/detail_files/810_PIA01667.jpg"
  },
  {
    name: "Europa",
    planet: "Jupiter",
    gravity: "3.7g",
    distance: "46.925 million",
    image_url: "https://solarsystem.nasa.gov/system/resources/detail_files/204_EuropaStunningSurface1200w.jpg"
  },
  {
    name: "Ganymede",
    planet: "Jupiter",
    gravity: "3.7g",
    distance: "46.925 million",
    image_url: "https://solarsystem.nasa.gov/system/content_pages/main_images/445_Ganymede-Juno-800x600.jpg"
  },
  {
    name: "Callisto",
    planet: "Jupiter",
    gravity: "3.7g",
    distance: "46.925 million",
    image_url: "https://solarsystem.nasa.gov/system/resources/detail_files/811_PIA03456.jpg"
  },
  {
    name: "Titan",
    planet: "Saturn",
    gravity: "3.7g",
    distance: "46.925 million",
    image_url: "https://solarsystem.nasa.gov/system/resources/detail_files/867_PIA08235.jpg"
  },
  {
    name: "Rhea",
    planet: "Saturn",
    gravity: "3.7g",
    distance: "46.925 million",
    image_url: "https://solarsystem.nasa.gov/system/content_pages/main_images/805_PIA12648.jpg"
  },
  {
    name: "Dione",
    planet: "Saturn",
    gravity: "3.7g",
    distance: "46.925 million",
    image_url: "https://solarsystem.nasa.gov/system/content_pages/main_images/603_PIA21349.jpg"
  },
  {
    name: "Tethys",
    planet: "Saturn",
    gravity: "3.7g",
    distance: "46.925 million",
    image_url: "https://solarsystem.nasa.gov/system/content_pages/main_images/896_PIA08400_768.jpg"
  },
  {
    name: "Mimas",
    planet: "Saturn",
    gravity: "3.7g",
    distance: "46.925 million",
    image_url: "https://solarsystem.nasa.gov/system/content_pages/main_images/1108_PIA12739_modest.jpg"
  },
  {
    name: "Miranda",
    planet: "Uranus",
    gravity: "3.7g",
    distance: "46.925 million",
    image_url: "https://solarsystem.nasa.gov/system/content_pages/main_images/259_PIA00141.jpg"
  },
  {
    name: "Ariel",
    planet: "Uranus",
    gravity: "3.7g",
    distance: "46.925 million",
    image_url: "https://solarsystem.nasa.gov/system/content_pages/main_images/220_PIA00041.jpg"
  },
  {
    name: "Umbriel",
    planet: "Uranus",
    gravity: "3.7g",
    distance: "46.925 million",
    image_url: "https://solarsystem.nasa.gov/system/content_pages/main_images/300_PIA00040_umbriel.jpg"
  },
  {
    name: "Titania",
    planet: "Uranus",
    gravity: "3.7g",
    distance: "46.925 million",
    image_url: "https://solarsystem.nasa.gov/system/content_pages/main_images/292_PIA00036.jpg"
  },
  {
    name: "Oberon",
    planet: "Uranus",
    gravity: "3.7g",
    distance: "46.925 million",
    image_url: "https://solarsystem.nasa.gov/system/content_pages/main_images/262_Oberon_732.jpg"
  },
  {
    name: "Triton",
    planet: "Neptune",
    gravity: "3.7g",
    distance: "46.925 million",
    image_url: "https://solarsystem.nasa.gov/system/content_pages/main_images/529_PIA00317_modest.jpg"
  },
  {
    name: "Hippocamp",
    planet: "Neptune",
    gravity: "3.7g",
    distance: "46.925 million",
    image_url: "https://solarsystem.nasa.gov/system/content_pages/main_images/532_Hippocamp_1600.jpg"
  },
  {
    name: "Proteus",
    planet: "Neptune",
    gravity: "3.7g",
    distance: "46.925 million",
    image_url: "https://solarsystem.nasa.gov/system/content_pages/main_images/520_Proteus732X520.jpg"
  },
  {
    name: "Galatea",
    planet: "Neptune",
    gravity: "3.7g",
    distance: "46.925 million",
    image_url: "https://solarsystem.nasa.gov/system/content_pages/main_images/477_galatea_main.jpg"
  },
  {
    name: "Despina",
    planet: "Neptune",
    gravity: "3.7g",
    distance: "46.925 million",
    image_url: "https://solarsystem.nasa.gov/system/content_pages/main_images/474_despina_main.jpg"
  },
  {
    name: "101955 Bennu",
    discovered: 1999,
    impact: "1 in 2700",
    year: "438 Earth Days",
    image_url: "https://solarsystem.nasa.gov/system/resources/detail_files/921_683_bennu_carousel_5.jpg"
  },
  {
    name: "10199 Chariklo",
    discovered: 1997,
    impact: null,
    year: "63 Earth Years",
    image_url: "https://solarsystem.nasa.gov/system/content_pages/main_images/411_10199_chariklo_main.jpg"
  },
  {
    name: "16 Psyche",
    discovered: 1852,
    impact: null,
    year: "5 Earth Years",
    image_url: "https://solarsystem.nasa.gov/system/content_pages/main_images/416_16_psyche_main.jpg"
  },
  {
    name: "2019 OK",
    discovered: 2019,
    impact: null,
    year: "993 Earth Days",
    image_url: "https://cdn.images.express.co.uk/img/dynamic/151/590x/asteroid-close-approach-2019-OK-near-miss-2019-ok-space-news-1166276.webp?r=1565989375217"
  },
  {
    name: "25143 Itokawa",
    discovered: 1998,
    impact: null,
    year: "993 Earth Days",
    image_url: "https://solarsystem.nasa.gov/system/content_pages/main_images/425_itokawa_main.jpg"
  },
  {
    name: "Apophis",
    discovered: 2004,
    impact: "Maybe in 2029, maybe in 100 years",
    year: "0.9 Earth Years",
    image_url: "https://ichef.bbci.co.uk/news/976/cpsprodpb/A161/production/_117731314_nasaasteroidgraphic.png"
  },
  {
    name: "Didymos",
    discovered: 1996,
    impact: "Maybe in 2029, maybe in 100 years",
    year: "2.11 Earth Years",
    image_url: "https://www.esa.int/var/esa/storage/images/esa_multimedia/images/2018/06/didymos_asteroid_system/17534590-1-eng-GB/Didymos_asteroid_system_pillars.png"
  },
  {
    name: "101955 Bennu",
    discovered: 1999,
    impact: "1 in 2700",
    year: "438 Earth Days",
    image_url: "https://solarsystem.nasa.gov/system/resources/detail_files/921_683_bennu_carousel_5.jpg"
  },
  {
    name: "10199 Chariklo",
    discovered: 1997,
    impact: null,
    year: "63 Earth Years",
    image_url: "https://solarsystem.nasa.gov/system/content_pages/main_images/411_10199_chariklo_main.jpg"
  },
  {
    name: "16 Psyche",
    discovered: 1852,
    impact: null,
    year: "5 Earth Years",
    image_url: "https://solarsystem.nasa.gov/system/content_pages/main_images/416_16_psyche_main.jpg"
  },
  {
    name: "2019 OK",
    discovered: 2019,
    impact: null,
    year: "993 Earth Days",
    image_url: "https://cdn.images.express.co.uk/img/dynamic/151/590x/asteroid-close-approach-2019-OK-near-miss-2019-ok-space-news-1166276.webp?r=1565989375217"
  },
  {
    name: "25143 Itokawa",
    discovered: 1998,
    impact: null,
    year: "993 Earth Days",
    image_url: "https://solarsystem.nasa.gov/system/content_pages/main_images/425_itokawa_main.jpg"
  },
  {
    name: "Apophis",
    discovered: 2004,
    impact: "Maybe in 2029, maybe in 100 years",
    year: "0.9 Earth Years",
    image_url: "https://ichef.bbci.co.uk/news/976/cpsprodpb/A161/production/_117731314_nasaasteroidgraphic.png"
  },
  {
    name: "Didymos",
    discovered: 1996,
    impact: "Maybe in 2029, maybe in 100 years",
    year: "2.11 Earth Years",
    image_url: "https://www.esa.int/var/esa/storage/images/esa_multimedia/images/2018/06/didymos_asteroid_system/17534590-1-eng-GB/Didymos_asteroid_system_pillars.png"
  }
]);