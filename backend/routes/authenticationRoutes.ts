import express from 'express'
import { getUserByUsername } from '../controllers/authenticationController'
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import dotenv from "dotenv"

dotenv.config();

export const authenticateRouter = express.Router()

authenticateRouter.post("/", async (req, res) => {

    const user = await getUserByUsername(req.body.username);

    if (user){
        bcrypt.compare(req.body.password, user.password, function(err, bcryptRes) {
            if (err || !bcryptRes)
                res.status(400).send({detail: "Not possible to authenticate, check the password or the username"})

            res.status(201).send(
                {
                    token: jwt.sign(user.email, process.env.TOKEN_SECRET)
                }
            );
        });
    }
})
