let contenedor = document.getElementById("listaUsuarios");

const listaUsuarios = fetch("https://jsonplaceholder.typicode.com/users")
.then ((respuesta) => respuesta.json())
.then((data) => { 
    const nuevoUsuario = data.map(usuario => {
        return {...usuario, 
        edad: Math.round(Math.random() * (100 - 1) + 1),
        direccion : `${usuario.address.street}, ${usuario.address.suite}, ${usuario.address.city}`
    }
    })
    
    nuevoUsuario.forEach ((element,i) => {
    let mostrarUsuarios = 
    `<div class="usuarios">
            <div class="nombreImagen">
                <img src="assets/img/${element.id}.jpeg" alt="${element.name}"/>
                <div class="datosPersonales">
                    <p><b>Nombre:</b> ${element.name}</p>
                    <p><b>Edad:</b> ${element.edad}</p>
                    <p><b>Username:</b> ${element.username}</p>
                    <p><b>Telefono:</b> ${element.phone}</p>
                    <p><b>Email:</b> ${element.email}</p>
                </div>
            </div>
            <div class="compania">
                <p><b>Compañia:</b> ${element.company.name}</p>
                <p><b>Dirección:</b> ${element.direccion}</p>
            </div>
        </div>`
    
        contenedor.innerHTML += mostrarUsuarios
        })  
    })