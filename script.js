//Building tic tac toe
//For the X character use the string "X"
//For the O character use the string "O"
//Put a specific class to select the inner rows and add an event listener to each of them? 
// How to tell which players turn it is? P1 vs. P2
// Need to ensure each click alternates between X and O
// create variables for each of the 8 win conditions

/*
1-1    1-2    1-3
2-1    2-2    2-3
3-1    3-2    3-3
*/

//Pseudo code
document.querySelectorAll('div').forEach(el => {
    el.addEventListener('click', () => xOrO(el));
});
// let div = document.querySelectorAll('div').addEventListener('click', xOrO);

let playerXTurn = true;

function xOrO(div) {
    // if player 1 turn, innerText = X
    if (playerXTurn && div.innerText === "") {
        div.innerText = "X"
        if (checkWinCondition()) {
            alert("Winner is X")
            reset()
        } 
        playerXTurn = false;
    } else if (!playerXTurn && div.innerText === "") {
        div.innerText="O"
        if (checkWinCondition()) {
            alert("Winner is O")
            reset()
        } 
        playerXTurn = true;
    }
    // if player 2 turn, innerText = 0
}

const compareValues = (v1, v2, v3) => {
    return (
        (v1 !== "" && v2 !== "" && v3 !== "") &&
        (v1 === v2 && v2 === v3)
    )
}

const reset = () => {
    document.querySelector('.row-1-1').innerText = ""
    document.querySelector('.row-1-2').innerText = ""
    document.querySelector('.row-1-3').innerText = ""
    document.querySelector('.row-2-1').innerText = ""
    document.querySelector('.row-2-2').innerText = ""
    document.querySelector('.row-2-3').innerText = ""
    document.querySelector('.row-3-1').innerText = ""
    document.querySelector('.row-3-2').innerText = ""
    document.querySelector('.row-3-3').innerText = ""
}

document.querySelector('button').addEventListener('click', reset);

function checkWinCondition() {
    const row_1_1 = document.querySelector('.row-1-1').innerText
    const row_1_2 = document.querySelector('.row-1-2').innerText
    const row_1_3 = document.querySelector('.row-1-3').innerText
    const row_2_1 = document.querySelector('.row-2-1').innerText
    const row_2_2 = document.querySelector('.row-2-2').innerText
    const row_2_3 = document.querySelector('.row-2-3').innerText
    const row_3_1 = document.querySelector('.row-3-1').innerText
    const row_3_2 = document.querySelector('.row-3-2').innerText
    const row_3_3 = document.querySelector('.row-3-3').innerText

    const topHorizontal = compareValues(row_1_1, row_1_2, row_1_3)
    const midHorizontal = compareValues(row_2_1, row_2_2, row_2_3)
    const bottomHorizontal = compareValues(row_3_1, row_3_2, row_3_3)

    const leftVertical = (
        (row_1_1 !== "" && row_2_1 !== "" && row_3_1 !== "") &&
        (row_1_1 === row_2_1 && row_2_1 === row_3_1)
    )
    const middleVertical = (
        (row_1_2 !== "" && row_2_2 !== "" && row_3_2 !== "") &&
        row_1_2 === row_2_2 && row_2_2 === row_3_2
    )
    const rightVertical = (
        (row_1_3 !== "" && row_2_3 !== "" && row_3_3 !== "") & 
        row_1_3 === row_2_3 && row_1_3 === row_3_3
    )

    const rightDiagonal = (
        (row_1_1 !== "" && row_2_2 !== "" && row_3_3 !== "") &&
        row_1_1 === row_2_2 && row_1_1 === row_3_3
    )
    const leftDiagonal = (
        (row_1_3 !== "" && row_2_2 !== "" && row_3_1 !== "") && 
        row_1_3 === row_2_2 && row_1_3 === row_3_1
    )

    const win = [
        topHorizontal, midHorizontal, bottomHorizontal, 
        leftVertical, middleVertical, rightVertical, 
        rightDiagonal, leftDiagonal
    ];
    
    return win.some(el => el)

}