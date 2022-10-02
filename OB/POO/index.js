class Estudiante {
    nombre;
    asignaturas;
    constructor(nombre){
        this.nombre = nombre;
        this.asignaturas = ["Javascript", "HTML", "CSS"];
    }
    obtenDatos(){
        return `${this.nombre} : ${this.asignaturas}`
    }
}

const estudiante1 = new Estudiante("Miguel");

console.log(estudiante1.obtenDatos())