import {router} from "./routes/router"
import express from "express";
import dotenv from "dotenv";
import { updateConsole } from "./misc/updateConsole";


dotenv.config();
const app = express();

const port = 3000;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api/", router);

app.listen(port);
updateConsole();
