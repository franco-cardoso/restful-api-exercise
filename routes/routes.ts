import express from "express";
import { getFibSequence } from "../controllers/mathControllers";

const routes = express.Router();

routes.get("/fib", getFibSequence);

export { routes };
