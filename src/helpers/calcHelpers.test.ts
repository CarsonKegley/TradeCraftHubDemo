import { negative } from "./calcHelper";


describe("Calc helper functions", () =>{

    it("Negative function works", () =>{
        const positiveToNegative = negative(123414)
        expect(positiveToNegative).toEqual(-123414)

        const negativeToPositive = negative(-123414)
        expect(negativeToPositive).toEqual(123414)
    });
    
});
