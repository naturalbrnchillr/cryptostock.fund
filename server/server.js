import {
  PORT,
  NODE_ENV
} from './config'

import express from 'express'
import next from 'next'

const dev = NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare()
  .then(async () => {
    const server = express()


    /**
     * Next.js client.
     */

    server.get('*', (req, res) => {
      return handle(req, res)
    })

    const http = require('http').createServer(server)

    /**
     * Run.
     */

    http.listen(PORT, () => {
      console.log('>>> Listening on: ' + PORT)
    })
  })
  .catch(ex => {
    console.log(ex.stack)
    process.exit()
  })
