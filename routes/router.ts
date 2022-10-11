import express from "express";
import { routesMath } from "./routesMath";
import { routesUsers } from "./routesUsers";

const router = express.Router();

router.use("/users", routesUsers)
router.use("/math", routesMath)

export {router}