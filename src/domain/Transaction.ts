import {Entity} from "./Entity";
import {AggregateRoot} from "./AggregateRoot";

export class Transaction extends AggregateRoot {
    slotMachineId: string
    amount: number
    constructor(id: string, slotMachineId: string, amount: number) {
        super(id);
        this.slotMachineId = slotMachineId;
        this.amount = amount;
    }
}