    // 1
    // Executando esse código iremos receber um erro `TypeError: Assignment to constant variable.`
    const pessoa = {
        nome: 'Henri',
        idade: 20
    }
    const pessoa2 = {
        nome: 'Luna',
        idade: 19
    } // Altere essa estrutura para corrigir o erro.
    console.log('Nome:', pessoa.nome);
    console.log('Idade:', pessoa.idade);

    // 2
    function numeroAleatorio() {
        return Math.random()
    }
    console.log(numeroAleatorio());

    const arrowNumeroAleatorio = () => Math.random();

    console.log(`Arrow: ${arrowNumeroAleatorio()}`);

    // 3
    function hello(nome) {
        return `Olá, ${nome}!`
    }
    let nome = 'Ivan';
    console.log(hello(nome));

    const arrowHello = (nome) => `Olá, ${nome}!`;
    console.log(`Arrow: ${arrowHello(nome)}`);

    // 4

    function nomeCompleto(nome, sobrenome) {
        return `${nome} ${sobrenome}`
    }

    let sobrenome = 'Pires';
    console.log(nomeCompleto(nome, sobrenome));

    const arrowNomeCompleto = (nome,sobrenome) => `${nome} ${sobrenome}`;
    console.log(`Arrow ${arrowNomeCompleto(nome,sobrenome)}`);

    // 5

    let speed = 90;
    const speedCar = (speed) => {
      if (speed >= 120) {
        return `Você ultrapassou o limite de velocidade`;
      } else {
        return `Você está na velocidade permitida`;
      }
    };
    console.log(speedCar(speed));

    const ternarySpeedCar = (speed >= 120) ? `Você ultrapassou o limite de velocidade` : `Você está na velocidade permitida`;

    console.log(`Ternary ${ternarySpeedCar}`);