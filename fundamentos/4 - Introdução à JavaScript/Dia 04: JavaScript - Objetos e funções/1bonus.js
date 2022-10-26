const algRom = [['I',1],['IV',4],['V',5],['IX',9],['X',10],['XL',40],['L',50],['XC',90],['C',100],['CD',400],['D',500],['CM',900],['M',1000]];

// const algObj = {'I': 1, 'IV': 4, 'IX': 9, 'X': 10, 'XL': 40, 'L': 40, 'XC': 90, 'C': 100, 'CD': 400, 'D': 500, 'CM':900, 'M':1000 };

// console.log(algObj); // For debugging

let valorRom = 'MMDCDXII';

function calcRomanos(base, romanos) {
    let valorReal = 0, concat = '';
    for (let i = 0; i < romanos.length; i += 1) {
        for (let j = 0; j < base.length; j += 1) {
            if (romanos[i][0] == base[j][0]) {
                if (i < romanos.length - 1) {
                    concat = romanos[i] + romanos[i + 1];
                } else {
                    concat = romanos[i];
                }
                if (j < base.length - 1) {
                    if (concat == base[j + 1][0]) {
                        valorReal += base[j + 1][1];
                        i += 1;
                        break;
                    } else if (romanos[i][0] == base[j][0]) {
                        valorReal += base[j][1];
                        break;
                    }
                } else if (romanos[i][0] == base[j][0]) {
                    valorReal += base[j][1];
                    break;
                }
            } 
        }
    }
    return valorReal;
}

console.log(calcRomanos(algRom,valorRom));





// | I   | 1    |
// | --- | ---- |
// | IV  | 4    |
// | V   | 5    |
// | IX  | 9    |
// | X   | 10   |
// | XL  | 40   |
// | L   | 50   |
// | XC  | 90   |
// | C   | 100  |
// | CD  | 400  |
// | D   | 500  |
// | CM  | 900  |
// | M   | 1000 |