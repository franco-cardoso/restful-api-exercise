import { routesUsers } from "./routes/routesUsers";
import { routesMath } from "./routes/routesMath";
import express from "express";
import dotenv from "dotenv";
import { updateConsole } from "./misc/updateConsole";

dotenv.config();
const app = express();

const port = 3000;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api/users", routesUsers);
app.use("/api/math", routesMath);

app.listen(port);
//updateConsole();
