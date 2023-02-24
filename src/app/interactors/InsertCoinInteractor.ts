import {SnackMachineRepository} from "../repos/SnackMachineRepository";
import {TYPES} from "../../config/types";
import {inject, injectable} from "inversify";
import {LoggingService} from "../../common/LoggingService";
import {MoneyUnit} from "../../domain/Money";

@injectable()
export class InsertCoinInteractor {

    @inject(TYPES.SnackMachineRepository)
    snackMachineRepository: SnackMachineRepository;

    @inject(TYPES.LoggingService)
    logger: LoggingService

    insertCoin(coinType: MoneyUnit, snackMachineID: string) {
        const machine = this.snackMachineRepository.findById(snackMachineID)
        machine.insertMoney(coinType);
        this.snackMachineRepository.saveOngoingTransaction(machine);
    }
}