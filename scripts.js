class Paquetes {

    constructor(id, producName, noches, jornadas, comidas, capacidad, precio) {
        this.id= id;
        this.productName = producName;
        this.noches = noches;
        this.jornadas = jornadas;
        this.comidas = comidas;
        this.capacidad = capacidad;
        this.precio = precio;



    }

    // getsaleinfo() {
    //     // this.productName + " - " + this.noches + " Noches - " + this.jornadas + " Jornadas - " + this.comidas + " Incluye COmida - " + this.capacidad + " Personas Capacidad - " + this.precio + "$" ).toUpperCase ()
    //     return (
    //         contenedor.innerHTML = `<div class="p-3 m-5 text-center container" >
    //           <h3>${this.productName}</h3>
    //           <p>Noches - ${this.noches}</p>
    //           <p>Jornadas - ${this.jornadas}</p>
    //           <p>Comidas - ${this.comidas}</p> 
    //           <p>Capacidad - ${this.capacidad}</p>
    //           <p>Precio - $ ${this.precio}</p>

    //         </div>`
    //     );
    // }

}
// let contenedor = document.querySelector('.contenedor');
let paquete1 = new Paquetes("1", "Cayasta", "3", "2", "si", 6, 20000);
let paquete2 = new Paquetes("2", "Esquina", "4", "3", "no", 4, 35000);
let paquete3 = new Paquetes("3", "Amazonas", "10", "5", "si", 12, 250000);

// let cayasta = 20000
// let esquina = 35000
// let amazonas = 250000



const salidas = [];

salidas.push(paquete1);
salidas.push(paquete2);
salidas.push(paquete3);
let paquete0 = new Paquetes("0", "Santa Elena", "3", "2", "si", 4, 15000);
salidas.unshift(paquete0);


$( document ).ready(function(){
            for (let salida of salidas){

                $("#lista").append(`
                <li class="m-3"> ${salida.productName} <button class="btn btn-info" id="btn${salida.id}"> Mostrar Info </button> </li>
                `);
                $(`#btn${salida.id}`).on("click",function(){      
                    $(".contenedor").empty();
                    $(".contenedor").append(`<div class="p-3 m-5 text-center container" >
                   
                    <h3>${salida.productName}</h3>
                    <p>Noches - ${salida.noches}</p>
                    <p>Jornadas - ${salida.jornadas}</p>
                    <p>Comidas - ${salida.comidas}</p> 
                    <p>Capacidad - ${salida.capacidad}</p>
                    <p>Precio - $ ${salida.precio}</p>
      
                  </div>
                    `)
                   


                })
            }

});

//let ciudades_pesca = ["Cayasta", "Helvecia", "Santa Elena", "La Paz", "San Javier", "Esquina", "Alejandra"];
//console.log("ciudades para pesca" + ciudades_pesca);
//console.log("ciudades ordenadas alfabeticamente" + ciudades_pesca.sort());


// paquete0.getsaleinfo();
// paquete1.getsaleinfo();
// paquete2.getsaleinfo();
// paquete3.getsaleinfo();



// let service = prompt("").toLowerCase();

// btn1 = document.querySelector('.btn1');
// btn2 = document.querySelector('.btn2');
// btn3 = document.querySelector('.btn3');
// btn4 = document.querySelector('.btn4');

// btn1.addEventListener('click', mostrarPaquete);
// btn2.addEventListener('click', mostrarPaquete1);
// btn3.addEventListener('click', mostrarPaquete2);
// btn4.addEventListener('click', mostrarPaquete3);

// function mostrarPaquete (){
  
//         contenedor.innerHTML= "";
//         paquete0.getsaleinfo();
    

// }
// function mostrarPaquete1 (){
  
//     contenedor.innerHTML= "";
//     paquete1.getsaleinfo();


// }
// function mostrarPaquete2 (){
  
//     contenedor.innerHTML= "";
//     paquete2.getsaleinfo();


// }
// function mostrarPaquete3 (){
  
//     contenedor.innerHTML= "";
//     paquete3.getsaleinfo();


// }


// switch (service) {
//     case "cayasta":
//         alert("Adquiriste Cayasta")
//         var operation = prompt("Esta Seguro que va a realizar la transaccion? si o no ");
//         let result;
//         switch (operation) {

//             case "si":
//                 var cuotas = parseInt(prompt("ingrese cantidad de cuotas"));
//                 result = cayasta / cuotas;
//                 alert("el valor de las cuotas abonar son: $ " + result + " durante " + cuotas + " meses")
//                 break;

//             case "no":
//                 alert("lo esperamos en otro momento");
//                 break;





//             case "esquina":
//                 alert("compraste esquina")

//                 break;
//             case "amazonas":
//                 alert("compraste amazonas")
//                 break;
//             case "":
//                 alert("no elegiste nada")
//                 break;

//             default:
//                 alert("debe elegir un paquete");
//         }
// }
