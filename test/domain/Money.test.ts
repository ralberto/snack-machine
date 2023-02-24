import {Money, MoneyUnit} from "../../src/domain/Money";
import {expect} from "chai";

describe("Money entity", () => {
    it("has 0 cents after being created", () => {
        expect(new Money().totalInCents).to.eq(0)
    })

    it("increases amount after adding more", () => {
        expect(new Money().add(MoneyUnit.ONE_CENT).totalInCents).to.eq(1)
    })

    it("creates a duplicated copy when we ask a clone", () => {
        const m1 = new Money().add(MoneyUnit.FIVE_DOLLAR, 2).add(MoneyUnit.ONE_CENT, 9);
        const m2 = m1.clone()
        expect(m1).to.deep.equal(m2)
    })

    it("keeps adding amounts if we add multiple amounts", () => {
        const m1 = new Money().add(MoneyUnit.FIVE_DOLLAR, 2).add(MoneyUnit.ONE_CENT, 9);
        expect(m1.totalInCents).to.eq(5 * 100 * 2 + 9);
    })

    it("does not accept a negative quantity", () => {
        const t = () => {
            new Money().add(MoneyUnit.FIVE_DOLLAR, -1)
        };
        expect(t).to.throw(Error)
    })
});