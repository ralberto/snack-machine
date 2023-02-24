import {ValueObject} from "./ValueObject";

export enum MoneyUnit {
    ONE_CENT = 1,
    TEN_CENT = 10,
    QUARTER = 25,
    ONE_DOLLAR = 100,
    FIVE_DOLLAR = 5 * ONE_DOLLAR,
    TWENTY_DOLLAR = 4 * FIVE_DOLLAR
}

/*
    Money is a value object! A value object does
    not make sense by itself. Here, money is associated
    with the SnackMachine.
    Value objects do not have its own identity and do not have
    a table in the database.
    Value object should be immutable!

    Having business login in value object is a good idea.
*/

export class Money extends ValueObject {

    private currentAmountUnits = new Map<MoneyUnit, number>();

    add(unit: MoneyUnit, qty?: number): Money;
    add(money: Money): Money;
    add(unit: any, qty?: number): Money {
        let newInstance = this.clone();

        if (typeof unit === "object") {
            (unit as Money).currentAmountUnits.forEach((value, key) => {
                newInstance.incOrSet(key, value);
            })
        } else {  //Money unit, i.e. number
            const quantity = qty || 1
            if(quantity <= 0 || !Number.isInteger(quantity)) {
                throw new Error("Quantity must me a positive integer")
            }
            newInstance.incOrSet(unit, quantity)
        }
        return newInstance;
    }

    get totalInCents() {
        let total = 0;
        this.currentAmountUnits.forEach((v, k) => {
            total += k.valueOf() * v;
        });

        return total;
    }

    private incOrSet(key: MoneyUnit, amount: number): void {
        const cValue = this.currentAmountUnits.get(key);
        const newValue = (cValue || 0) + amount;
        this.currentAmountUnits.set(key, newValue);
    }

    clone(): Money {
        const m = new Money();
        m.currentAmountUnits = new Map<MoneyUnit, number>(this.currentAmountUnits);
        return m;
    }

    /* istanbul ignore next */
    toString(): string {
        let map = "";
        this.currentAmountUnits.forEach((v, k) => {
            map += `${MoneyUnit[k]}:${v}  `
        })
        return `Money => {${map}}`
    }

}
