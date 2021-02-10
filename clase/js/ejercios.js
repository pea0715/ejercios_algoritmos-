console.log("-----------------------------------------ejercio 1 -----------------------------------------");
function Ejercio1() {
    let Vestidos = 4;
    let Conjuntos = 5;
    let contador = 1;

    for (let ij = 0; ij < Vestidos; ij++) {
        console.log(contador, "Numero de vestido", ij +1);  
        contador++; 
    }

    for (let ij = 0; ij < Conjuntos; ij++) {
        console.log(contador, "Numero de conjunto deportivo",ij +1);   
        contador++;
    }
    
}

console.log(Ejercio1());


console.log("-----------------------------------------ejercio 2 -----------------------------------------");

const Ejercio2 = () => {
    let ninos = 9;
    let nninas = 7;
    let contador = 1;

    for (let inicio = 1; inicio <= ninos; inicio++) {
        for (let final = 1; final <= nninas; final++) {
            console.log(contador, "Resultados: " , "Niño: " , inicio, " y Niña: " , final )
            contador++;
        }      
    }
}

console.log(Ejercio2());


console.log("-----------------------------------------ejercio 3 -----------------------------------------");


const Ejercio3 = () => {
    let Paises = 20;
    let Embajador = 20;
    let contador = 1;

    for (let inicio = 1; inicio <= Paises; inicio++) {
        for (let qwerty = 1; qwerty <= Embajador; qwerty++) {
            if(inicio != qwerty){
                console.log(contador, "Resultados: " , "Pais: " , inicio, " y Enbajador pais: " , qwerty )
                contador++;
            }
        }      
    }
}

console.log(Ejercio3());


console.log("-----------------------------------------ejercio 4 -----------------------------------------");

const Ejercio4 = () => {
    let Cifras = 999;
    let contador = 1;

    for (let inicio = 0; inicio <= Cifras; inicio++) {
        if(inicio>= 100){
            console.log(contador , " El numero es: " , inicio)  
            contador++;      
        }    
    }
}

console.log(Ejercio4());


console.log("-----------------------------------------ejercio 5 -----------------------------------------");

const Ejercio5 = () => {
    let LibrosEstadistica = 5;
    let LibrosMatematica = 7;
    let contador = 1;

    for (let iniciador = 1; iniciador <= LibrosEstadistica; iniciador++) {
        console.log(contador, "libro de estadistica del autor: " , iniciador)
        contador++;
    }

    for (let jolo = 1; jolo <= LibrosMatematica; jolo++) {
        console.log(contador, "libro de matematica del autor: " , jolo )
        contador++;
    }  
}

console.log(Ejercio5());





console.log("-----------------------------------------ejercio 6 -----------------------------------------");
