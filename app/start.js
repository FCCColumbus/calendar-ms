import app from './app'

app.set('port', process.env.PORT || 8080)
const server = app.listen(
  app.get('port'),
  // eslint-disable-next-line no-console
  () => console.log(`Express is running on port: ${server.address().port}`)
)
