import {SnackMachine} from "../../src/domain/SnackMachine";
import {MoneyUnit} from "../../src/domain/Money";
import {expect} from "chai";

describe("Snack machine", () => {
    it("Inserted money is added to money in transaction", () => {
        const snackMachine = new SnackMachine("id")
        snackMachine.insertMoney(MoneyUnit.QUARTER);
        snackMachine.insertMoney(MoneyUnit.QUARTER);
        expect(snackMachine.moneyInTransaction.totalInCents).to.eq(50);
    })

    it("Money in transaction is return to zero if we return money", () => {
        const snackMachine = new SnackMachine("id")
        snackMachine.insertMoney(MoneyUnit.QUARTER);
        snackMachine.returnMoney();
        expect(snackMachine.moneyInTransaction.totalInCents).to.eq(0);
    })


    it("Money is transaction is moved to money in machine when I buy the snack", () => {
        const snackMachine = new SnackMachine("id")
        snackMachine.insertMoney(MoneyUnit.QUARTER);
        snackMachine.buySnack()
        expect(snackMachine.moneyInTransaction.totalInCents).to.eq(0);
        expect(snackMachine.moneyInside.totalInCents).to.eq(25)
    })

    it("Money in machine accumulates with multiple purchases", () => {
        const snackMachine = new SnackMachine("id")
        snackMachine.insertMoney(MoneyUnit.QUARTER);
        snackMachine.buySnack()
        snackMachine.insertMoney(MoneyUnit.QUARTER);
        snackMachine.buySnack()
        expect(snackMachine.moneyInTransaction.totalInCents).to.eq(0);
        expect(snackMachine.moneyInside.totalInCents).to.eq(50)
    })
});

