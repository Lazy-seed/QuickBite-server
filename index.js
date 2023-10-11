import express from 'express'
import cookieParser from 'cookie-parser';
import cors from 'cors';
import 'dotenv/config';
import DB_connection from './config/db.js';
import route from './routes/routes.js';

const app = express();
DB_connection();
app.use(express.json())
app.use(cookieParser())


const PORT = 8000
app.listen(PORT, () => {
    console.log("Server is running on ", PORT)
})

// app.use('/rr', (req, res) => {
//     res.send("sdsdsd")
// })
app.use(
    cors({ credentials: true, origin: 'http://localhost:3000' })
    );

// routes
app.use('/v1/api', route)