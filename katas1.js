function oneThroughTwenty() {
  
  let meuRetorno = []; 
  
  for (let contador = 1; contador <= 20; contador++) {
    meuRetorno.push(contador)
    }
    
     return meuRetorno;
    }
    console.log(oneThroughTwenty());
  



function evensToTwenty() {
    
  let meuRetorno = []; 
  
  for (let contador = 1; contador <= 20; contador++) {
    if (contador % 2 == 0) 
    meuRetorno.push(contador)
    }
    
     return meuRetorno;
    }
    console.log(evensToTwenty());
   



function oddsToTwenty() {
    
  let meuRetorno = []; 
  
  for (let contador = 0; contador <= 20; contador++) {
    if (contador % 2 != 0) 
    meuRetorno.push(contador)
    }
    
     return meuRetorno;
    }
    console.log(oddsToTwenty());




function multiplesOfFive() {
    
  let meuRetorno = []; 
  
  for (let contador = 1; contador <= 100; contador++) {
    if (contador % 5 == 0 ) 
    meuRetorno.push(contador)
    }
    
     return meuRetorno;
    }
    console.log(multiplesOfFive());




function squareNumbers() {
    
  let meuRetorno = []; 
  
  for (let contador = 1; contador <= 100; contador++) {
    if (contador * contador <= 100) 
    meuRetorno.push(contador * contador)
    }
    
     return meuRetorno;
    }
    console.log(squareNumbers());




function countingBackwards() {
    
  let meuRetorno = []; 
  
  for (let counter = 20; counter >0 ; counter-=1) {
    meuRetorno.push(counter)
    }
    
     return meuRetorno;
    }
     console.log(countingBackwards());




function evenNumbersBackwards() {
    
  let meuRetorno = []; 
  
  for (let contador = 20; contador >0; contador-=1) {
    if (contador % 2 == 0) 
    meuRetorno.push(contador)
    }
    
     return meuRetorno;
    }
    console.log(evenNumbersBackwards());




function oddNumbersBackwards() {
    
  let meuRetorno = []; 
  
  for (let contador = 20; contador >0; contador-=1) {
    if (contador % 2 != 0) 
    meuRetorno.push(contador)
    }
    
     return meuRetorno;
    }
    console.log(oddNumbersBackwards());




function multiplesOfFiveBackwards() {
    
  let meuRetorno = []; 
  
  for (let contador = 100; contador >0; contador-=1) {
    if (contador % 5 == 0 ) 
    meuRetorno.push(contador)
    }
    
     return meuRetorno;
    }
    console.log(multiplesOfFiveBackwards());




function squareNumbersBackwards() {
    
  let meuRetorno = []; 
  
  for (let contador = 100; contador >=1 ; contador-=1) {
    if (contador * contador <= 100) 
    meuRetorno.push(contador * contador)
    }
    
     return meuRetorno;
    }
    console.log(squareNumbersBackwards());

