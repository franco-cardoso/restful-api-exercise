import express from "express";
import { getFibSequence, getExponentsTable } from "../controllers/mathControllers";


const routesMath = express.Router();

routesMath.get("/fibonacci", getFibSequence);
routesMath.get("/exponents", getExponentsTable);

export { routesMath };
