let res = document.getElementById('ifyes');
let yes = document.getElementById('yes');
let no = document.getElementById('no');
let main = document.getElementById('main');
let close = document.getElementById('close');
let aud = document.getElementById('aud1');
let aud2 = document.getElementById('aud2');
let aud3 = document.getElementById('aud3');
let adam = document.getElementById('adam');

let clickcount = 0;
no.addEventListener('click', function () {
    no.style.position = "absolute";
    clickcount++;
    const maxX = window.innerWidth - 150;
    const maxY = window.innerHeight - 150;
    const newX = Math.random() * maxX;
    const newY = Math.random() * maxY;
    no.style.transition="0.2s ease";
    no.style.left = newX + "px";
    no.style.top = newY + "px";
    if(clickcount == 1){
        aud.play();
    }
    else if(clickcount == 3){
        aud2.play()
    }
    else if(clickcount == 5){
        aud3.play()
        no.style.transition="0.2s ease";
        no.style.height = "0";
        no.style.width = "0";
        no.style.overflow = "hidden";
    }
});
yes.addEventListener('click', function () {
    res.style.animation = "pop 0.3s ease";
    main.style.filter = "blur(10px)";
    res.style.display = "flex";
    adam.play();
});
close.addEventListener('click', function () {
    res.style.animation = "depop 0.3s ease forwards";
    main.style.filter = "blur(0px)";
});