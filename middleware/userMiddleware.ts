import { users } from "../controllers/userControllers";
import { User } from "../misc/types";

const doesExist = (req, res, next) => {
    const findUser: User = users.find((user) => user.ID == req.params.id);
    if (findUser) next();
    else {
        res.status(404);
        res.send("Error 404: Este usuario no existe");
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

const isValidUser = (req, res): boolean | string => {
    const { DNI, Nombre, Apellido } = req.body;

    if (!DNI || !Nombre || !Apellido) {
        res.status(400);
        return "Error 400: Faltan datos";

    } else if (typeof DNI !== "number" || typeof Nombre !== "string" || typeof Apellido !== "string") {
        res.status(400);
        return "Error 400: Los datos recibidos son inválidos";

    } else if (users.find((user) => DNI === user.DNI)) {
        res.status(409);
        return "Error 409: El DNI ingresado ya existe en la base de datos";

    } else return true;
};

export { isValidUser, searchUsers, doesExist };
