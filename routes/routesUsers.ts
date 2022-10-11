import express from "express";
import { getUsers, getUserByID, createUser } from "../controllers/userControllers";


const routesUsers = express.Router();

routesUsers.get("/", getUsers);
routesUsers.get("/:id", getUserByID);
routesUsers.post("/",createUser)

export { routesUsers };
