let contador = 0
function agregar() {
    contador =  contador + 1;
 
    let nombre = document.getElementById('id_nombre').value;
    let apellido = document.getElementById('id_apellido').value;


    if (contador === 1) {
        document.getElementById(`fila1`).innerHTML = `<tr ><td>${nombre}</td><td> ${apellido}</td></tr>`
    }
    if (contador === 2) {
        document.getElementById(`fila2`).innerHTML = `<tr ><td>${nombre}</td><td> ${apellido}</td></tr>`
    }
    if (contador === 3) {
        document.getElementById(`fila3`).innerHTML = `<tr ><td>${nombre}</td><td> ${apellido}</td></tr>`
    }
    if (contador === 4) {
        document.getElementById(`fila4`).innerHTML = `<tr ><td>${nombre}</td><td> ${apellido}</td></tr>`
    }


}

