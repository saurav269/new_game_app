import {  updateDelta, setupBall } from "./ball.js";

 let lastTime;
function updateLoop(time){

    if(lastTime === null){
        lastTime = time
        window.requestAnimationFrame(updateLoop)
    }

   // console.log(time - lastTime)

   const delta = (time - lastTime)
   updateDelta(delta)
    lastTime = time
    window.requestAnimationFrame(updateLoop)
}

const handleStart=()=>{

    title.classList.add('hide')
    setupBall()
    console.log("say")
    window.requestAnimationFrame(updateLoop)
 
 }
document.addEventListener('keypress', handleStart, {once:true})

const title = document.querySelector("[data-title]")



