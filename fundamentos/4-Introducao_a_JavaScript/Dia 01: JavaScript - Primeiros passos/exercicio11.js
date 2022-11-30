let INSS1 = 1556.94, INSS2 = 2594.92, INSS3 = 5189.82, INSS4 = 5189.82;

let IR1 = 1903.98, IR2 = 2826.65, IR3 = 3751.05, IR4 = 4664.68;

let exercicio = false;

let salario = 12000;

if (exercicio) {
    console.log('\nSalario Líquido = R$' + calcExercicio(salario) + '\n');
} else {
    console.log('\nSalario Líquido = R$' + calcCorreto(salario) + '\n');
}

function calcExercicio(salario) {
    // Calculo do INSS
    let salarioBase = 0;
    if (salario <= INSS1) {
        salarioBase = salario - salario*0.08;
    } else if (salario <= INSS2) {
        salarioBase = salario - salario*0.09;
    } else if (salario <= INSS3) {
        salarioBase = salario - salario*0.11;
    } else {
        salarioBase = salario - 570.88;
    }

    // Calculo do IR
    let salarioFinal = 0;
    if (salarioBase <= IR1) {
        salarioFinal = salarioBase;
    } else if (salarioBase <= IR2) {
        salarioFinal = salarioBase - salarioBase*0.075;
    } else if (salarioBase <= IR3) {
        salarioFinal = salarioBase - salarioBase*0.15;
    } else if (salarioBase <= IR4) {
        salarioFinal = salarioBase - salarioBase*0.225;
    } else {
        salarioFinal = salarioBase - salarioBase*0.275;
    }

    return salarioFinal;
}

function calcCorreto(salario) {
    // Calculo do INSS
    let salarioBase = 0;
    if (salario <= INSS1) {
        salarioBase = salario - salario*0.08;
    } else if (salario <= INSS2) {
        salarioBase = salario - salario*0.09;
    } else if (salario <= INSS3) {
        salarioBase = salario - salario*0.11;
    } else {
        salarioBase = salario - 570.88;
    }

    // Calculo IR
    let salarioFinal = salarioBase;
    if (salarioBase <= IR1) {
        return salarioFinal;
    }
    if ((salarioBase - IR1+0.01) >= 0 && (salarioBase - IR2) < 0) {
        salarioFinal = (salarioBase - IR1)*(1-0.075)+IR1;
    } else if (salarioBase - IR2+0.01 >= 0 && (salarioBase - IR3) < 0) {
        salarioFinal = (salarioBase - IR2)*(1-0.15)+(IR2 - IR1)*(1-0.075)+IR1;
    } else if (salarioBase - IR3+0.01 >= 0 && (salarioBase - IR4) < 0) {
        salarioFinal = (salarioBase - IR3)*(1-0.225)+(IR3 - IR2)*(1-0.15)+(IR2 - IR1)*(1-0.075)+IR1;
    } else {
        salarioFinal = (salarioBase - IR4)*(1-0.275)+(IR4 - IR3)*(1-0.225)+(IR3 - IR2)*(1-0.15)+(IR2 - IR1)*(1-0.075)+IR1;
    }
    
    return salarioFinal;
}