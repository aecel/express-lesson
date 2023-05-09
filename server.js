const express = require("express")
const app = express()

app.get('/', (req, res) => {
    console.log('Here')

    // Insert different res thingies here

    // Outputs "Hi" on browser
    // For testing purposes
    res.send('Hi')

    // Send status code
    // res.sendStatus(500)

    // Chain status with something
    // res.status(500).send("Something")

    // Chain status with json
    // res.status(500).json({message: "Error"})

    // Downloads "server.js"
    // res.download("server.js")

    // Render a file
    // res.render('index')
})

app.listen(3000)
