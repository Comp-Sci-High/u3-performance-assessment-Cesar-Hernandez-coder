// Good luck!
const express = require('express')
const app = express()

Data = {
  image: "https://m.media-amazon.com/images/I/81Z+V7GJIEL.png",
  Character:
    [{ "name": "Archer", "level": 10, "dps": 150, "dpa": 300, "hitpoints": 200 },
    { "name": "Barbarian", "level": 12, "dps": 180, "dpa": 360, "hitpoints": 350 },
    { "name": "Giant", "level": 8, "dps": 250, "dpa": 500, "hitpoints": 2500 },
    { "name": "Wizard", "level": 6, "dps": 350, "dpa": 700, "hitpoints": 400 },
    { "name": "Hog Rider", "level": 9, "dps": 220, "dpa": 440, "hitpoints": 400 },
    { "name": "Dragon", "level": 5, "dps": 500, "dpa": 1000, "hitpoints": 4000 },
    { "name": "P.E.K.K.A", "level": 7, "dps": 650, "dpa": 1300, "hitpoints": 7000 },
    { "name": "Valkyrie", "level": 10, "dps": 210, "dpa": 420, "hitpoints": 600 },
    { "name": "Minion", "level": 12, "dps": 140, "dpa": 280, "hitpoints": 200 },
    { "name": "Bowler", "level": 5, "dps": 450, "dpa": 900, "hitpoints": 1000 }]
};

app.use((request, response, next) => {
  console.log(request.method + "/" + request.url)
  next();
})

app.get("/", (request, response) => {
  response.status(200).send(`Welcome to clash of clans wiki <img src="https://m.media-amazon.com/images/I/81Z+V7GJIEL.png">`)
})

app.get("/doc", (request, response) => {
  response.status(200).send("To see barbarian put /api/elixir/barbarian for archer put /api/elixir/archer")
})


app.get("/api/elixir/barbarian", (request, response) => {
  response.status(200).json(Data.Character[1])
})

app.get("/api/elixir/archer", (request, response) => {
  response.status(200).json(Data.Character[0])
})

app.use((request, response, next) => {
  console.log(request.method + "/" + request.url)
  next();
})

app.use((req, res, next) => {
  res.status(404).send("404 not found")
})


app.listen(4000, () => {
  console.log("server is running")
})
















