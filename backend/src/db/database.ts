import dotenv from 'dotenv';
import { Sequelize } from 'sequelize'

dotenv.config();

const postgres_user = process.env.DOCA_POSTGRES_USER
const postgres_password = process.env.DOCA_POSTGRES_PASSWORD
const postgres_database = process.env.DOCA_POSTGRES_DATABASE
const db_path = process.env.DOCA_SQLITE_PATH


const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: db_path
  });

sequelize.authenticate().then(() => {
    console.log(`Database connected.`)
}).catch((err) => {
    console.log(err)
})

export const db: any = {
    sequelize: sequelize
}