"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RomanToIntConversor = void 0;
class RomanToIntConversor {
    constructor() {
        this.dictSymbolValue = new Map();
        this.charsThatCanModifyNext = ['I', 'X', 'C'];
        this.charsThatCanBeModified = ['V', 'L', 'X', 'C', 'D', 'M'];
        this.initDict();
    }
    initDict() {
        this.dictSymbolValue.set('I', 1);
        this.dictSymbolValue.set('V', 5);
        this.dictSymbolValue.set('X', 10);
        this.dictSymbolValue.set('L', 50);
        this.dictSymbolValue.set('C', 100);
        this.dictSymbolValue.set('D', 500);
        this.dictSymbolValue.set('M', 1000);
    }
    romanToInt(s) {
        let intNum = 0;
        let charPosition = 0;
        while (charPosition < s.length) {
            if (((charPosition + 1) <= (s.length - 1)) && this.verifyNext(s.charAt(charPosition), s.charAt(charPosition + 1))) {
                intNum += this.getModifiedNumber(s.charAt(charPosition), s.charAt(charPosition + 1));
                charPosition += 2;
                continue;
            }
            //@ts-ignore
            intNum += this.dictSymbolValue.get(s.charAt(charPosition));
            charPosition++;
        }
        return intNum;
    }
    verifyNext(beforeChar, afterChar) {
        if (beforeChar == afterChar) {
            return false;
        }
        if (this.charsThatCanModifyNext.includes(beforeChar) && this.charsThatCanBeModified.includes(beforeChar)) {
            //@ts-ignore
            if (this.dictSymbolValue.get(beforeChar) > this.dictSymbolValue.get(afterChar)) {
                return false;
            }
            return true;
        }
        if (!(this.charsThatCanModifyNext.includes(beforeChar))) {
            return false;
        }
        if (!(this.charsThatCanBeModified.includes(afterChar))) {
            return false;
        }
        return true;
    }
    getModifiedNumber(beforeChar, afterChar) {
        //@ts-ignore
        return this.dictSymbolValue.get(afterChar) - this.dictSymbolValue.get(beforeChar);
    }
}
exports.RomanToIntConversor = RomanToIntConversor;
