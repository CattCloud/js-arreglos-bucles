// Reto 1: Suma de Elementos
function sumarElementos(arreglo) {
    let suma=0;
    if(arreglo.length >=0){
        for(elemento of arreglo){
           suma=suma+elemento;     
        }
    return suma;
    }
}

// Reto 2: Número Mayor
function encontrarMayor(arreglo) {
    let valorMayor=arreglo[0];
    for(elemento of arreglo){
        if(elemento>valorMayor){
            valorMayor=elemento;
        }
    }
    return valorMayor;
}

// Reto 3: Filtrar Pares
function filtrarPares(arreglo) {
   let newArreglo=[];
   for(elemento of arreglo){
    //Calcular si es par
    if(elemento%2 == 0){
       newArreglo.push(elemento);
    }    
   }
   return newArreglo;
}

// Reto 4: Contar Vocales
function contarVocales(texto) {
    let contador=0;
        //Puede que la primera letra de la cadena este en mayuscula y sea vocal : Eva,Andres
        texto=texto.toLowerCase();
        for(caracter of texto){
            switch (caracter) {
                case "a":
                case "e":
                case "i":
                case "o":
                case "u":
                    contador++;
                    break;
            }
        }
    return contador;
}

// Reto 5: Invertir Arreglo
function invertirArreglo(arreglo) {
    return arreglo.reverse();
}

// Reto 6: Promedio de Notas
function calcularPromedio(notas) {
    let suma=0;
    if(notas.length >=0){
        for(elemento of notas){
           suma=suma+elemento;     
        }
    }
    let promedio=suma/notas.length;    
    return promedio;
}


// Reto 7: Contador de Letras
function contarLetra(texto, letra) {
    let contador=0;
    if(typeof texto == "string"){
        //Puede que la primera letra de la cadena este en mayuscula y sea vocal : Eva,Andres
        texto=texto.toLowerCase();
        for(caracter of texto){
            if(letra == caracter){
                contador=contador+1;
            }
        }
    }
    return contador;
}


// Reto 8: Elementos Únicos
function obtenerUnicos(arreglo) {
    let newArray=[];
    let unico=false;
    for(let j=0;j>arreglo.length;j++){
        for(let i=1;i>arreglo.length;i++){
            if(arreglo[j]==arreglo[i]){
                break;  
            }            
        }
        if(unico){
            newArray.push(arreglo[j]);
        }
    }
    // Debe retornar un nuevo arreglo sin elementos duplicados
}

// Reto 9: Palíndromo
function esPalindromo(texto) {
    texto = texto.toLowerCase();
  
    // Invierto la cadena
    let textoInvertido = "";
    for (let i = texto.length - 1; i >= 0; i--) {
      textoInvertido += texto[i];
    }
  
    // Comparamos cadena original con reverso
    return texto === textoInvertido;
}
