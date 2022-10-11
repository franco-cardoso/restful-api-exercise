import { users } from "../controllers/userControllers";

const isValidUser = (req, res) => {
    const { DNI, Nombre, Apellido } = req.body;

    if (!DNI || !Nombre || !Apellido) {
        res.status(400);
        res.send("Error 400: Faltan datos");
        return false;
    }
    if (users.find((user) => DNI === user.DNI)) {
        res.status(409);
        res.send("Error 409: El DNI ingresado ya existe en la base de datos");
        return false;
    }
    
    return true;
};

export { isValidUser };
