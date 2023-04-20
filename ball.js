

const birdElm = document.querySelector('[data-bird]')

const BALL_SPEED = 0.5;

const JUMP_DURATION = 125

let timeSinceLastJump = Number.POSITIVE_INFINITY

export function setupBall(){
    setTop(window.innerHeight / 2)
    // document.removeEventListener('keydown', handleJump)
    // document.addEventListener('keydown' , handleJump)  
}

export const updateDelta=(delta)=>{
    
    if(timeSinceLastJump < JUMP_DURATION) {

        setTop(getTop() - BALL_SPEED * delta)
    }else{
        setTop(getTop() + BALL_SPEED * delta)
    }
   // console.log(getTop())
    timeSinceLastJump += delta
}

function setTop(top){

    birdElm.style.setProperty('--bird-top', top)
}

function getTop(){
    return parseFloat( getComputedStyle(birdElm).getPropertyValue("--bird-top"))
}

function handleJump(e){
    if(e.code !== 'Space') return

    timeSinceLastJump = 0
}