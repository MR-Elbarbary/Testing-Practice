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

export function caesarCipher(str, shift) {
  var output = "";
  for (var i = 0; i < str.length; i++) {
    var ascii = str[i].charCodeAt();
    if ((ascii >= 65 && ascii <= 90) || (ascii >= 97 && ascii <= 122)) {
      ascii += shift;
      if ((ascii > 90 && str[i] <= 'Z') || ascii > 122) {
        ascii -= 26;
      }
    }
    output += String.fromCharCode(ascii);
  }
  return output;
}

export function analyzeArray(arr){
  let len = arr.length;
  let min = arr[len-1];
  let max = arr[len-1];
  let avr = 0;
  while (arr.length !== 0) {
    let num = arr.pop();
    if (num > max) {
      max = num;
    } else if ( num < min) {
      min = num;
    }
    avr = avr + num;
  }
  avr = avr / len;
  return {
    average: avr,
    min: min,
    max: max,
    length: len}
}