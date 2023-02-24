import {SnackMachineRepository} from "../app/repos/SnackMachineRepository";
import {InsertCoinInteractor, BuySnackInteractor} from "../app/interactors"
import {SnackMachineController} from "../api/controllers"
import {TransactionRepository} from "../app/repos/TransactionRepository";

const TYPES = {
    //common services
    LoggingService: Symbol.for("LoggingService"),

    //Repos
    SnackMachineRepository: Symbol("SnackMachineRepository"),
    TransactionRepository: Symbol("TransactionRepository"),

    //Controllers
    SnackMachineController: Symbol("SnackMachineController"),


    //Interactors
    InsertCoinInteractor: Symbol("InsertCoinInteractor"),
    BuySnackInteractor: Symbol("BuySnackInteractor")

};

export {TYPES};
