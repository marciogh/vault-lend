import express, { Request, Response, Application } from 'express'
import api from './api.js'

import cors from 'cors';

const server:Application = express()
const port:number = 8081
const options: cors.CorsOptions = {
  allowedHeaders: [
      'X-ACCESS_TOKEN',
      'Access-Control-Allow-Origin',
      'Authorization',
      'Origin',
      'x-requested-with',
      'Content-Type',
      'Content-Range',
      'Content-Disposition',
      'Content-Description',
  ],
  credentials: true,
  methods: 'GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE',
  origin: [
      '*',
  ],
  preflightContinue: false,
};

server.use(cors(options))
server.use(express.json())
server.get("/healthcheck", (req:Request, res:Response) => {
  res.status(200).send("ok")
})
server.use('/v1', api)

server.listen(port, () => {
  console.log('Listening on port ' + port)
})
