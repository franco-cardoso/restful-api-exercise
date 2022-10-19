import {router} from "./routes/router"
import express from "express";
import dotenv from "dotenv";
import { updateConsole } from "./misc/updateConsole";

dotenv.config();
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api/", router);

app.listen(process.env.PORT);
updateConsole();