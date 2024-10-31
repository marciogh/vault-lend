import express, { Application } from 'express'
import api from './api.js'

const server:Application = express()
const port:number = 8081

server.use(express.json())
server.use('/v1', api)

server.listen(port, () => {
  console.log('Listening on port ' + port)
})
