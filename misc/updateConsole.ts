import { users } from "../controllers/userControllers";

const updateConsole = () => {
    console.clear();
    console.log(typeof users)
    console.log(`
Server listening on port ${process.env.PORT}

List of users:
    `);
    console.table(users);
};

export { updateConsole };
