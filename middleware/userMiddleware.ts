import { users } from "../controllers/userControllers";
import { User } from "../misc/types";

const doesExist = (req, res, next) => {
    if (!req.params.id) return next();

    const findUser: User = users.find((user) => user.ID == req.params.id);
    if (findUser) {
        next();
    } else {
        res.status(404);
        return res.send("Error 404: Este usuario no existe");
    }
};

const searchUsers = (searchString) => {
    const regex = new RegExp(searchString, "gi");
    const matchingUsers: User[] = users.filter(
        (user) =>
            `${user.Nombre} ${user.Apellido}`.match(regex) ||
            `${user.Apellido} ${user.Nombre}`.match(regex)
    );

    if (matchingUsers) return matchingUsers;
    else return "No se encontró ningún usuario que coincida con la búsqueda";
};

const isValidUser = (req, res): boolean => {
    const { DNI, Nombre, Apellido } = req.body;

    if (!DNI || !Nombre || !Apellido) {
        res.status(400);
        res.send("Error 400: Faltan datos");
        return false;
        
    } else if (typeof DNI !== "number" || typeof Nombre !== "string" || typeof Apellido !== "string") {
        res.status(400);
        res.send("Error 400: Los datos recibidos son inválidos");
        return false
    } 

    else if (users.find((user) => DNI === user.DNI)) {
        res.status(409);
        res.send("Error 409: El DNI ingresado ya existe en la base de datos");
        return false
        
    } else return true;
};

export { isValidUser, searchUsers, doesExist };
