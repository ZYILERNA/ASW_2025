console.log("Apartado 1 – Definición de la clase y propiedades");

function País(nombre, poblacion, area, ciudades) {
    this.nombre = nombre;
    this.poblacion = poblacion;
    this.area = area;
    this.ciudades = ciudades;
}
console.log("Apartado 2 – Métodos con operadores básicos y acumulativos");

País.prototype.incrementarPoblacion = function(cantidad) {
    this.poblacion += cantidad;
};


País.prototype.densidad = function() {
    return this.poblacion / this.area;
    //otra manera de hacerlo
    //let densidad = this.poblacion;
    //return densidad /= this.area;
}

console.log("Apartado 3 – Operadores comparativos y ternario");

País.prototype.compararArea = function(otroPais) {
   return  this.area > otroPais.area 
   ? `${this.nombre} es más grande que el ${otroPais.nombre}` 
   : `${this.nombre} es más pequeño que el ${otroPais.nombre}`;
}

console.log("Apartado<croissants 4 – Trabajo con listas y bucles anidados");


País.prototype.mostrarCiudades = function() {
    for (let i = 0; i < this.ciudades.length; i++) {
        console.log(this.ciudades[i]);                                                                                                                      
    }
}

País.prototype.mostrarCiudadesPorLetra = function() {
    for (let i = 0; i < this.ciudades.length; i++) {
        //Dentro, recorre las letras de cada ciudad y las muestre una a una.
        for (let j = 0; j < this.ciudades[i].length; j++) {
            console.log(this.ciudades[i][j]);
        }
    }
}

console.log("Apartado 5 – Prueba del código");

const pais1 = new País("España", 1000, 2000, ["Barcelona", "Madrid", "Valencia"]);
const pais2 = new País("Francia", 1000, 4000, ["Paris", "Lyon", "Marseille"]);


pais1.incrementarPoblacion(200);
console.log(pais1.poblacion);
console.log(pais1.densidad());
console.log(pais1.compararArea(pais2));
console.log("Ciudades de España:");
pais1.mostrarCiudades();
console.log("Letras de las ciudades de España:")
pais1.mostrarCiudadesPorLetra();
 