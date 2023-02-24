import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import { routes } from './routes/routes';
import * as doca_db from './db/database';
const cookieParser = require('cookie-parser')

dotenv.config();

const app: Express = express();
const port = process.env.DOCA_PORT; // Bind socket to this port

app.use(bodyParser.json({ limit: '50mb', type: 'application/json' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(cookieParser())

doca_db.sequelize.sync({ force: true }).then(() => {
  console.log("db has been re sync")
});

app.use('/api', routes);

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
