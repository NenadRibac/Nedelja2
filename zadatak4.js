//Prvih 1000 brojeva deljivih sa 4

let number = 0;
let counter = 1;

 

while (counter <= 1000) {
    if(number % 5 == 0) {
        console.log(number);
        counter++;
    }
  
  number++;
}