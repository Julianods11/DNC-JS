function tabuada(){

var num = window.document.getElementById('num')
var end = window.document.getElementById('end')
var calc = window.document.getElementById('reset')
var rs = window.document.getElementById('reset')

if(num.value.length == 0 || end.value.length == 0){
    window.alert('Valores inseridos incorretamente!');
}else{

var n = Number(num.value)
var e = Number(end.value)
var x = 0
var r = ''
var res = window.document.getElementById('resposta')
    res.innerHTML = `A tabuada do ${n} é: <br>`
do {
    r = n*x
    res.innerHTML += `${n} x ${x} = ${r} <br>`
    x++
} while (x <= e);

window.document.getElementById('reset').style.display = 'block';
}
}

function resetAll(){

    var res = window.document.getElementById('resposta')

    res.innerHTML = 'Preencha os valores acima!'
    window.document.getElementById('reset').style.display = 'none';
}

function noValue(){
var res = window.document.getElementById('resposta')

    if(num.value.length == 0 || end.value.length == 0){
        res.innerHTML = 'Faltam valores a serem inseridos!'
    }
}


