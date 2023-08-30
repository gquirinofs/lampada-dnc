let lamp = window.document.getElementById('lamp');

function brokenEver(){
    return lamp.src.indexOf('broken') > -1;
}

function powerOn(){
    if(!brokenEver()){
    lamp.src = 'images/on.svg';}
}

function powerOff(){
    if(!brokenEver()){
    lamp.src = 'images/off.svg';}
}

function broken(){
    lamp.src = 'images/broken.svg';
}

