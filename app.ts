import express from "express"
import { userRouter } from "./routes/userRoutes"
import { authenticateRouter } from "./routes/authenticationRoutes"
import { transactionRouter } from "./routes/transactionRoutes"
import cookieParser from "cookie-parser";
import cors from "cors";
import path from "path";


const app = express()
app.use(express.json())
app.use(cookieParser())
app.use("/api/authenticate", authenticateRouter)
app.use("/api/users", userRouter)
app.use("/api/transactions", transactionRouter)
app.use(express.static(__dirname + '/dist/wep-app'));
app.use(cors());

app.get('/*', function(req,res) {
    res.sendFile(path.join(__dirname+'/dist/wep-app/index.html'));
});

const PORT = process.env.PORT || 3000

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))