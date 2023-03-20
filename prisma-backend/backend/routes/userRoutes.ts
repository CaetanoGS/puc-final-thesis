import express from 'express'
import { registerNewUser } from '../controllers/userController'

export const userRouter = express.Router()

userRouter.post("/signup", async (req, res) => {

    const userPassword = req.body.password
    const username = req.body.username
    const name = req.body.name

    const createdUser = await registerNewUser(username, userPassword, name)

    if (createdUser)
        res.status(201).send(createdUser)
    else
        res.status(400).send({detail: "Not possible to create a new user"})
})
