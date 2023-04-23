import express from "express"
import { userRouter } from "./routes/userRoutes"
import { authenticateRouter } from "./routes/authenticationRoutes"
import { transactionRouter } from "./routes/transactionRoutes"
import cookieParser from "cookie-parser";
import cors from "cors";


const app = express()
app.use(express.json())
app.use(cookieParser())
app.use("/api/authenticate", authenticateRouter)
app.use("/api/users", userRouter)
app.use("/api/transactions", transactionRouter)
app.use(cors());


const PORT = process.env.PORT || 3000

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))