import * as express from 'express'
import * as cors from 'cors'
import * as logger from 'morgan'
import { connectToDB } from './config/db'
import { routerExperience } from './routes/experience'

export const app = express()

app.use(cors())
app.use(express.json())
app.use(logger('dev'))
connectToDB()

app.use('/experience', routerExperience)

// Adicionar a rota da Store aqui