import { users } from "../controllers/userControllers";

const searchUsers = (searchString) => {
    const regex = new RegExp(searchString, "gi");
    const matchingUsers = users.filter(
        (user) =>
            `${user.Nombre} ${user.Apellido}`.match(regex) ||
            `${user.Apellido} ${user.Nombre}`.match(regex)
    );

    if (matchingUsers) return matchingUsers;
    else return "No se encontro ningun usuario que coincida con la busqueda";
};

const isValidUser = (req, res): boolean => {
    const { DNI, Nombre, Apellido } = req.body;

    if (!DNI || !Nombre || !Apellido) {
        res.status(400);
        res.send("Error 400: Faltan datos");
        return false;
    } 
    else if (users.find((user) => DNI === user.DNI)) {
        res.status(409);
        res.send("Error 409: El DNI ingresado ya existe en la base de datos");
        return false;
    } 
    else return true;
};

export { isValidUser, searchUsers };
