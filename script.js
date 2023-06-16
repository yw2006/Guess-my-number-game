'use strict';
const number=document.querySelector('.number')
const input=document.getElementsByName('input')[0]
const btn_check=document.querySelector('.check')
const massage=document.querySelector('.message')
const Score=document.querySelector('.score')
const HighScore=document.querySelector('.highscore')
let  secretNumber=Math.floor((Math.random()*20)+1)
const again=document.querySelector('.again')
const set_massege=function(data){
    massage.textContent=data
}
let score=20
let highScore=0
const dec_score=function(){
    score--
    Score.textContent=score
}
function theGame(){
if (score===0){
    set_massege('finshed game \n please try again.....')
    
}
else{
if (!input.value){
    set_massege('⛔️ No number!')
    document.body.style.backgroundColor='red'
}
else if (Number(input.value)===secretNumber){
    dec_score()
    set_massege('🎉 Correct Number!')
    document.body.style.backgroundColor='green'
    if (highScore<Number(input.value)){
        highScore=score
        HighScore.textContent=highScore
    }
    number.textContent=Number(input.value)
    number.style.width='30rem'
}
else if (Number(input.value)>secretNumber){
    document.body.style.backgroundColor='#222'
    set_massege('too high....')
    dec_score()
}
else if (Number(input.value)<secretNumber){
    document.body.style.backgroundColor='#222'
    set_massege('too low....')
    dec_score()
}
else{
    set_massege('invalid number')
    document.body.style.backgroundColor='orange'
}
}
}
btn_check.addEventListener('click',theGame)
again.addEventListener('click',function (){
     score=20
     Score.textContent=score
     secretNumber=Math.trunc((Math.random()*20))+1
     number.textContent='?'
     massage.textContent='Start guessing...'
     document.body.style.backgroundColor='#222'
     number.style.width='15rem'
})