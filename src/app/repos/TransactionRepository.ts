import {Transaction} from "../../domain/Transaction";
import {SnackMachine} from "../../domain/SnackMachine";

export interface TransactionRepository {

    save(transaction: Transaction): void;

}