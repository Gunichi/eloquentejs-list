//Escreva uma função min que recebe dois argumentos e retorna o menor deles.

function min(a, b) {
  if (a < b) { 
    return a;
  } else {
    return b;
  }
}

console.log(min(0, 10));
console.log(min(0, -20));

/*  
  Defina uma função recursiva isEven que satisfaça as condições descritas acima. Afunção deve aceitar um
  número como parâmetro e retornar um valor Booleano.
  Teste-a com os valores 50 e 75. Observe como ela se comporta com o valor -1. Por quê? Você consegue pensar
  em uma maneira de arrumar isso?
*/

function isEven(n) {
  if (n == 0) {
    return true;
  } else if (n == 1) {
    return false;
  } else if (n < 0) {
    return isEven(-n);
  } else {
    return isEven(n - 2);
  }
}

console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));


/* 
  Escreva uma função countBs que receba uma string como único argumento e retorna o número que indica
  quantos caracteres "B", em maiúsculo, estão presentes na string .
  Em seguida, escreva uma função chamada countChar que se comporta de forma parecida com countBs , exceto
  que ela recebe um segundo argumento que indica o caractere que será contado (ao invés de contar somente o
  caractere "B" em maiúsculo). Reescreva countBs para fazer essa nova funcionalidade.
  console.log(countBs(“BBC”));
    → 2
  console.log(countChar(“kakkerlak”, “k”));
    → 4
*/

function countBs(string) {
  let count = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] == "B") {
      count += 1;
    }
  }
  return count;
}

function countChar(string, char) {
  let count = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] == char) {
      count += 1;
    }
  }
  return count;
}

console.log(countBs("BBC"));
console.log(countChar("kakkerlak", "k"));

/*
  Escreva uma função chamada range que recebe dois argumentos, start (início) e end (fim), e retorna um array
  contendo todos os números a partir do valor start até o valor end (incluindo-o).
  Em seguida, escreva a função sum que recebe um array de números como argumento e retorna a soma desses
  números. Execute o programa anterior e veja se o resultado retornado é de fato 55.
  Como exercício bônus, modifique a sua função range para aceitar um terceiro argumento opcional que indica o
  tamanho do "incremento" usado para construir o array. Se nenhum valor for atribuído ao tamanho do incremento, o
  array de elementos será percorrido em incrementos de um, correspondendo ao comportamento original. A
  chamada à função range(1, 10, 2) deve retornar [1, 3, 5, 7, 9] . Certifique-se de que funcione também com
  valores negativos, fazendo com que range(5, 2, -1) produza [5, 4, 3, 2]
*/


function range(start, end, step = 1) {
  let array = [];
  if (step > 0) {
    for (let i = start; i <= end; i += step) {
      array.push(i);
    }
  } else {
    for (let i = start; i >= end; i += step) {
      array.push(i);
    }
  }
  return array;
}

function sum(array) {
  let total = 0;
  for (let value of array) {
    total += value;
  }
  return total;
}

console.log(range(1, 10));
console.log(range(5, 2, -1));
console.log(sum(range(1, 10)));

/*
escreva duas funções: reverseArray e reverseArrayInPlace . Aprimeira ( reverseArray ) recebe
um array como argumento e produz um novo array que tem os mesmos elementos com ordem inversa. A
segunda ( reverseArrayInPlace ) funciona da mesma forma que o método reverse , só que nesse caso, invertendo
os elementos do próprio array que foi fornecido como argumento. Ambas as funções não devem usar o método
padrão reverse .
Levando em consideração as notas sobre efeitos colaterais e funções puras do capítulo anterior, qual versão você
espera que seja útil em mais situações? Qual delas é mais eficiente?
*/

function reverseArray(array) {
  let output = [];
  for (let i = array.length - 1; i >= 0; i--) {
    output.push(array[i]);
  }
  return output;
}

function reverseArrayInPlace(array) {
  for (let i = 0; i < Math.floor(array.length / 2); i++) {
    let old = array[i];
    array[i] = array[array.length - 1 - i];
    array[array.length - 1 - i] = old;
  }
  return array;
}

console.log(reverseArray(["A", "B", "C"]));
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);

/*
  Escreva uma função chamada arrayToList que constrói uma lista a partir de um array. Também escreva uma
  função chamada listToArray que cria um array a partir de uma lista. Em seguida, escreva a função
  prepend , que recebe um elemento e uma lista como argumentos e cria uma nova lista que adiciona o elemento
  no início da lista dada. Por fim, escreva a função nth , que recebe uma lista e um número como argumentos e
  retorna o elemento na posição especificada na lista (ou undefined , caso a lista não tenha um elemento nessa
  posição).
  Se você se sentir confortável com o nível de recursividade, tente escrever a função recursiva
  nth .
*/

function arrayToList(array) {
  let list = null;
  for (let i = array.length - 1; i >= 0; i--) {
    list = { value: array[i], rest: list };
  }
  return list;
}

function listToArray(list) {
  let array = [];
  for (let node = list; node; node = node.rest) {
    array.push(node.value);
  }
  return array;
}

function prepend(value, list) {
  return { value, rest: list };
}

function nth(list, n) {
  if (!list) return undefined;
  else if (n == 0) return list.value;
  else return nth(list.rest, n - 1);
}

console.log(arrayToList([10, 20]));
console.log(listToArray(arrayToList([10, 20, 30])));
console.log(prepend(10, prepend(20, null)));
console.log(nth(arrayToList([10, 20, 30]), 1));

/*
  Escreva uma função chamada deepEqual que receba dois valores e retorne true apenas se forem o mesmo
  valor ou se forem objetos com as mesmas propriedades, onde os valores de propriedades correspondentes
  devem ser comparados com uma chamada recursiva de deepEqual .
  Para determinar se os dois valores devem ser comparados diretamente (usando o operador === ) ou
  comparados recursivamente, você pode usar a função typeof . Se ela retornar "object" para ambos os valores,
  você deve fazer uma comparação recursiva. Mas tenha cuidado para não entrar em um loop infinito
  caso os objetos sejam de propriedades circulares, como no exemplo a seguir:
*/

function deepEqual(a, b) {
  if (a === b) return true;

  if (a == null || typeof a != "object" || b == null || typeof b != "object") return false;

  let keysA = Object.keys(a),
    keysB = Object.keys(b);

  if (keysA.length != keysB.length) return false;

  for (let key of keysA) {
    if (!keysB.includes(key) || !deepEqual(a[key], b[key])) return false;
  }

  return true;
}

let obj = { here: { is: "an" }, object: 2 };
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, { here: 1, object: 2 }));
// → false
console.log(deepEqual(obj, { here: { is: "an" }, object: 2 }));
// → true


