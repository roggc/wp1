import express from 'express'

const app = express()
app.use(express.static('dist'))
const port=3000
app.listen(port,()=>console.log('listening on port '+port))
