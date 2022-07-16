function resultado() {
    let start = Number(document.getElementById('inicio').value)
    let end = Number(window.document.getElementById('fim').value)
    let step = Number(window.document.getElementById('passo').value)
    let res = window.document.getElementById('res')

    if (start == 0 || end == 0) {
        res.innerHTML = '<p>Impossível contar!</p>'
        window.alert('Favor inserir números válidos!')
    }  else {
        res.innerHTML = 'Contando: '
        if (step <= 0) {
            window.alert('Passo precisa ser 1 ou mais! Considerando passo = 1')
            step = 1
        }
        if (start < end) {
          for(let count = start ; count <= end ; count += step) {
          res.innerHTML += `${count} \u{1F449} ` }
        }
        else {
          for(let count = start ; count >= end ; count -= step) {
          res.innerHTML += `${count} \u{1F449} ` }
            }
        res.innerHTML += `\u{1F3C1}`
        }
    }