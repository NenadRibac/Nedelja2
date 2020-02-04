//prodavnica
let price = 75;
let money = 55;

if (price > money) {
    console.log('Nemate dovoljno novca.');
    console.log('Trenutno stanje: ' + money);
}
else {
    console.log('Uspesno ste kupili proizvod');
    console.log('Preostali novac: ' + (money-price))
}