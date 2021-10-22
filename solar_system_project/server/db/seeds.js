use solar_system
db.dropDatabase()

db.planets.insertMany([
    {
    name: "Mercury",
    planet: "True",
    moon: "False",
    gravity: 3.7
  },
  {
    name: "Venus",
    planet: "True",
    moon: "False",
    gravity: 8.87
  },
  {
    name: "Earth",
    planet: "True",
    moon: "False",
    gravity: 9.8
  },
  {
    name: "Mars",
    planet: "True",
    moon: "False",
    gravity: 3.71
  },
  {
    name: "Jupiter",
    planet: "True",
    moon: "False",
    gravity: 24.79
  },
  {
    name: "Saturn",
    planet: "True",
    moon: "False",
    gravity: 10.44 
  },
  {
    name: "Uranus",
    planet: "True",
    moon: "False",
    gravity: 8.87
  },
  {
    name: "Neptune",
    planet: "True",
    moon: "False",
    gravity: 11.15
  }
]);
