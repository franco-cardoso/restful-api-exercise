import express from "express";
import { routesMath } from "./routesMath";
import { routesUsers } from "./routesUsers";

const routes = express.Router();

routes.use("/users", routesUsers)
routes.use("/math", routesMath)

export {routes}