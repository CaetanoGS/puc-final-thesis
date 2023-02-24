import dotenv from 'dotenv';
import { Sequelize, DataTypes } from 'sequelize'



dotenv.config();

const postgres_user = process.env.DOCA_POSTGRES_USER
const postgres_password = process.env.DOCA_POSTGRES_PASSWORD
const postgres_database = process.env.DOCA_POSTGRES_DATABASE


const sequelize = new Sequelize(
    `postgres://${postgres_user}:${postgres_password}@127.0.0.1:5432/${postgres_database}`,
    {
        dialect: "postgres"
    }
)

sequelize.authenticate().then(() => {
    console.log(`Database connected.`)
}).catch((err) => {
    console.log(err)
})

const doca_db: any = {}
doca_db.Sequelize = Sequelize
doca_db.sequelize = sequelize

//exporting the module
module.exports = doca_db