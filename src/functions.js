export function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export function reverseString(string){
    return string.split("").reverse().join("")
}

export class Calculator {
    constructor() {
        
    }
    add(num1, num2){
        return num1 + num2
    }

    subtract(num1, num2){
        return num1 - num2
    }

    divide(num1, num2){
        return num1 / num2
    }

    multiply(num1, num2){
        return num1 * num2
    }
}