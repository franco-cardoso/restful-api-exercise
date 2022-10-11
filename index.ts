import { routesUsers } from "./routes/routesUsers";
import { routesMath } from "./routes/routesMath";
import {routes} from "./routes/routes"
import express from "express";
import dotenv from "dotenv";

dotenv.config();
const app = express();

const port = 3000;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api/", routes);

app.listen(port);
//updateConsole();
