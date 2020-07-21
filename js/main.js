var size = 10;
var p = document.getElementsByTagName('p');
var txt = document.getElementById('size');
var unit = document.getElementById('unit');
var nowUnit = 'px';

function enlarge(d){
    size += d;
    for(var i = 0; i < p.length; i++){
        p[i].style.fontSize = size + nowUnit;
    }
    txt.innerHTML = size;

}
function shrink(d){
    if(size - d >= 0){
        size -= d;
        for(var i = 0; i < p.length; i++){
            p[i].style.fontSize = size + nowUnit;
        }
        txt.innerHTML = size;
    }
    

}
function unitChange(u){
    nowUnit = u;
    for(var i = 0; i < p.length; i++){
        p[i].style.fontSize = size + nowUnit;
    }
    unit.innerHTML = nowUnit;
}