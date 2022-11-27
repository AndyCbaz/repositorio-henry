// objetos

function alumnos(nombre, apellido, curso){
    this.nombre = nombre  || 'Pepe';
    this. apellido = apellido;
    this. curso = curso;
    this.saludo = function(){
        return('Hola mi nombre es '+ this.nombre + ' ' + this.apellido + ' y estoy en ' + this.grado + 'de programación');
    }
}

var Andrés = new alumnos('Andrés','Bonilla','Primero');
console.log(Andrés.saludo());

/* keyword new 
 * crea un objeto vacio var obj = {}
 * invoca la funcion constructora con los parametros
 * y de ahi "bindea" (asigna un valor a this y lo designa como propiedad del objeto vacio)
 * returna el objeto creado*/