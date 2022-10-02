// Una variable que contenga la lista de la compra (mínimo 5 elementos)
var compras = ["Leche", "Pan", "Azucar", "Yerba", "Yogurt"]

// Modifica la lista de la compra y añádele "Aceite de Girasol"
compras.push("Aceite de Girasol");

// Vuelve a modificar la lista de la compra eliminando "Aceite de Girasol"
compras.pop();

// Una lista de tus 3 películas favoritas
//(objetos con propiedades: titulo, director, fecha)
var pelis = [
{titulo: "Forrest Gump" , director: "Robert Zemeckis" , fecha:new Date("october 6 1994") },
{titulo: "El padrino" , director: "Francis Ford Coppola" , fecha: new Date("September 20 1972")},
{titulo: "Iron man 3" , director: "Jon Favreau" , fecha: new Date("April 4 2018")}
]

// Una nueva lista que contenga las películas posteriores al 1 de enero de 2010 
//(utilizando filter)
var pelisPost2010 = pelis.filter(v =>v.fecha < new Date("Jan 1 2010"));

// Una nueva lista que contenga los directores de la lista de películas original
//(utilizando map)
var directores = pelis.map(v => v.director)

// Una nueva lista que contenga los títulos de la lista de películas original
//(utilizando map)
var titulos = pelis.map(v => v.titulo)

// Una nueva lista que concatene la lista de directores y la lista de los títulos
//(utilizando concat)
var listaConcatenada = directores.concat(titulos); 

// Una nueva lista que concatene la lista de directores y la lista de los títulos 
//(utilizando el factor de propagación)
var listafactordeprop = [...directores, ...titulos];