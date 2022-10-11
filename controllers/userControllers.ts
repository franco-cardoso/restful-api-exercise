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
    Apellido: "Pérez",
  },
];
// variable para contar las IDs usadas por separado
let idCount = 1;

const getUsers = (req, res) => {
  res.json(users);
};

const getUserByID = (req, res) => {
  const requestedUser = users.find((user) => user.ID === +req.params.id);
  if (!requestedUser) {
    res.status(404);
    res.send("Error 404: Este usuario no existe");
  }
  res.json(requestedUser);
};

const createUser = (req, res) => {};

const editUser = (req, res) => {};

const removeUser = (req, res) => {};

export { getUsers, getUserByID, createUser, editUser, removeUser };
