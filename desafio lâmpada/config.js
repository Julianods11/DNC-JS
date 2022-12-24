function ligar(){
    window.document.getElementById('good').style.display = 'none';
    window.document.getElementById('on').style.display = 'block';
}

function desligar(){
    window.document.getElementById('good').style.display = 'block';
    window.document.getElementById('on').style.display = 'none';
}

function crash(){
    window.document.getElementById('crash').style.display = 'block';
    window.document.getElementById('good').style.display = 'none';
    window.document.getElementById('on').style.display = 'none';
    window.document.getElementById('repair').style.display = 'block';
    window.document.getElementById('button').style.display = 'none';
    window.document.getElementById('buttoff').style.display = 'none';
}
function consertar(){
    window.document.getElementById('crash').style.display = 'none';
    window.document.getElementById('good').style.display = 'block';
    window.document.getElementById('repair').style.display = 'none';
    window.document.getElementById('button').style.display = 'block';
    window.document.getElementById('buttoff').style.display = 'block';
}

