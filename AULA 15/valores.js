let valores = [8,6,5,7,4,2]
valores.sort()
/*
for (let ind = 0; ind < valores.length; ind++) {
    console.log(`A posição ${ind} tem o valor ${valores[ind]}`)
}
*/

for (let ind in valores) {
    console.log(`A posição ${ind} tem o valor ${valores[ind]}`)
}
