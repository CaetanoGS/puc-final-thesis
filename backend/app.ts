import express  from "express"
import { userRouter } from "./routes/userRoutes"
import { authenticateRouter } from "./routes/authenticationRoutes"
import { transactionRouter } from "./routes/transactionRoutes"
import cookieParser from "cookie-parser";


const app = express()
app.use(express.json())
app.use(cookieParser())
app.use("/authenticate", authenticateRouter)
app.use("/users", userRouter)
app.use("/transactions", transactionRouter)


const PORT = process.env.PORT || 3000

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))