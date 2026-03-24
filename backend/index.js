import { user } from "./db";
const express = require("express");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const mainRouter = require("./routes/index");

const app = express();

app.use("/api/v1",mainRouter);
app.listen(3000);
//the urls will be like
// /api/v1/user
// /api/v1/transaction ....

//api/v1/user/signin
//api/v1/user/signup
//api/v1/user/changePassword .....

//api/v1/account/transaction
