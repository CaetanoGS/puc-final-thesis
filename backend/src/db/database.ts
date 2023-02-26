import dotenv from 'dotenv';
import { Sequelize } from 'sequelize'

dotenv.config();

const postgres_user = process.env.DOCA_POSTGRES_USER
const postgres_password = process.env.DOCA_POSTGRES_PASSWORD
const postgres_database = process.env.DOCA_POSTGRES_DATABASE


const sequelize = new Sequelize(
    `postgres://${postgres_user}:${postgres_password}@localhost:5432/${postgres_database}`,
    {
        dialect: "postgres"
    }
)

sequelize.authenticate().then(() => {
    console.log(`Database connected.`)
}).catch((err) => {
    console.log(err)
})

const dbSession: any = {}
dbSession.sequelize = sequelize

export const db = dbSession