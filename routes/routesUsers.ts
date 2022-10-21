import express from "express";
import { getUsers, getUserByID, createUser, editUser, removeUser } from "../controllers/userControllers";
import { doesExist, isValidUser } from "../middleware/userMiddleware";


const routesUsers = express.Router();
routesUsers.use('/', isValidUser)
routesUsers.use('/:id', doesExist);

routesUsers.get("/", getUsers);
routesUsers.get("/:id", getUserByID);
routesUsers.post("/",createUser)
routesUsers.put("/:id",editUser)
routesUsers.delete("/:id",removeUser)

export { routesUsers };
