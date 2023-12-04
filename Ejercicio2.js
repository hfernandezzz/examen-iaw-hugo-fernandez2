let pregunta = require("prompt-sync")({ sigint: true })


const texto = pregunta("Introduce un texto==> ")
const frase = texto
let totalnovocales = 0;

for (let i = 0; i < frase.length; i++) {
    if (
        frase.charAt(i) === "b" ||
        frase.charAt(i) === "B" ||
        frase.charAt(i) === "C" ||
        frase.charAt(i) === "c" ||
        frase.charAt(i) === "D" ||
        frase.charAt(i) === "d" ||
        frase.charAt(i) === "F" ||
        frase.charAt(i) === "f" ||
        frase.charAt(i) === "g" ||
        frase.charAt(i) === "G" ||
        frase.charAt(i) === "h" ||
        frase.charAt(i) === "H" ||
        frase.charAt(i) === "j" ||
        frase.charAt(i) === "J" ||
        frase.charAt(i) === "k" ||
        frase.charAt(i) === "K" ||
        frase.charAt(i) === "L" ||
        frase.charAt(i) === "l" ||
        frase.charAt(i) === "M" ||
        frase.charAt(i) === "m" ||
        frase.charAt(i) === "N" ||
        frase.charAt(i) === "n" ||
        frase.charAt(i) === "ñ" ||
        frase.charAt(i) === "Ñ" ||
        frase.charAt(i) === "p" ||
        frase.charAt(i) === "P" ||
        frase.charAt(i) === "q" ||
        frase.charAt(i) === "Q" ||
        frase.charAt(i) === "R" ||
        frase.charAt(i) === "r" ||
        frase.charAt(i) === "s" ||
        frase.charAt(i) === "S" ||
        frase.charAt(i) === "t" ||
        frase.charAt(i) === "T" ||
        frase.charAt(i) === "V" ||
        frase.charAt(i) === "v" ||
        frase.charAt(i) === "W" ||
        frase.charAt(i) === "w" ||
        frase.charAt(i) === "x" ||
        frase.charAt(i) === "X" ||
        frase.charAt(i) === "Y" ||
        frase.charAt(i) === "y" ||
        frase.charAt(i) === "Z" ||
        frase.charAt(i) === "z" ||
        frase.charAt(i) === "0" ||
        frase.charAt(i) === "1" ||
        frase.charAt(i) === "2" ||
        frase.charAt(i) === "3" ||
        frase.charAt(i) === "4" ||
        frase.charAt(i) === "5" ||
        frase.charAt(i) === "6" ||
        frase.charAt(i) === "7" ||
        frase.charAt(i) === "8" ||
        frase.charAt(i) === "9" 
    ) {
        totalnovocales = totalnovocales + 1
    }
}

console.log("La suma de tus cadenas es " + frase)
console.log(totalnovocales)

