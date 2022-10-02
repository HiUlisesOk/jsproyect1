//Crea un archivo JS que contenga las siguientes líneas
// Una función sin parámetros que devuelva siempre "true"
//siempreTrue = () => true;


// Una función asíncrona que utilice un setTimeout y pase por consola un "Hola soy una promesa"
// 5 segundos después de haberse ejecutado
var crearpromesa = () => {
const promiseSTO = new Promise ((resolve, reject) => {
setTimeout(() => {
   resolve(console.log("Hola soy una promesa")) 
}, 5000);
})
}
// Una función generadora de índices pares automáticos
function* generarIndex(){
    let index = 2;
    while(true){
        yield index;
        index += 2 ;
    }
}
const findexGen = generarIndex();

console.log(findexGen.next())
console.log(findexGen.next())
console.log(findexGen.next())
console.log(findexGen.next())
console.log(findexGen.next())
console.log(findexGen.next())
console.log(findexGen.next())
console.log(findexGen.next())
console.log(findexGen.next())
console.log(findexGen.next())
console.log(findexGen.next())
console.log(findexGen.next())
console.log(findexGen.next())
console.log(findexGen.next())
console.log(findexGen.next())
console.log(findexGen.next())
console.log(findexGen.next())
console.log(findexGen.next())