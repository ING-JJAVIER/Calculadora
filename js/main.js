const display = document.querySelector('.pantalla');
const buttons = document.querySelectorAll('.btn');

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click',buttonPresed);
 }
 

function buttonPresed() {
    let pv=display.value;
    let or=(this.value==='+' || this.value==='-' || this.value==='*' || this.value==='/' || this.value==='=');
    
    let pv_or=(pv.slice(-1) ==='+' || pv.slice(-1)==='-' || pv.slice(-1)==='*' || pv.slice(-1)==='/' || pv.slice(-1)==='=')
    

    if (this.value==='Del') {
        display.value=pv.slice(0,pv.length -1);
        return;
    }
    if (or && pv=='') {
        return;
    }
    if (or && pv_or) {
        display.value=pv.slice(0,pv.length -1)+ this.value;
        return;
    }
    if (this.value==='C') {
        display.value=pv.slice(pv.length);
        return;
    }
    if (this.value==='=') {
        display.value=eval(display.value);
        return;
        
    }
    display.value += this.value
}



