const htexto = document.getElementById("h-texo");
const btn1 = document.getElementById("bt1");

htexto.addEventListener("cambiotexto", evento => {
    console.log(evento.detail)
    htexto.innerText = evento.detail.texto;
    htexto.style.color = evento.detail.color;
})

function cambiarTexto(nuevotexto, color){
const evento = new CustomEvent("cambiotexto",{
    detail:{
        texto: nuevotexto,
        color
    }
})
htexto.dispatchEvent(evento)
}



btn1.addEventListener("click", evento =>{
    alert("Se ha clickeado el boton")
})