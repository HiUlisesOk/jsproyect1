//Crea un archivo llamado objetos.js que contenga las siguientes líneas

//Un objeto con tus datos personales (nombre, apellido, edad, altura, eresDesarrollador)
const personalData = {nombre:"Ulises", apellido: "Esquivel", edad: 27, altura: 165, eresDesarrollador: true}

//Una variable que obtenga tu edad a partir del objeto anterior
const edad = personalData.edad;

//Una lista que contenga el objeto con tus datos personales 
//y un nuevo objeto con los datos personales de tus dos mejores amig@s
var listaPdata = [personalData, {nombre:"Martin", apellido: "Ocampo", edad: 45, altura: 180, eresDesarrollador: false},
{nombre:"Matias", apellido: "Gomez", edad: 27, altura: 178, eresDesarrollador: false}]
//Una nueva lista con los objetos de la lista anterior ordenados por edad, de mayor a menor

const pdataOL = listaPdata.sort((a,b) => {
    
    if (a.edad > b.edad){
        return -1;
    } else if (a.edad < b.edad) {return 1}
    else {return 0}
})
console.log(pdataOL) 