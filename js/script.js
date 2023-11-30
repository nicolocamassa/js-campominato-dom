function tableGen() {
    /* Scompare il bottone */
    btnNone = document.getElementById('noneDisplayed');
    btnNone.classList.add('d-none');

    /* Quantità dei quadrati */
    let tableSize = 0;

    /* Selezione della form */
    let difficulty = parseInt(difficultyCheck());

    let container = document.querySelector('.square-container');

    /* Quantità dei quadrati in base alla difficoltà */
    console.log(difficulty)

    switch(difficulty){
        case 1: 
        tableSize = 100;
        container.style.width = '1000px'
        break;

        case 2:
        tableSize = 81;
        container.style.width = '900px'
        break;

        case 3:
        tableSize = 49;
        container.style.width = '700px'
        break;
    }
        

    /* Generazione dei 100 quadrati */
    for (let i = 1; i <= tableSize; i++) {
        /* Creiamo l'elemento div all'interno del container */
        const divGen = document.createElement("div");
        document.querySelector(".square-container").appendChild(divGen);

        /* Ogni quadrato avrà la propria classe identificandosi con il proprio numero */
        divGen.classList.add('square', 'square' + i);
        const squareNum = document.querySelector(".square" + i);
        squareNum.innerHTML = i

        /* Al click del quadrato viene cambiato il colore e mostrato in console la sua posizione */
        divGen.addEventListener('click', function () {
            this.classList.toggle('bg-primary')
            console.log(`Quadrato ${squareNum.innerHTML} cliccato`)
        })
    }
}

function difficultyCheck(){
    formValue = document.getElementById('difficulty').value;
    return formValue;
}

function generateBomb(){
    /* Inizializzazione del vettore contenente le bombe */
    let bombPosition = [];
    const BOMBS_NUM = 16;

    /* Ciclo di generazione per le 16 bombe */
    for(let i = 0; i<BOMBS_NUM; i++){
        let bombNumber;

        /* Controllo di numeri doppi nel vettore, se si verifica la condizione genera un altro numero*/
        if(!bombPosition.includes(bombNumber)){
            bombNumber = Math.floor(Math.random()* 100 +1 )
            bombPosition.push(bombNumber);
        }
    }

    return bombPosition
}

let bomb = generateBomb();
console.log(bomb);













