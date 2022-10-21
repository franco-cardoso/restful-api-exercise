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

    if (matchingUsers.length > 0) return matchingUsers;
    else return "No se encontró ningún usuario que coincida con la búsqueda";
};

const isValidUser = (req, res, next) => {
    if (Object.keys(req.body).length < 1) next(); // saltea las peticiones que no tengan un body
    const { DNI, Nombre, Apellido } = req.body;

    // condiciones para confirmar que la información recibida sea válida
    switch (req.method) {
        case "POST":
            if (!DNI || !Nombre || !Apellido) {
                res.status(400);
                res.send("Error 400: Faltan datos");

            } else if ( typeof DNI !== "number" || typeof Nombre !== "string" || typeof Apellido !== "string" ) {
                res.status(400);
                res.send("Error 400: Los datos recibidos son inválidos");
                
            } else if (users.find((user) => DNI === user.DNI)) {
                res.status(409);
                res.send("Error 409: El DNI ingresado ya existe en la base de datos");

            } else next();
            break;

        case "PUT":
            if ((Nombre && typeof Nombre !== "string") || (Apellido && typeof Apellido !== "string")) {
                res.status(400);
                res.send("Error 400: Los datos recibidos son inválidos");                               

            } else if (req.body.ID) {
                res.status(403);
                res.send("Error 403: No puedes cambiar la ID de un usuario");

            } else next();
            break;

        default: next();
    }
};

export { isValidUser, searchUsers, doesExist };
