import express  from "express"
import { userRouter } from "./routes/userRoutes"
import { authenticateRouter } from "./routes/authenticationRoutes"

const app = express()
app.use(express.json())
app.use("/authenticate", authenticateRouter)
app.use("/users", userRouter)


const PORT = process.env.PORT || 3000

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))