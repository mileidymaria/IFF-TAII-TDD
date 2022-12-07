export class RomanToIntConversor {
    
    private dictSymbolValue: Map<string, number>  = new Map();
    private charsThatCanModifyNext = ['I','X','C']; 
    private charsThatCanBeModified = ['V','L','X', 'C','D','M'];
    
    constructor(){
        this.initDict();
    }

    private initDict(){
        this.dictSymbolValue.set('I', 1);
        this.dictSymbolValue.set('V', 5);
        this.dictSymbolValue.set('X', 10);
        this.dictSymbolValue.set('L', 50);
        this.dictSymbolValue.set('C', 100);
        this.dictSymbolValue.set('D', 500);
        this.dictSymbolValue.set('M', 1000);
    }
    
    romanToInt(s: string) { 
        let intNum = 0;
        let charPosition = 0;
        while(charPosition<s.length){
            if(((charPosition+1) <= (s.length-1)) && this.verifyNext(s.charAt(charPosition), s.charAt(charPosition+1))){
                intNum += this.getModifiedNumber(s.charAt(charPosition), s.charAt(charPosition+1));
                charPosition+=2;
                continue;
            }
            //@ts-ignore
            intNum += this.dictSymbolValue.get(s.charAt(charPosition)); 
            charPosition++;
        }
        return intNum;
    }

    private verifyNext(beforeChar: string, afterChar: string): boolean{
        if(beforeChar==afterChar){
            return false;
        }
        if(this.charsThatCanModifyNext.includes(beforeChar) && this.charsThatCanBeModified.includes(beforeChar)){
            //@ts-ignore
            if(this.dictSymbolValue.get(beforeChar) > this.dictSymbolValue.get(afterChar)){
                return false;
            }
            return true;
        }
        if(!(this.charsThatCanModifyNext.includes(beforeChar))){
            return false;
        }
        if(!(this.charsThatCanBeModified.includes(afterChar))){
            return false;
        }
        return true;
    }
    
    private getModifiedNumber(beforeChar: string, afterChar: string){
        //@ts-ignore
        return this.dictSymbolValue.get(afterChar) - this.dictSymbolValue.get(beforeChar);
    }

    
}