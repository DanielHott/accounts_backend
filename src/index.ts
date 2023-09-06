import express, { Request, Response } from 'express';
import cors from 'cors';
import statusCodes from './db/constants/statusCodes';
require('dotenv/config');
require('./db/models');
const UserController = require('./db/controllers/UsersController');
const AccountController = require('./db/controllers/AccountController');
const UserMiddlewares = require('./db/middlewares/UserMiddlewares');
import 'express-async-errors';

const app = express();

app.use(express.json());

app.use((_req: Request, res: Response, next) => {
    res.header('Access-Control-Allow-Origin', '*' )
    app.use(cors());
    next();
}) 


const PORT =  process.env.SERVER_PORT;

app.post('/login', UserController.getLogin);

app.post('/create', AccountController.createAccount);

app.post('/accounts', AccountController.getAccounts);

app.post('/delete', AccountController.deleteAccount);

app.put('/edit', AccountController.editAccount);

app.post('/check-token', UserController.checkDecoded);

app.post('/create-user', UserMiddlewares.testLoginCreate, UserController.createUser);

app.get('/', (_req: Request, res: Response) => {
    res.status(statusCodes.OK).send('Express')
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});