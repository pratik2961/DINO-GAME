score = 0
cross = true

audio = new Audio('music.mp3')
audiogo = new Audio('gameover.mp3')
// setInterval(() => {
    

// }, 1000);

// audio.loop = true;
// audio.loop.play()
user = prompt("Enter Your Name")
// user = "pratik"
document.onkeydown = function(e){
    // console.log("key code is ",e.keyCode)
    if(e.keyCode == 38){
        dino = document.querySelector(".dinoCon")
        dino.classList.add('animateDino');
        setTimeout(() => {
            dino.classList.remove('animateDino');
        }, 700);
    }
    else if(e.keyCode == 39){
        dino = document.querySelector(".dinoCon");
        dinox = parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
        dino.style.left = dinox + 112 + 'px'
    }
    else if(e.keyCode == 37){
        dino = document.querySelector(".dinoCon");
        dinox = parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
        dino.style.left = dinox + -112 + 'px'
    }
}

setInterval(() => {
    dino = document.querySelector(".dinoCon")
    gameover = document.querySelector(".gameover") 
    obstacle = document.querySelector(".obstacleCon")

    dx = parseInt(window.getComputedStyle(dino,null).getPropertyValue('left')); 
    dy = parseInt(window.getComputedStyle(dino,null).getPropertyValue('top')); 

    ox = parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('left')); 
    oy = parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('top')); 

    // console.log("ox = ",ox," oy = ",oy)

    offsetX = Math.abs(dx-ox);
    offsetY = Math.abs(dy-oy);
    // console.log("dx = ",dx," ox = ",ox," offsetX = ",offsetX)
    // console.log("dy = ",dy," oy = ",oy," offsetY = ",offsetY)

    if(offsetX<110 && offsetY<52)
    {
        gameover.style.visibility='visible';
        obstacle.classList.remove('obstacleAni');
        gameover = document.querySelector('.gameover')
        gameover.innerHTML = 'Game Over Refresh The Page And Try Again'
        audiogo.play();
        // audio.pause()
        setTimeout(() => {
            audio.pause()
            audiogo.pause()
        }, 1000);
    }
    else if(offsetX < 110 && cross)
    {
        setTimeout(() => {
            audio.play()
        }, 0);
        score =  score +1;
        updateScore(score)
        cross = false
        setTimeout(() => {
            cross = true
        }, 1000);
        setTimeout(() => {
            aniDur = parseFloat(window.getComputedStyle(obstacle,null).getPropertyValue('animation-duration'));
            newDur =  aniDur - 0.2;
            if(aniDur>2.5)
            {
                console.log("newDur = ",newDur)
                obstacle.style.animationDuration = newDur + 's';
                console.log(newDur)
            }
            else{
                newDur = 2.5;
                console.log("newDur = ",newDur)
                obstacle.style.animationDuration = newDur + 's';
                console.log(newDur)
            }
           
           

        }, 500);
        
    }
    
},100);

function updateScore(score){
    scoreCon = document.querySelector('.score');
    scoreCon.innerHTML = `${user}'s Score :  ${score}`
}