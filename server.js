const express = require("express")
const app = express()

app.get('/', (req, res) => {
    console.log('Here')

    // Insert different res thingies here

    // Outputs "Hi" on browser
    res.send('Hi')

    // Send status code
    // res.sendStatus(500)
})

app.listen(3000)
