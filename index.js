const agevolazione = document.querySelector('#agevolato');
//const initialPrice = parseInt(document.querySelector('#initialprice').value);
//const discount = parseInt(document.querySelector('#discount').value);
const btn = document.querySelector('.btn');

let risultato = 0;

const calcolo = () => {
    const initialPrice = parseInt(document.querySelector('#initialprice').value);
    const discount = parseInt(document.querySelector('#discount').value);
    
    let risultato1;

    if (agevolazione.checked == true) {
    
   risultato1 = ((initialPrice - (initialPrice * (discount /100))) /1.22 * 1.04);
    
}  else if (agevolazione.checked == false)  {

    risultato1 = initialPrice - (initialPrice * (discount /100));
}
risultato = risultato1;
console.log(discount);
return document.querySelector('.risultato').innerHTML = risultato;
}


btn.addEventListener('click', calcolo);