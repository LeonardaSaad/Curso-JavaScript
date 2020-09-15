let num = [5, 8, 2, 9, 3]
console.log(`O vetor tem ${num.length} posições.`)
console.log(`O primeiro valor do vetor é ${num[0]}.`)
num.push(7)
console.log(`Os números em ordem crescente são ${num.sort()}.`)
console.log(`Após adcionar o número 7 aos vetores, eles ficam assim ${num}.`)
let pos = num.indexOf(7)
if (pos == -1) {
    console.log(`O valor não foi encontrado`)
} else {
    console.log(`O número 7 está na posição ${pos}`)
}