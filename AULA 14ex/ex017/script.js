function tabuada() {
    let num = document.getElementById('txtn')
    let tab = document.getElementById('select')
    let n = Number(num.value)

    if (num.value.length == 0) {
        alert('Coloque um número')
    } else {
        tab.innerHTML = ''
        for (c= 1;c<= 10;c+= 1) {
            let item = document.createElement('option')
            item.text = `${n} X ${c} = ${n*c}`
            tab.appendChild(item)
        }
    }
}
