type user = {
  ID: number;
  DNI: number;
  Nombre: string;
  Apellido: string;
};
let users: user[] = [
  {
    ID: 1,
    DNI: 43828078,
    Nombre: "Carlos",
    Apellido: "Gonzalez",
  },
  {
    ID: 2,
    DNI: 23123123,
    Nombre: "Carlos",
    Apellido: "22222",
  },
];
// variable para contar las IDs usadas por separado
let idCount = 1;

const getUsers = (req, res) => {
  // si existe un parametro de busqueda "search", filtra los nombres y apellidos con regex, de lo contrario devuelve la lista completa
  if (req.query.search) {
    const regex = new RegExp(req.query.search, "gi");
    const matchingUsers = users.filter((user) =>
      `${user.Nombre} ${user.Apellido}`.match(regex) || `${user.Apellido} ${user.Nombre}`.match(regex)
    );

    if (matchingUsers.length === 0) {
        res.send("No se encontro ningun usuario que coincida con la busqueda");
    } else {
        res.json(matchingUsers);
    }

  } else res.json(users);
};

const getUserByID = (req, res) => {
  const requestedUser = users.find((user) => user.ID === +req.params.id);
  // prettier ignore
  if (!requestedUser) {
    res.status(404);
    res.send("Error 404: Este usuario no existe");
  }
  res.json(requestedUser);
};

const createUser = (req, res) => {};

const editUser = (req, res) => {};

const removeUser = (req, res) => {};

export { getUsers, getUserByID, createUser, editUser, removeUser, users };
