//Import
const app = require('./app')

//Config
require("dotenv").config()
const PORT = process.env.PORT

//Listener
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})