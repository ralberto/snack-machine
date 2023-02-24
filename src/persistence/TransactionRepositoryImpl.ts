import {SnackMachineRepository} from "../app/repos/SnackMachineRepository";
import {SnackMachine} from "../domain/SnackMachine";
import {Transaction} from "../domain/Transaction";
import {injectable} from "inversify";
import {TransactionRepository} from "../app/repos/TransactionRepository";

@injectable()
export class TransactionRepositoryImpl implements TransactionRepository {


    save(transaction: Transaction): void {
        console.log("Transaction saved")
    }

}