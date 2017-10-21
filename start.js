import dotenv from 'dotenv'
import app from './app'

// dotenv.config({ path: 'variables.env' })
app.set('port', process.env.PORT || 8080)

const server = app.listen(app.get('port'), () => console.log(`Express is running on port: ${server.address().port}`))
