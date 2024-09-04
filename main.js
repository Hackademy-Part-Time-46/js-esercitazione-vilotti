// Esercizio 4 usando if

let temperatura = -10;
 if(temperatura < 0 ){
    console.log('non e’ tanto il freddo quanto l’umidità');
}
  else if(temperatura < -10 ){
    console.log('uomini forti, destini forti. Uomini deboli, destini deboli.');
}

 else if(temperatura < 20){
    console.log('non ci sono piu’ le mezze stagioni');
}
else if(temperatura >= 30){
    console.log('andiamo al mare!?');
}
else if(temperatura < 30){
    console.log('mi dia una birra sudata'); 
} 

// eEsercizi 3 usando Switch Case 



let voto = 17;
switch(true){
    case voto < 18:
        console.log('insufficiente');
        break;
    case voto <= 18  &&  voto < 21:
        console.log('sufficiente');
        break;
    case voto <=21 && voto < 24:
        console.log('buono');
        break;
    case voto <= 24 && voto < 27:
        console.log('distinto');
        break;
    case voto <= 27 &&  voto <= 29:
        console.log('ottimo');
        break;
    case voto = 30:
        console.log('eccellente');
        break; 
}


// Esercizio 2 usando switch Case

let giorno = 1;

switch(giorno){
    case 1:
        console.log('lunedì');
        break;
    case 2: 
        console.log('martedì');
        break;
    case 3:
        console.log('mercoledì');
        break;
    case 4:
        console.log('giovedì');
        break;
    case 5: 
        console.log('venerdì');
        break;
    case 6:
        console.log('sabato');
         break;
    case 7:
        console.log('domenica');
        break;
    default: 
        console.log('errore, giorno della settimana non valido')
        break;
}

// Esercizio 1 usando If

let a = 10;
let b = -2;
let c = 31;
let d = 22;
let e = 15;
let f = -6;
let g = 7;


let maxValue;
let minValue;

if(a>b){
    maxValue = a;
    minValue= b;
}
else{
    maxValue = b;
    minValue = a;
}
if(maxValue < c){
    maxValue = c;


}
if(minValue > c){
    minValue = c;
}
if(maxValue < d){

    maxValue = d;
}
if(minValue > d){
    minValue = d;
}
if(maxValue < e){
    maxValue = e;
}
if(minValue > e){
    minValue = e;
}
if(maxValue < f){
    maxValue = f;
}
if(maxValue < g){
    maxValue = g;
}
if(minValue > g){
    minValue = g;
}

console.log(`la temperatura più calda è  ${maxValue} quella più fredda è  ${minValue}` );



