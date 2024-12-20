import{ it, expect, describe } from "vitest";
import { countVowels, factorial, findCommonObjects, findLongestWord, isSubset } from "./functions";

describe("Factorial", ()=>{
    it("5",()=>{
        expect(factorial(5)).toBe(120);
    })
    it("3",()=>{
        expect(factorial(3)).toBe(6);
    })
    it("0",()=>{
        expect(factorial(0)).toBe(1);
    })
    it("-3",()=>{
        expect(()=>factorial(-3)).toThrowError("Factorial is not defined for negative numbers");
    })
})

describe("findLongestWorld", ()=>{
    it("Normal sentence",()=>{
        expect(findLongestWord("The quick brown fox jumps over the lazy dog")).toBe ("quick")
    })

    it("One world", ()=>{
        expect(findLongestWord("Hello")).toBe("Hello")
    })

    it("Empty", ()=>{
        expect(findLongestWord("")).toBe("")
    })

    it("Sentence with extra spaces", ()=>{
    expect(findLongestWord(" a quick test ")).toBe("quick")
    })
})


describe("countVowels", ()=>{
    it("Normal",()=>{
        expect(countVowels("Hello World")).toBe(3)
    })

    it("mássalhangzók",()=>{
        expect(countVowels("bcdfg")).toBe(0)
    })

    it("Lowercase and uppercase",()=>{
        expect(countVowels("AeIou")).toBe(5)
    })

    it("Empty",()=>{
        expect(countVowels("")).toBe(0)
    })
})

describe("isSubset", ()=>{
    const obj1 ={
        a:1
    }
    const obj2 ={
        a:1,
        b:2
    }

    const obj3 ={
        c:3
    }
    it("részhalmaz",()=>{
        expect(isSubset(obj1, obj2)).toBe(true)
    })
    it("nem részhalmaz",()=>{
        expect(isSubset(obj1, obj3)).toBe(false)
    })
})

describe("findCommonObjects",()=>{
    it("közös",()=>{
        expect(findCommonObjects([{id:1, name:'Alice'}, {id:2, name:'Bob'}], [{id:2, name:'Bob'}, {id:3, name: "Charlie"}])).toEqual([ { id: 2, name: 'Bob' } ])
    })

    it("nem közös", ()=>{
        expect(findCommonObjects([{id:1, name:'Alice'}], [{id:3, name:'Charlie'}])).toEqual([])
    })

    it("üres tömbök",()=>{
        expect(findCommonObjects([],[])).toEqual([])
    })

    it("egyik tömb üres", ()=>{
        expect(findCommonObjects([], [{id:1, name:'Alice'}])).toEqual([])
    })
})