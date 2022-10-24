const angulo1 = -80, angulo2 = 45, angulo3 = 45;

if (angulo1 < 0 || angulo2 < 0 || angulo3 < 0) {
    console.log('ângulo inválido');
} else if (angulo1 + angulo2 + angulo3 == 180) {
    console.log(true);
} else {
    console.log(false);
}