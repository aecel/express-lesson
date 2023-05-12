const express = require("express")
const app = express()

// Set up view engine
app.set("view engine", "ejs")

app.get("/", (req, res) => {
  console.log("Here")

  // Insert different res thingies here

  // Outputs "Hi" on browser
  // Not usually used, just for testing purposes
  //   res.send("Hi")

  // Send status code
  // res.sendStatus(500)

  // Chain status with something
  // res.status(500).send("Something")

  // Chain status with json
  // res.status(500).json({message: "Error"})

  // Downloads "server.js"
  // res.download("server.js")

  // Render a file
  // Need to set up view engine to work
  // You can pass text to index.ejs
  res.render("index", { text124: "World" })
})

const userRouter = require("./routes/users")
app.use("/users", userRouter)

app.listen(3000)
