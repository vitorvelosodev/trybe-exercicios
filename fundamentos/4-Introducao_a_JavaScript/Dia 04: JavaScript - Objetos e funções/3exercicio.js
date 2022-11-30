let palavra = 'arara';

function verificaPalindrome(p) {
    let reverse = '', n = p.length - 1;
    for (let i = 0; i < p.length; i += 1) {
        reverse += p[n - i];
    }
    // console.log(reverse);
    if (p == reverse) {
        return true;
    } else {
        return false;
    }
}

console.log(verificaPalindrome(palavra)); // true

function retIndMaiorVal(arr) {
    let bigger = arr[0], index = 0;
    for (let i = 1; i < arr.length; i += 1) {
        if (arr[0] < arr[i]) {
            bigger = arr[i];
            index = i;
        }
    }
    return index;
}

console.log(retIndMaiorVal([2, 3, 6, 7, 10, 1])); // 4

function retIndMenorVal(arr) {
    let bigger = arr[0], index = 0;
    for (let i = 1; i < arr.length; i += 1) {
        if (arr[0] > arr[i]) {
            bigger = arr[i];
            index = i;
        }
    }
    return index;
}

console.log(retIndMenorVal([2, 4, 6, 7, 10, 0, -3])); // 6

function maiorLengthWord(p) {
    let bigger = p[0];
    for (let i = 1; i < p.length; i += 1) {
        if (p[i].length > bigger.length) {
            bigger = p[i];
        }
    }
    return bigger;
}

console.log(maiorLengthWord(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'])); // Fernanda

function maisRep(int) {
    let rep = 1, repmax = 1; intRep = int[0];
    for (let i = 0; i < int.length; i += 1) {
        rep = 1;
        for (let j = 0; j < int.length; j += 1) {
            if (i == j) {
                j += 1;
            }
            if (int[i] == int[j]) {
                rep += 1;
            }
        }
        if (rep > repmax) {
            repmax = rep;
            intRep = int[i];
        }
    }
    return intRep;
}

console.log(maisRep([2, 3, 2, 5, 8, 2, 3])); // 2

function somaTodos(n) {
    let sum = 0;
    for (i = 1; i <= n; i += 1) {
        sum += i;
    }
    return sum;
}

console.log(somaTodos(5)); // 15

function finalPalavra(word, ending) {
    let lengEnding = ending.length;
    if (lengEnding > word.length) {
        return Error;
    }
    let breakWord = word.slice((word.length - lengEnding));

    if (breakWord == ending) {
        return true;
    } else {
        return false;
    }
}

console.log(finalPalavra('joaofernando','nando')); // True
