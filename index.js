
const imgs = document.getElementById( "imagens" );
const img = document.querySelectorAll( "#imagens img" );

let idx = 0;

function carrossel(){
    idx++;

    if(idx > img.length  - 1){
        idx = 0;
    }

    imgs.style.transform = `translateX(${-idx * 550}px)` ;
}
