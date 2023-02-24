import {Money, MoneyUnit} from "./Money";
import {Entity} from "./Entity";
import {Transaction} from "./Transaction";
import {AggregateRoot} from "./AggregateRoot";

export class SnackMachine extends AggregateRoot {

    private static MONEY_NONE = new Money();
    private machineMoney: Money = SnackMachine.MONEY_NONE;
    private currenTransactionMoney: Money = SnackMachine.MONEY_NONE;

    insertMoney(unit: MoneyUnit) {
        this.currenTransactionMoney = this.currenTransactionMoney.add(unit)
    }

    get moneyInside() {
        return this.machineMoney;
    }

    get moneyInTransaction() {
        return this.currenTransactionMoney;
    }

    returnMoney(): void {
        this.currenTransactionMoney = SnackMachine.MONEY_NONE;
    }
    buySnack() {
        const transaction = new Transaction("trxId", this.id, this.currenTransactionMoney.totalInCents)
        this.machineMoney = this.machineMoney.add(this.currenTransactionMoney);
        this.currenTransactionMoney = SnackMachine.MONEY_NONE;
        return transaction
    }

}