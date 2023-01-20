// Ejercicio 1
// Dada una matriz de N elementos en la que todos los elementos son iguales excepto uno,
// crea una función findUniq que retorne el elemento único.

function findUniq(array) {
    return array.filter((value, index) => {
        return array.indexOf(value) === array.lastIndexOf(value);
    });
    //return [...new Set(array)];
}


/**
 * TEST Ejercicio 1
 */
findUniq(['12', 10, '12', 11, 1, 11, 10, '12']) // 1
findUniq(['Capitán América', 'Hulk', 'Deadpool', 'Capitán América', 'Hulk', 'Wonder Woman', 'Deadpool', 'Iron Man', 'Iron Man']) // 'Wonder Woman'

/**
 * Results
 */
console.log(findUniq(['12', 10, '12', 11, 1, 11, 10, '12']));
console.log(findUniq(['Capitán América', 'Hulk', 'Deadpool', 'Capitán América', 'Hulk', 'Wonder Woman', 'Deadpool', 'Iron Man', 'Iron Man']));