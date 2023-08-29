const express = require("express");
require("dotenv").config();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const connectDatabase = require("./config/db");
const { userRoute } = require("./routes/user.route");

const app = express();

app.use(express.json());

app.use(cors({
    origin: "http://localhost:5500",
    credentials: true
}));

app.use(cookieParser())
app.use("/", userRoute)

app.listen(process.env.PORT, async () => {
    // connectDatabase()
    connectDatabase()
    console.log("Server Starting on PORT :", process.env.PORT)
})