import{ barcelona,roma,paris,londres} from'./ciudades.js'
let enlaces=document.querySelectorAll('a')
let tituloElmento=document.getElementById('titulo')
let subTituloElmento=document.getElementById('subtitulo')
let parrafoElmento=document.getElementById('parrafo')

enlaces.forEach(function(enlace){
    enlace.addEventListener('click', function(){
        enlaces.forEach(function(enlace){
            enlace.classList.remove('active');
        });
        this.classList.add('active')
        let contenido =obtenercontenido(this.textContent)
        tituloElmento.innerHTML=contenido.titulo
        subTituloElmento.innerHTML=contenido.subtitulo
        parrafoElmento.innerHTML=contenido.parrafo
    });
});
function obtenercontenido(enlace){
    let contenido={
        'Barcelona': barcelona,
        'Roma':roma,
        'Paris':paris,
        'Londres':londres
    };
    return contenido[enlace];
}