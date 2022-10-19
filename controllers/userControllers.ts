import { isValidUser, searchUsers } from "../middleware/userMiddleware";
import { User } from "../misc/types";
import { updateConsole } from "../misc/updateConsole";

let users: User[] = [
    {
        ID: 1,
        DNI: 56812649,
        Nombre: "Carlos",
        Apellido: "Benedetti",
    },
    {
        ID: 2,
        DNI: 43828071,
        Nombre: "Ramiro",
        Apellido: "Cabrera",
    },
    {
        ID: 3,
        DNI: 34685129,
        Nombre: "Carlos",
        Apellido: "Gonzalezç",
    },
];
// variable para contar las IDs usadas por separado
let idCount = 3;

const getUsers = (req, res) => {
    if (req.query.search) {
        const searchResult = searchUsers(req.query.search); // funcion que filtra la lista de usuarios con regex
        res.json(searchResult);
    } else {
        res.json(users);
    }
};

const getUserByID = (req, res) => {
    const requestedUser: User = users.find((user) => user.ID == req.params.id);
    res.json(requestedUser);
};

const createUser = (req, res) => {
    // isValidUser pasa la request por una serie de condiciones y devuelve true si el usuario es válido o un string de error si no lo es
    const validation = isValidUser(req, res);
    const newUser: User = { ID: (idCount += 1), ...req.body };

    if (validation === true) {
        users.push(newUser);
        res.send("Usuario creado con éxito");
    } else {
        res.send(validation);
    }

    updateConsole();
};

const editUser = (req, res) => {
    if (req.body.ID) return res.send("No puedes cambiar la ID de un usuario");
    const indexToEdit = users.indexOf(
        users.find((user) => user.ID == req.params.id)
    );

    users[indexToEdit] = { ...users[indexToEdit], ...req.body };
    res.send("Usuario editado con éxito");

    updateConsole();
};

const removeUser = (req, res) => {
    users = users.filter((user) => user.ID != req.params.id);
    res.send("Usuario eliminado con éxito");

    updateConsole();
};

export { getUsers, getUserByID, createUser, editUser, removeUser, users };
