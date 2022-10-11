import express from "express";
import { getFibSequence } from "../controllers/mathControllers";
import { getUsers, getUserByID, createUser } from "../controllers/userControllers";


const routes = express.Router();

routes.get("/fib", getFibSequence);

routes.get("/users", getUsers);
routes.get("/users/:id", getUserByID);
routes.post("/users",createUser)

export { routes };
