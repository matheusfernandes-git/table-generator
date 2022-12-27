function gerar(){
    let n = (document.getElementById('n'))
    let tab = document.getElementById('seleTab')
    if (n.value.length == 0){
        alert('invalido, Digite um número')
    }else {
        let num = Number(n.value)
        let c = 1
        tab.innerHTML = ''
            while (c <= 10){
                let item = document.createElement('option')
                item.text = `${num} x ${c} = ${num*c}`
                item.value = `select ${c}`
                tab.appendChild(item)
                c++
        }
    }
 }