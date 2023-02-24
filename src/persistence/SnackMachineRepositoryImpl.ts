import {SnackMachineRepository} from "../app/repos/SnackMachineRepository";
import {SnackMachine} from "../domain/SnackMachine";
import {Transaction} from "../domain/Transaction";
import {injectable} from "inversify";

@injectable()
export class SnackMachineRepositoryImpl implements SnackMachineRepository {
    findById(snackMachineId: string): SnackMachine {
        return new SnackMachine("1")
    }

    saveMoneyInTransaction(machine: SnackMachine): void {
        console.log("Saved money in transaction")
    }


}