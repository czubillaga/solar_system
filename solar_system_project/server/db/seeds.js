use solar_system
db.dropDatabase()

db.planets.insertMany([
    {
    name: "Mercury",
    planet: "True",
    moons: null,
    density: 5.4291,
    gravity: 3.7
  },
  {
    name: "Venus",
    planet: "True",
    moons: null,
    density: 5.243,
    gravity: 8.87
  },
  {
    name: "Earth",
    planet: "True",
    moons: [
      {
        moon: "The Moon"
      }
    ],
    density: 5.5136,
    gravity: 9.8
  },
  {
    name: "Mars",
    planet: "True",
    moons: [
      {
        moon: "Phobos"
      },
      {
        moon: "Deimos"
      }
    ],
    density: 3.9341,
    gravity: 3.71
  },
  {
    name: "Jupiter",
    planet: "True",
    moons: [
      {
        moon: "Io"
      },
      {
        moon: "Europa"
      },
      {
        moon: "Ganymede"
      },
      {
        moon: "Callisto"
      }
    ],
    density: 1.3262,
    gravity: 24.79
  },
  {
    name: "Saturn",
    planet: "True",
    moons: [
    {
      moon: "Titan"
    },
    {
      moon: "Rhea"
    },
    {
      moon: "Dione"
    },
    {
      moon: "Tethys"
    },
    {
      moon: "Mimas"
    }
  ],
    density: 0.6871,
    gravity: 10.44 
  },
  {
    name: "Uranus",
    planet: "True",
    moons: [
      {
        moon: "Miranda"
      },
      {
        moon: "Ariel"
      },
      {
        moon: "Umbriel"
      },
      {
        moon: "Titania"
      },
      {
        moon: "Oberon"
      }
    ],
    density: 1.27,
    gravity: 8.87
  },
  {
    name: "Neptune",
    planet: "True",
    moons: [
      {
        moon: "Triton"
      },
      {
        moon: "Hippocamp"
      },
      {
        moon: "Proteus"
      },
      {
        moon: "Galatea"
      },
      {
        moon: "Despina"
      }
    ],
    density: 1.638,
    gravity: 11.15
  }
]);
