import express, { Application } from 'express'
import routes from './routes'

const app: Application = express()
const port = 8000

// Body parsing Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/v1', routes)
try {
    app.listen(port, () => {
        console.log(`Server running on http://localhost:${port}`)
    })
} catch (error) {
    console.log(`Error occurred: ${error}`)
}