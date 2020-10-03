function probarValidarNombre() {
  console.assert(
      validarNombre('') === 'Este campo debe contener al menos un caracter',
      'Validar nombre no validó que el nombre no sea vacío',
  );

  console.assert(
      validarNombre(
          '01234567890123456789012345678901234567890123456789') ===
          'Este campo debe tener menos de 50 caracteres',
      'Validar nombre no validó que el nombre sea menor a 50 caracteres',
  );

  console.assert(
      validarNombre('Sofia') === '',
      'Validar nombre fallo porque no aceptó un nombre valido'
  )
}

probarValidarNombre();

function probarValidarCiudad(){
    console.assert(
        validarCiudad ('') === 'Este campo no puede estar vacio, seleccione un ciudad',
        'Validar ciudad no valido que la ciudad NO sea vacia'
    )

    console.assert(
        validarCiudad('Chaco')=== '',
        'Validar Ciudad fallo porque no aceptó un nombre de ciudad valido'
    )

}

probarValidarCiudad();

function probarValidarDescripcionRegalo() {
    
    console.assert(
        validarDescripcionRegalo('') === 'Este campo debe contener como minimo un caracter',
        'validar descripcion regalo fallo porque permitio que se ingrese una descripcion vacia'
    );
    
    console.assert(
        validarDescripcionRegalo('0123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789') === 'Este campo no puede contener mas de 100 caracteres', 
        'Validar descripción regalo fallo porque permite que se increse una descripción con mas de cien caracteres'

    )
    console.assert(
        validarDescripcionRegalo('soy_ una? descripicion- con caracteres no admitidos$$$') === 'Este campo solo puede contener letras numeros espacios comas y numeros',
        'Validar descripcion regalo fallo porque acepto una descripcion con caracteres no permitidos'
    )
    console.assert(
        validarDescripcionRegalo('Quiero un regalo grande, lindo y bonito. Por favor') === '',
        'Validar descripción fallo porque no acepto una descripcion válida'
    )
}

probarValidarDescripcionRegalo();
