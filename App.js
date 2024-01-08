let container = document.getElementById('container');

function crearTiendas(contenedorID, min, cantidad){
    //Encontrar contenedor por su Id
    let elementoContenedor = document.getElementById(contenedorID);
   
    //loop para crear las tiendas
    for(let conteo =1; conteo <= cantidad; conteo++){
        //crear texto de label
        let textoLabel = "Tienda " + conteo;

        //crear tiendas con crearParrafoTiendas()
        let parrafoTienda = crearParrafoTiendas(textoLabel,min);

        elementoContenedor.appendChild(parrafoTienda);
    

    }


}



function crearParrafoTiendas(textoLabel,valorMin){
    //crear etiquetas p
    let elementoParrafo = document.createElement('p');

    //crear etiqueta Label
    let etiquetaLabel = document.createElement('label');
    etiquetaLabel.innerText = textoLabel + ": ";

    //conectar label con input
    etiquetaLabel.setAttribute("for",textoLabel);

    //crear input
    let elementoInput = document.createElement('input');
    //agregar atributos a input
    elementoInput.setAttribute("type", "number");
    elementoInput.setAttribute("id",textoLabel);
    elementoInput.setAttribute("min",valorMin);
    elementoInput.setAttribute("value",0);


    //agregar label e input a el parrafo
    elementoParrafo.appendChild(etiquetaLabel);
    elementoParrafo.appendChild(elementoInput);

    return elementoParrafo;

}

function calcular(){
    let ventas = [];    
    let posicionVentas = 0;
    let elementosVentas= document.getElementById('container');

    for(let item of elementosVentas.children){
        let valorVenta = extraerNumero(item.children[1]);
        ventas[posicionVentas]= valorVenta;
        posicionVentas += 1; 
    }


    let totalVentas = sumarVentas(ventas);

    let mensaje = "El total de ventas del dia es: " + totalVentas;

    let elementoMensaje = document.getElementById('mostrarTexto');
    elementoMensaje.textContent = mensaje;

}


function sumarVentas(array){    
          
    let total = 0;
    for(let venta of array){
        total += venta;
    }    
    console.log(total);
    return total;
}

function extraerNumero(elemento){    
    let miTexto = elemento.value;
    let miNumero = Number(miTexto);

    return miNumero;

}


