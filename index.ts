import { routes } from "./routes/routes";
import express from 'express'

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api',routes)

export {}
app.listen(3000);