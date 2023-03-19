alert("Weedle Salvaje ha aparecido!");
let pokemon1 = +prompt("Elige un pokemon: 1: Pikachu  2: Charmander  3: Bulbasaur");
let pokemon2 = 'Charmander';
let pokemon3 = 'Bulbasour';
let life = 100;
let attack = 30;
let weedleLife = 100;
let weedleAttack= 15;
let pokemones = ['Squirtle',' Metapod',' Pidgey',' Ekans',' Sandshrew',' Nidorino',' Raticate',' Pidgeot',' Wigglytuff',' Beedrill'];

let pokemons = {
    tipo: 'Fuego',
    ataque: 43,
    nombre: 'Pidgeotto'
};

if (pokemon1 === 1) {
    pokemon1 = 'Pikachu';
    alert(pokemon1 + " Yo te elijo!!!");
    alert("Derrota al Enemigo ! !");

    let firstAttack = +prompt("Elige un ataque: 1: Impactrueno  2: Gruñido  3: Ataque Rápido");

    switch (firstAttack) {
        case 1: alert('Pikachu usa Impactrueno')
            break;
        case 2: alert('Pikachu usa Gruñido')
            break;
        case 3: alert('Pikachu usa Ataque Rápido')
            break;
        default:
            alert('Pikachu queda dormido');
            break;
    }
   atacar(pokemon1);

} else if (pokemon1 === 2) {
    pokemon1 = pokemon2;
    alert(pokemon2 + " Yo te elijo!!!")
    alert("Derrota al Enemigo ! !");
    let firstAttack = +prompt("Elige un ataque: 1: Pantalla de Humo  2: Furia Dragón  3: Ascuas");
    switch (firstAttack) {
        case 1: alert('Charmamder usa Pantalla de Humo')
            break;
        case 2: alert('Charmamder usa Furia Dragón')
            break;
        case 3: alert('Charmamder usa Ascuas')
            break;
        default:
            alert('Charmander queda dormido');
            break;
    }
    atacar(pokemon2);

} else {
    pokemon1 = pokemon3;
    alert(pokemon3 + " Yo te elijo!!!")
    alert("Derrota al Enemigo ! !");
    let firstAttack = +prompt("Elige un ataque: 1: Placaje  2: Drenadoras  3: Látigo Cepa");
    switch (firstAttack) {
        case 1: alert('Bulbasour usa Placaje')
            break;
        case 2: alert('Bulbasour usa Drenadoras')
            break;
        case 3: alert('Bulbasour usa Látigo Cepa')
            break;
        default:
            alert('Bulbasour queda dormido');
            break;
    }
    atacar(pokemon3);
}

//    FUNCIÓN PARA ATACAR


function atacar() {



    do {
        alert('Weedle Ataca causando ' + weedleAttack + ' de daño!');
        life = life - weedleAttack;
        alert('La vida de ' + pokemon1 + ' es : ' + life);
        alert(pokemon1+ ' Ataca causando ' + attack + ' de daño!');
        weedleLife = weedleLife - attack;
        alert('La vida de Weedle es :' + weedleLife);



    } while (weedleLife > 0);

    alert('Weedle Derrotado');

}

alert ('Aparecen Pokemones Salvajes ! Capturalos..');
alert (pokemones + ': Han aparecido');
let numElegido = +prompt('Cuántos intentos quieres Realizar del 1 - 10?')
 if (numElegido >1 && numElegido<10 ) {
    for (let i = 0; i < numElegido; i++) {
    const capturados=pokemones[i];

    // FUNCION POKEMON ALEATORIO SE ESCAPA

    pokemones=pokemones.sort(()=>{return Math.random()-0.5})
    alert(capturados + ' Capturado!');
    alert(pokemones[i] + ' Se escapó!')
}
 } else {
    alert('Número de intentos Incorrectos!');
 }

alert('CONTINUARÁ...')


