import { analyzeArray, caesarCipher, Calculator, capitalize, reverseString } from "./functions"

test('capitalize', () => {
    expect(capitalize('hello')).toBe('Hello');
    expect(capitalize('Hello world')).toBe('Hello world');
});

test('reverseString', () =>{
    expect(reverseString('hello world')).toBe('dlrow olleh');
});

test('calculator', ( ) =>{
    let calculator = new Calculator();
    expect(calculator.add(4, 6)).toBe(10);
    expect(calculator.subtract(40, 20)).toBe(20);
    expect(calculator.divide(1,3)).toBeCloseTo(0.33333);
    expect(calculator.multiply(10, 80)).toBe(800);
});

test('caesarCipher', () =>{
    expect(caesarCipher('hello world', 2)).toBe('jgnnq yqtnf'),
    expect(caesarCipher('HELLO WORLD', 2)).toBe('JGNNQ YQTNF'),
    expect(caesarCipher('XYZ', 2)).toBe('ZAB')
    expect(caesarCipher('xyz', 2)).toBe('zab')
});

test('analyzeArray', () =>{
    expect(analyzeArray([1,8,3,4,2,6])).toEqual({
        average: 4,
        min: 1,
        max: 8,
        length: 6
     })
});