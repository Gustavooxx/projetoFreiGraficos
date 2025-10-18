import express from 'express'
import cors from 'cors'
import routes from './routes.js'

const app = express()

app.use(cors())

routes(app)
app.listen(5010, () => {console.log('Servidor rodando na porta 5010')})