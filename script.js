'use strict';
const score0 = document.querySelector('#score--0')
const score1 = document.querySelector('#score--1')
const curScore0 = document.querySelector('#current--0')
const curScore1 = document.querySelector('#current--1')
const player1 = document.querySelector('.player--0')
const player2 = document.querySelector('.player--1')
const btnRoll = document.querySelector('.btn--roll')
const btnNew = document.querySelector('.btn--new')
const btnHold = document.querySelector('.btn--hold')
const diceImg = document.querySelector('.dice')

let scores = [0,0]
let curPlayer = 0
let curScore = 0
let playing = true

function switchPlayer(){
    curScore = 0
    document.getElementById(`current--${curPlayer}`).textContent = curScore
    curPlayer = curPlayer === 0 ? 1 : 0
    player1.classList.toggle('player--active')
    player2.classList.toggle('player--active')
}

score0.textContent = 0
score1.textContent = 0
diceImg.classList.add('hidden')

btnRoll.addEventListener('click',function(){
    if(playing){
        const diceRoll = Math.trunc(Math.random() * 6) + 1
        console.log(diceRoll)
        diceImg.classList.remove('hidden')
        diceImg.src = `dice-${diceRoll}.png`
       
        if(diceRoll !== 1){
             curScore += diceRoll
             document.getElementById(`current--${curPlayer}`).textContent = curScore
        }else{
             switchPlayer()
        }
    }

})
btnHold.addEventListener('click', function(){
    if(playing){
        scores[curPlayer] = scores[curPlayer] + curScore
        if(scores[curPlayer] >= 100){
            playing = false
            document.querySelector(`#score--${curPlayer}`).textContent = scores[curPlayer]
            document.querySelector(`.player--${curPlayer}`).classList.add('player--winner')
            curScore0.textContent = 0
            curScore1.textContent = 0
        }else{
        document.querySelector(`#score--${curPlayer}`).textContent = scores[curPlayer]
        switchPlayer()
        }
    }
    
    
})
btnNew.addEventListener('click', function(){
    scores = [0,0]
    curPlayer = 0
    curScore = 0
    playing = true
    score0.textContent = 0
    score1.textContent = 0
    diceImg.classList.add('hidden')
    player1.classList.remove('player--winner')
    player2.classList.remove('player--winner')
    curScore0.textContent = 0
    curScore1.textContent = 0
    player1.classList.add('player--active')
    player2.classList.remove('player--active')
})