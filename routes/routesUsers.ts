import express from "express";
import { getUsers, getUserByID, createUser, editUser } from "../controllers/userControllers";


const routesUsers = express.Router();

routesUsers.get("/", getUsers);
routesUsers.get("/:id", getUserByID);
routesUsers.post("/",createUser)
routesUsers.put("/:id",editUser)

export { routesUsers };
