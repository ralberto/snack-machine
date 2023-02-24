import "reflect-metadata";
import {container} from '../config/inversify.config'
import express, {Express} from "express";
import errorMiddleware from "./middleware";
import {pinoHttp} from "pino-http";
import {SnackMachineController} from "./controllers";
import {insertCoinRequest} from "./validators/insertCoinValidator";

const app: Express = express()
const pino = pinoHttp();

app.use(pino);
app.use(express.json())
app.use(errorMiddleware)

const snackMachineController = container.resolve(SnackMachineController)
export default function start(): void {

    app.get("/", (req, res) => res.json({message: "Welcome to our Bookstore!"}));

    const snackMachines = app.route("");
    app.post('/snack-machines/:id/insert-coin',
        insertCoinRequest,
        snackMachineController.index.bind(snackMachineController));

    app.listen(3000, () => {
        console.log("service configuration = ", 3000)
    })

}