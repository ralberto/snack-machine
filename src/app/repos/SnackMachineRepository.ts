import {Transaction} from "../../domain/Transaction";
import {SnackMachine} from "../../domain/SnackMachine";

export interface SnackMachineRepository {

    findById(snackMachineId: string): SnackMachine

    saveMoneyInTransaction(machine: SnackMachine): void

}