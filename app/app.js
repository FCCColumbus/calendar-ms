import express from 'express'
// import cors from 'cors'
import path from 'path'
import bodyParser from 'body-parser'
import expressValidator from 'express-validator'
import dotenv from 'dotenv'

import routes from './routes/index'
import helpers from './helpers'
import { notFound, developmentErrors, productionErrors } from './handlers/errorHandlers'

dotenv.config({ path: 'variables.env' })

// create app
const app = express()

// eslint-disable-next-line no-console
// console.log('ENV: ', app.get('env'))

// match origin for api access
export const corsOptions = {
  origin: (app.get('env') === 'development'
    ? /https?:\/\/localhost:\d+/
    : [/\.netlify\.com$/, /https?:\/\/fcccolumbus\.com.+$/, /https?:\/\/localhost:\d+/]),
  methods: 'GET',
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
}

// view engine setup
app.set('views', path.join(__dirname, 'views')) // this is where our pug files live
app.set('view engine', 'pug') // uses the pug (jade) engine

// app.use(cors(corsOptions))

// serve up static files from the public folder
app.use(express.static(path.join(__dirname, 'public')))

// takes the raw requests and turns them into usable properties on req.body
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// exposes methods for validating data
app.use(expressValidator())

// pass variables to our templates and all requests
app.use((req, res, next) => {
  res.locals.h = helpers
  res.locals.currentPath = req.path
  next()
})

// after all middleware, we handle our routes
app.use('/', routes)

// if above route doesn't work, we 404 users and forward to error handler
app.use(notFound)

// bad error not expected not expected
if (app.get('env') === 'development') {
  // development error handler - prints stack trace
  app.use(developmentErrors)
}

// production error handler
app.use(productionErrors)

// export it to start the site in site.js
export default app
