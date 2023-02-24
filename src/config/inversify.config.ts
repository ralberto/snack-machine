import {LoggingService} from "../common/LoggingService";
import {TYPES} from "./types";
import {PinoLoggingService} from "../common/PinoLoggingService";
import {Container} from "inversify";
import {SnackMachineController} from "../api/controllers";
import {SnackMachineRepository} from "../app/repos/SnackMachineRepository";
import {SnackMachineRepositoryImpl} from "../persistence/SnackMachineRepositoryImpl";
import {InsertCoinInteractor} from "../app/interactors/InsertCoinInteractor";

const container = new Container();

// Services
container.bind<LoggingService>(TYPES.LoggingService).to(PinoLoggingService).inSingletonScope();

/Repos
container.bind<SnackMachineRepository>(TYPES.SnackMachineRepository).to(SnackMachineRepositoryImpl).inSingletonScope()
container.bind<SnackMachineRepository>(TYPES.TransactionRepository).to(TransactionRepositoryImpl).inSingletonScope()


//Controllers
container.bind<SnackMachineController>(TYPES.SnackMachineController).to(SnackMachineController).inSingletonScope();



//Interactors
container.bind<InsertCoinInteractor>(TYPES.InsertCoinInteractor).to(InsertCoinInteractor).inSingletonScope();

export {container}