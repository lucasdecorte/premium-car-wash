// ===============================
// ANIMACIONES AL HACER SCROLL
// ===============================


const elementos = document.querySelectorAll(
    ".tarjeta-servicio, .beneficio, .opinion, .pregunta, .galeria-contenedor img"
);



function mostrarElementos(){

    const alturaPantalla = window.innerHeight;


    elementos.forEach(elemento => {


        const posicion = elemento.getBoundingClientRect().top;



        if(posicion < alturaPantalla - 100){

            elemento.classList.add("animar");


            setTimeout(()=>{

                elemento.classList.add("visible");

            },100);


        }


    });


}



window.addEventListener("scroll", mostrarElementos);

mostrarElementos();





// ===============================
// CAMBIO DE HEADER AL SCROLL
// ===============================


const header = document.querySelector(".header");



window.addEventListener("scroll",()=>{


    if(window.scrollY > 50){


        header.style.background = "rgba(0,0,0,0.85)";


    }else{


        header.style.background = "rgba(0,0,0,0.35)";


    }



});





// ===============================
// CONTADORES ANIMADOS
// ===============================


const numeros = document.querySelectorAll(".estadistica h2");



let iniciado = false;



function contador(){


    const seccion = document.querySelector(".estadisticas");


    const posicion = seccion.getBoundingClientRect().top;



    if(posicion < window.innerHeight - 100 && !iniciado){


        numeros.forEach(numero=>{


            let objetivo = numero.innerText;


            let valor = parseInt(objetivo);



            if(!isNaN(valor)){


                let actual = 0;


                let tiempo = setInterval(()=>{


                    actual += Math.ceil(valor / 50);


                    if(actual >= valor){


                        actual = valor;

                        clearInterval(tiempo);


                    }



                    if(objetivo.includes("+")){


                        numero.innerText = "+" + actual;


                    }else{


                        numero.innerText = actual + "%";


                    }



                },30);



            }



        });



        iniciado = true;


    }


}



window.addEventListener("scroll",contador);






// ===============================
// BOTÓN ESCAPE / LINKS
// ===============================


document.querySelectorAll("nav a").forEach(link=>{


    link.addEventListener("click",()=>{


        document.body.style.overflow = "auto";


    });


});

