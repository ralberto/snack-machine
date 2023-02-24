import {SnackMachineRepository} from "../repos/SnackMachineRepository";
import {TYPES} from "../../config/types";
import {inject} from "inversify";
import {LoggingService} from "../../common/LoggingService";
import {MoneyUnit} from "../../domain/Money";
import {TransactionRepository} from "../repos/TransactionRepository";

export  class BuySnackInteractor {

    @inject(TYPES.SnackMachineRepository)
    snackMachineRepository: SnackMachineRepository;

    @inject(TYPES.TransactionRepository)
    transactionRepository: TransactionRepository

    @inject(TYPES.LoggingService)
    logger: LoggingService

    insertCoin(snackMachineID: string) {
        const machine = this.snackMachineRepository.findById(snackMachineID)
        machine.insertMoney(MoneyUnit.ONE_CENT);
        this.snackMachineRepository.saveMoneyInTransaction(machine)
    }

    buySnack(snackMachineID: string) {
        const machine = this.snackMachineRepository.findById(snackMachineID)
        const transaction = machine.buySnack()
        this.transactionRepository.save(transaction);
    }
}