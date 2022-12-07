import { RomanToIntConversor } from '../domain/roman-to-int-conversor';

const sutConversor = new RomanToIntConversor();

describe("Roman to Int Conversor test suite", () =>{

    beforeEach(() => {
        jest.resetAllMocks();
    });

    it("Should return 1 when the input is I", () =>{
        expect(sutConversor.romanToInt("I")).toBe(1);
    });

    it("Should return 617 when the input is DCXVII", () =>{
        expect(sutConversor.romanToInt("DCXVII")).toBe(617);
    });

    it("Should return 31 when the input is XXXI", () =>{
        expect(sutConversor.romanToInt("XXXI")).toBe(31);
    });

    it("Should return 29 when the input is XXIX", () =>{
        expect(sutConversor.romanToInt("XXIX")).toBe(29);
    });

    it("Should return 84 when the input is LXXXIV", () =>{
        expect(sutConversor.romanToInt("LXXXIV")).toBe(84);
    });

    it("Should return 98 when the input is XCVIII", () =>{
        expect(sutConversor.romanToInt("XCVIII")).toBe(98);
    });

    it("Should return 77 when the input is LXXVII", () =>{
        expect(sutConversor.romanToInt("LXXVII")).toBe(77);
    });

    it("Should return 1405 when the input is MCDV", () =>{
        expect(sutConversor.romanToInt("MCDV")).toBe(1405);
    });
})
