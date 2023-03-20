import express  from "express"
import { userRouter } from "./routes/userRoutes"

const app = express()
app.use(express.json())
app.use("/users", userRouter)

const PORT = process.env.PORT || 3000

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))