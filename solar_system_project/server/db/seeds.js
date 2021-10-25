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