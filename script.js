const canvas = document.getElementById("canvas1"); 
const ctx = canvas.getContext("2d");
const CANVAS_WIDTH = canvas.width = 600; 
const CANVAS_HEIGHT = canvas.height = 600; 


const playerImage = new Image(); 
playerImage.src = "/sprites/shadow_dog.png";
const SPRITE_WIDTH = 575; 
const SPRITE_HEIGHT = 523; 
let playerState = "idle"

const dropDown = document.getElementById("animations"); 

dropDown.addEventListener("change", (e) => {
    playerState = e.target.value; 
})

//let frameX = 0; 
//let frameY = 0; 

// dealing with animation speed
let gameFrame = 0;
const staggerFrames = 5; 

//dealing with frames per sprite row 
// container data for animations 
const spriteAnimations = []; 
const animationStates = [
    {
        name : "idle", 
        frames : 7
    }, 
    {
        name : "jump",
        frames: 7

    },
    {
        name : "fall",
        frames: 7

    },
    {
        name : "run",
        frames: 9

    },
    {
        name : "dizzy",
        frames: 11

    },
    {
        name : "sit",
        frames: 5

    },
    {
        name : "roll",
        frames: 7

    },
    {
        name : "bite",
        frames: 7

    },
    {
        name : "ko",
        frames: 12

    },
    {
        name : "gethit",
        frames: 4

    }
]; 

animationStates.forEach((state,index) => {
    let frames = {
        loc : [],
    }
    for(let j = 0; j < state.frames; j++){
        let positionX = j * SPRITE_WIDTH; 
        let positionY = index * SPRITE_HEIGHT; 
        frames.loc.push({x: positionX, y: positionY}); 
    }
    spriteAnimations[state.name] = frames; 
}); 



//animation loop
function animate(){
    ctx.clearRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT); 
    let position = Math.floor(gameFrame / staggerFrames) % spriteAnimations[playerState].loc.length; 
    let frameX = SPRITE_WIDTH * position; 
    let frameY = spriteAnimations[playerState].loc[position].y; 
    //ctx.fillRect(50,50,100,100);
    ctx.drawImage(playerImage, frameX,frameY,SPRITE_WIDTH,SPRITE_HEIGHT,0,0,SPRITE_WIDTH,SPRITE_HEIGHT)
    // if(gameFrame % staggerFrames == 0) {
    //     if(frameX < 6) frameX++; 
    //     else frameX = 0; 
    // }
    gameFrame++; 
    requestAnimationFrame(animate); 
}

animate(); 





