import express from 'express'
import { getUserByUsername } from '../controllers/authenticationController'
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import dotenv from "dotenv"

dotenv.config();

export const authenticateRouter = express.Router()

authenticateRouter.post("/", async (req, res) => {

    console.log(req.body.username)

    const user = await getUserByUsername(req.body.username);

    if (user) {
        bcrypt.compare(req.body.password, user.password, function (err, bcryptRes) {
            if (err || !bcryptRes){
                res.status(400).send({ detail: "Not possible to authenticate, check the password or the username" })
            }

            const token = jwt.sign({username: user.email}, process.env.TOKEN_SECRET)

            res.status(201).cookie("session", token).cookie("username", user.email).send(
                {
                    token: token
                }
            );
        });
    }else {
        res.status(400).send("username or password is invalid")
    }
})
