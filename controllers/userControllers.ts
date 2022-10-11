import { isValidUser, searchUsers } from "../middleware/userMiddleware";

type user = {
    ID: number;
    DNI: number;
    Nombre: string;
    Apellido: string;
};
let users: user[] = [
    {
        ID: 1,
        DNI: 43828071,
        Nombre: "Ramiro",
        Apellido: "Cabrera",
    },
    {
        ID: 2,
        DNI: 34685129,
        Nombre: "Carlos",
        Apellido: "Gonzalez",
    },
];
// variable para contar las IDs usadas por separado
let idCount = 2;

const getUsers = (req, res) => {
    if (req.query.search) {
        const searchResult = searchUsers(req.query.search); // middleware que filtra la lista de usuarios con regex
        res.json(searchResult);
    } else {
        res.json(users);
    }
};

const getUserByID = (req, res) => {
    const requestedUser = users.find((user) => user.ID == req.params.id);
    if (!requestedUser) {
        res.status(404);
        res.send("Error 404: Este usuario no existe");
        return;
    }
    res.json(requestedUser);
};

const createUser = (req, res) => {
    const newUser = { ID: (idCount += 1), ...req.body };

    // middleware que devuelve true si la peticion cumple sus condiciones
    if (isValidUser(req, res)) {
        users.push(newUser);
        res.send("Usuario creado con exito");
        console.table(users);
    }
};

const editUser = (req, res) => {};

const removeUser = (req, res) => {};

export { getUsers, getUserByID, createUser, editUser, removeUser, users };
