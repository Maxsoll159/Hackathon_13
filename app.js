let perros = [
    {
        id: 0,
        nombre: "Perro0",
        telefono: 98054651,
        corre: "sad@hotmail.es",
        descripcion: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Providentaccusantium iure aliquam tempore alias Aut facere quod magni sunt neque laboriosam minima assumenda cumque atque Porro consecteturharum similique rem",
        img : "perro.jpg",
    },
    {
        id: 1,
        nombre: "Perro1",
        telefono: 98054651,
        corre: "lu@hotmail.com",
        descripcion: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Providentaccusantium iure aliquam tempore alias Aut facere quod magni sunt neque laboriosam minima assumenda cumque atque Porro consecteturharum similique rem",
        img : "perro.jpg",
    },
    {
        id: 2,
        nombre: "Perro2",
        telefono: 98054651,
        corre: "sa@hotmail.es",
        descripcion: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Providentaccusantium iure aliquam tempore alias Aut facere quod magni sunt neque laboriosam minima assumenda cumque atque Porro consecteturharum similique rem",
        img : "perro.jpg",
    },
    {
        id: 3,
        nombre: "Perro3",
        telefono: 98054651,
        corre: "el@hotmail.es",
        descripcion: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Providentaccusantium iure aliquam tempore alias Aut facere quod magni sunt neque laboriosam minima assumenda cumque atque Porro consecteturharum similique rem",
        img : "perro.jpg",
    },
    {
        id: 4,
        nombre: "Perro4",
        telefono: 98054651,
        corre: "ud@hotmail.es",
        descripcion: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Providentaccusantium iure aliquam tempore alias Aut facere quod magni sunt neque laboriosam minima assumenda cumque atque Porro consecteturharum similique rem",
        img : "perro.jpg",
    },
    {
        id: 5,
        nombre: "Perro5",
        telefono: 98054651,
        corre: "oe@hotmail.es",
        descripcion: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Providentaccusantium iure aliquam tempore alias Aut facere quod magni sunt neque laboriosam minima assumenda cumque atque Porro consecteturharum similique rem",
        img : "perro.jpg",
    },
    {
        id: 6,
        nombre: "Perro6",
        telefono: 98054651,
        corre: "ga@hotmail.es",
        descripcion: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Providentaccusantium iure aliquam tempore alias Aut facere quod magni sunt neque laboriosam minima assumenda cumque atque Porro consecteturharum similique rem",
        img : "perro.jpg",
    }
]

perros.forEach(function (id){

    const padre = (document.getElementById("padre").innerHTML +=`
    <div class="hijo">
    <div>
            
            <p id="idPerro">${id.id}</p>
            </div>
            <section>   
              <img src="${id.img}" width="300" id="imagen" id="wens" />
              <h1>NOMBRE:${id.nombre}</h1>
              <h2>Telefono: ${id.telefono}</h2> 
              <h3>Correo:${id.corre}</h3>
              <p>
                ${id.descripcion}
              </p>
            </section>
            <footer>
            <button id= "eliminarPerro" name="hola" class="comprar btn btn-danger">ELIMINAR</button>
            
          </footer>
          </div>
    
    
    `);
    });

var maximo = 500;
var minimo = 0;
var idNuevo = Math.floor(Math.random()*((maximo+1)-minimo)+minimo);
  console.log(idNuevo);
var form = document.getElementById("form");
var nuevosad = document.getElementById("nuevo")
form.addEventListener("submit",agregarDatos );
function agregarDatos(e){
    e.preventDefault();
    let nombreNuevo = document.getElementById("nombreNuevo").value;
    let correoNuevo = document.getElementById("correoNuevo").value;
    let telefonoNuevo = document.getElementById("telefonoNuevo").value;
    let descripcionNuevo = document.getElementById("descripcionNuevo").value;
    let foto = document.createElement("foto");

    let nuevoArray = {
        id : idNuevo,
        nombre : nombreNuevo,
        telefono : telefonoNuevo,
        corre : correoNuevo,
        descripcion : descripcionNuevo,
        img: foto,
        
    }
    perros.push(nuevoArray);
    const qwe = [nuevoArray];
    console.log(qwe);
    qwe.forEach(function (id){
        const padre = (document.getElementById("padre").innerHTML +=`
        <div class="hijo">
        
                <p hidden id="idPerro">${id.id}</p>
                <section>   
                  <img src="" width="300" id="imagen" id="wens" />
                  <h1>NOMBRE:${id.nombre}</h1>
                  <h2>Telefono: ${id.telefono}</h2> 
                  <h3>Correo:${id.corre}</h3>
                  <p>
                    ${id.descripcion}
                  </p>
                </section>
                <footer>
                <button id= "eliminarPerro" class="comprar btn btn-danger">ELIMINAR</button>
                
              </footer>
              </div>
        
        
        `);
        });
};
const papa = document.getElementById("padre");
let titulo;
let idCaptura;
const eliminar = document.getElementById("eliminarPerro").onclick = function (){
    papa.addEventListener("click", (e) => {
        if (e.target.classList.contains("comprar")) {
            let titulo =
              e.target.parentElement.previousElementSibling
                .firstElementChild.textContent;
        }
        console.log(titulo);
        });

};




