let genBtn = document.getElementById('genBtn');
let restartBtn = document.getElementById('restartBtn');
btnNone = document.getElementById('noneDisplayed');

function tableGen(bomb, cellNum) {

    /* Scompare il bottone */
    btnNone.classList.add('d-none');

    let pointIndex = document.getElementById('point');
    let points = 0;
    let clicked = [];
    let clickedBomb = true;
    /* Generazione dei 100 quadrati */
    for (let i = 1; i <= cellNum; i++) {
        let squareNum;
        /* Creiamo l'elemento div all'interno del container */
        const divGen = document.createElement("div");
        document.querySelector(".square-container").appendChild(divGen);

        /* Ogni quadrato avrà la propria classe identificandosi con il proprio numero */
        divGen.classList.add('square', 'square' + i);
        squareNum = document.querySelector(".square" + i);
        squareNum.innerHTML = i;


        /* Al click del quadrato viene cambiato il colore e mostrato in console la sua posizione */
        divGen.addEventListener('click', function () {
            if (clickedBomb == true) {
                if (bomb.includes(parseInt(squareNum.innerHTML))) {
                    /* debugger; */
                    this.classList.add('bg-warning');

                    for (let i = 0; i < bomb.length; i++) {
                        /* Mostra tutte le bombe ogni 400ms */
                        setTimeout(function () {
                            let bombSelect = bomb[i];
                            let bombClass = document.querySelector(".square" + bombSelect);
                            bombClass.classList.add('bg-warning');

                            if(i == bomb.length - 1){
                                restartBtn.classList.remove('d-none');
                            }
                        }, i * 400)
                    }

                    clickedBomb = false;
                } else {
                    /* Modifica il colore delle celle cliccate */
                    this.style.backgroundColor = 'rgb(27, 27, 27)';
                    console.log(parseInt(squareNum.innerHTML))
                    
                    /* Controllo che il punteggio non incrementi al click della stessa cella */
                    console.log(clicked);
                    if(!clicked.includes(this.innerHTML)){
                        clicked.push(this.innerHTML);
                        points++
                    }else{
                        points = points;
                    }
                    
                    pointIndex.innerHTML = 'Punteggio: ' + points;
                }
            }
        })
    }

}

restartBtn.addEventListener('click', function(){
    let table = document.querySelector('.square-container');
    table.innerHTML = '';
    btnNone.classList.remove('d-none');
    restartBtn.classList.add('d-none');
});


function difficultyCheck() {
    let formValue = document.getElementById('difficulty').value;

    /* Selezione della form */
    let difficulty = parseInt(formValue);
    let container = document.querySelector('.square-container');

    /* Quantità dei quadrati */
    let tableSize = 0;

    switch (difficulty) {
        case 1:
            tableSize = 100;
            container.style.width = '600px' /* Grandezza quadrati X righe [60px X 10righe] */
            break;

        case 2:
            tableSize = 81;
            container.style.width = '540px'
            break;

        case 3:
            tableSize = 49;
            container.style.width = '420px'
            break;
    }

    return tableSize;
}

function generateBomb(BOMBS_NUM, numCell) {
    console.log(numCell);
    /* Inizializzazione del vettore contenente le bombe */
    let bombPosition = [];

    /* Ciclo di generazione per le 16 bombe */
    while (bombPosition.length != BOMBS_NUM) { /* Con il for generava array di lunghezza da 14 a 16 */
        let bombNumber = Math.floor(Math.random() * numCell + 1);

        /* Controllo di numeri doppi nel vettore, se si verifica la condizione genera un altro numero*/
        if (!bombPosition.includes(bombNumber)) {
            bombPosition.push(bombNumber);
        }
    }
    console.log(bombPosition);
    return bombPosition;
}


const BOMBS_NUM = 16;


genBtn.addEventListener('click', function () {
    let tableSize = difficultyCheck();
    bomb = generateBomb(BOMBS_NUM, tableSize);
    tableGen(bomb, tableSize);
});












