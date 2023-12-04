let totaldados = 0
const dado1 = Math.floor(Math.random() * 7)
const dado2 = Math.floor(Math.random() * 7)
const dado3 = Math.floor(Math.random() * 7)

totaldados = dado1 + dado2 + dado3

console.log("Has tirado 3 dados de 6 caras")
console.log("Los resultados han sido " + dado1 + " " + dado2 + " " + dado3)
console.log("El total es " + totaldados)

