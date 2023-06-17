/*
1. Given height in metr and weight in kg.
2. Return weight / (height * height), fixed to 2.
3. Throw error with corrent message if given invalid arguments.

1.9, 90 => 24.93

90, 1.9 => error 'height must be first argument and weight - second'
190, 90 => error 'height must be in metr'
1.9 => error 'weight is required second argument'
 => error 'height and weight required'
"1.9", "90" - error 'height and weight must be number'
*/

const calcWeightIndex = require("./calcWeightIndex");

describe("test calcWeightIndex function", ()=> {
    test("1.9, 90 => 24.93", ()=> {
        const result = calcWeightIndex(1.9, 90);
        expect(result).toBe(24.93);
        /*
        const expect = result => {
            return {
                result,
                toBe(value) {
                    return this.result === value;
                }
            }
        }
        */
    })

    it("90, 1.9 => error 'height must be first argument and weight - second'", ()=> {
        expect(() => calcWeightIndex(90, 1.9)).toThrow('height must be first argument and weight - second')
    })

    test("190, 90 => error 'height must be in metr'", ()=> {
        expect(() => calcWeightIndex(190, 90)).toThrow('height must be in metr')
    })

    test(" => error 'height and weight required'", ()=> {
        expect(() => calcWeightIndex()).toThrow('height and weight required')
    })

    test("'1.9', '90' - error 'height and weight must be number'", ()=> {
        expect(() => calcWeightIndex('1.9', '90')).toThrow('height and weight must be number')
    })
})