// Ejercicio 2
// Dada una matriz de N elementos repetidos,
// crea una función numbersTop para obtener los tres elementos más repetidos ordenados de forma descendente por número de repeticiones.

function numbersTop(array, showItems) {
    // showItems => cantidad de numero de items a mostrar en este caso el ejecricio pide 3

    var tmp = {}, newArray = [];
  
    // Create object with count of occurances of each array element
    array.forEach(function(item) {
        tmp[item] = tmp[item] ? tmp[item]+1 : 1;
    });
  
    // Create an array of the sorted object properties
    newArray = Object.keys(tmp).sort(function(val, index) { return tmp[val] - tmp[index] });
  
    // Return last showItems elements in reverse order (de forma descendente)
    return newArray.slice(-(showItems)).reverse();
}


/**
 * TEST Ejercicio 2
 */
numbersTop([3, 3, 1, 4, 1, 3, 1, 1, 2, 2, 2, 3, 1, 3, 4, 1]) // [ 1, 3, 2 ]
numbersTop(['a', 3, 2, 'a', 2, 3, 'a', 3, 4, 'a', 'a', 1, 'a', 2, 'a', 3]) // [ 'a', 3, 2 ]

/**
 * Results
 */
console.log(numbersTop([3, 3, 1, 4, 1, 3, 1, 1, 2, 2, 2, 3, 1, 3, 4, 1], 3));
console.log(numbersTop(['a', 3, 2, 'a', 2, 3, 'a', 3, 4, 'a', 'a', 1, 'a', 2, 'a', 3], 3));