function validarNombre(nombre) {
    if (nombre.length === 0) {
        return 'Este campo debe contener al menos un caracter'
    }
    if (nombre.length >= 50) {
        return 'Este campo debe tener menos de 50 caracteres'
    }
    //el signo + en la expresion regular indica por lo menos uno
    if (/^[A-z]+( [A-z]+)?$/.test(nombre) === false) {
        return 'El nombre solo puede contener letras de la A a la Z'
    }

    return '';
}

function validarCiudad(ciudad) {
    if (ciudad === "") {
        return 'Este campo no puede estar vacio, seleccione un ciudad'
    }
    return '';
}

function validarDescripcionRegalo(descripcionRegalo) {
    if (descripcionRegalo.length === 0) {
        return 'Este campo debe contener como minimo un caracter'
    }

    if (descripcionRegalo.length >= 100) {
        return 'Este campo no puede contener mas de 100 caracteres'
    }

    if (/^[A-z0-9 ,\.]+$/.test(descripcionRegalo) === false) {
        return 'Este campo solo puede contener letras numeros espacios comas y numeros'
    }

    return '';
}

function validarFormulario(event) {
    borrarErroresAnteriores();
    const $form = document.querySelector('#carta-a-santa');
    const errorNombre = validarNombre($form.nombre.value);
    const errorCiudad = validarCiudad($form.ciudad.value);
    const errorDescripcionRegalo = validarDescripcionRegalo($form['descripcion-regalo'].value);

    const errores = {
        nombre: errorNombre,
        ciudad: errorCiudad,
        'descripcion-regalo': errorDescripcionRegalo
    }

   const er= manejarErrores(errores);
   console.log(er)

    event.preventDefault();

}

function borrarErroresAnteriores() {
    document.querySelector('#errores').innerHTML = '';
}

function manejarErrores(errores) {
    let cantErrores = 0
    keysErrores = Object.keys(errores);
    keysErrores.forEach(function (key) {
        //como dentro del if tenemos que acceder a cada uno de los elementos del form, es muy importante que cuando definimos el objeto errores sus keys coincidan exactamente con el name del elemento en el formulario 
        if (errores[key] != '') {
            cantErrores++;
            $form[key].className = 'error';
            //vamos a agregar li con la descripcion del error dentro de la etiqueta ul con id= errores definida en index.html

            const $nuevoLi = document.createElement('li');
            $nuevoLi.name = key;
            $nuevoLi.innerText = errores[key];
            const $nuevoError = document.querySelector('#errores');
            $nuevoError.appendChild($nuevoLi);

        } else {
            $form[key].className = '';

        }
          

    });
    return cantErrores;

}

const $form = document.formulario;
$form.onsubmit = validarFormulario;
