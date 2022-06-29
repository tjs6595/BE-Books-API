// DEPENDENCIES
const express = require('express')
const mongoose = require('mongoose')


// CONFIGURATION
require('dotenv').config()
const PORT = process.env.PORT
const app = express()

// MIDDLEWARE
app.use(express.urlencoded({extended: true}))
app.use(express.json())


// MONGO DB CONNECTION
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true}, 
    () => {console.log('connected to mongo: ', process.env.MONGO_URI) }
)

// ROUTES
app.get('/', (req, res) => {
    console.log("Hello World?")
    res.send('Welcome to an Awesome App about Books!')
})

// DEFINE BOOKS CONTROLLER
const booksController = require('./controllers/books_controller.js')
app.use('/books', booksController)


// 404 Page
app.get('*', (req, res)=>{
  res.send('404')
})
  
// LISTEN
app.listen(PORT, () => {
  console.log('nomming at port', PORT);
})







// const methodOverride = require('method-override')





// app.set('views', __dirname + '/views')
// app.set('view engine', 'jsx')
// app.engine('jsx', require('express-react-views').createEngine())
// app.use(methodOverride('_method'))
// app.use(express.static('public'))