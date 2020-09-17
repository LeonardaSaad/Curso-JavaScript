var tab = document.getElementById('select')
var valores = []


function adicionar() {
    let num = document.getElementById('txtn')   //querySelector('input#txtn')
    let n = Number(num.value)
    
    //VERIFICA SE O NÚMERO COLOCADO É VÁLIDO
    if (num.value.length==0 || num.value<1 || num.value>100 || num.value==valores) {
        alert('Valor inválido ou já encontrado na lista.')
    } else {
        //COLOCA O NÚMERO NA VARIÁVEL E O TEXTO NA SELECT
        valores.push(n)
        let item = document.createElement('option')
        item.text = `Valor ${n} adicionado`
        tab.appendChild(item)
        res.innerHTML = ''
    }
    num.value = ''
    num.focus()
}


function finalizar() {
    //OBRIGA QUE A PESSOA COLOQUE UM NÚMERO
    if (valores.length == 0) {
        alert('Adicione valores antes de finalizar!')
    } else {
        //COLOCA A FRASE EM PLURAL OU SINGULAR DE ACORDO COM A LENGTH
        if (valores.length == 1) {
            res.innerHTML += `Ao todo, tem ${valores.length} número cadastrado.`
        } else {
            res.innerHTML += `Ao todo, temos ${valores.length} números cadastrados.`
        }
        
        //COLOCA AS VARIÁVEIS EM ORDEM DECRESCENTE PARA PEGAR O MAIOR
        valores.sort(function(a, b) {
            return b - a;
        });
        res.innerHTML += `<br>O maior valor informado foi ${valores[0]}.`
        //COLOCA AS VARIÁVEIS EM ORDEM CRESCENTE PARA PEGAR O MENOR
        valores.sort(function(a, b) {
            return a - b
        })
        res.innerHTML += `<br>O menor valor informado foi ${valores[0]}.`
        //ESQUEMA PARA SOMAR AS VARIÁVEIS
        var numeros = valores
        var total = 0
        for (var i = 0; i < numeros.length; i++) {
            total = total + numeros[i]
        }
        res.innerHTML += `<br>Somando todos os valores, temos ${total}.`
        //USA O ESQUEMA PARA DIVIDIR PELO LENGTH
        res.innerHTML += `<br>A média dos valores digitados é ${total/valores.length}.`
    }
}