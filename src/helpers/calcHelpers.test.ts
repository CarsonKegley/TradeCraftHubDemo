import { add, addDecimal, negative } from "./calcHelper";


describe("Calc helper functions", () =>{

    it("Negative function works", () =>{
        const positiveToNegative = negative(123414)
        expect(positiveToNegative).toEqual(-123414)

        const negativeToPositive = negative(-123414)
        expect(negativeToPositive).toEqual(123414)
    });
    it("Addition function works", () =>{
        expect(add(17,35)).toEqual(52);
        expect(add(17,-35)).toEqual(-18);
    });

    it("Puts Decimal points in", () => {
        expect(addDecimal("1234")).toEqual("1234.");
        expect(addDecimal("3.")).toEqual("3.");
    });
});
