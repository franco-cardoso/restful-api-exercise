import express from "express";
import { getFibSequence, getExponentsTable, getFactorial } from "../controllers/mathControllers";


const routesMath = express.Router();

routesMath.get("/fibonacci", getFibSequence);
routesMath.get("/exponents", getExponentsTable);
routesMath.get("/factorial", getFactorial)

export { routesMath };
