function increase() {
    let eyes = document.getElementById("eyes");
    eyes.style.width = '500px';
    eyes.style.height = 'auto';
    

  // document.getElementById("eyes").style.width = '500px';

}

function decrease () {  
    let eyes = document.getElementById("eyes");
    eyes.style.width = '325px';
    eyes.style.height = 'auto';

 //   document.getElementById("eyes").style.width = '325px';
 }

function toggleBG() {

    let bg = document.getElementById("body");
    if (bg.style.display === "none") {
        bg.style.display = "block";
    } else {
        bg.style.display = "none";
    
    }
 }

 let eyesPositionX = 190; // Initial position of eyes
 let eyesPositionY = 200;
 let initialEyesPositionX = 190; // Initial position of eyes
 let initialEyesPositionY = 200;


    function moveEyes(event) {
        let keyCode = event.keyCode;
        let eyes = document.getElementById("eyes");
        
        // Move left
        if (keyCode === 37 && eyesPositionX > 0) {
            eyesPositionX -= 10;
            eyes.style.left = eyesPositionX + 'px';
        }
        // Move up
        else if (keyCode === 38 && eyesPositionY > 0) {
            eyesPositionY -= 10;
            eyes.style.top = eyesPositionY + 'px';
        }
        // Move right
        else if (keyCode === 39 && eyesPositionX < window.innerWidth - eyes.clientWidth) {
            eyesPositionX += 10;
            eyes.style.left = eyesPositionX + 'px';
        }
        // Move down
        else if (keyCode === 40 && eyesPositionY < window.innerHeight - eyes.clientHeight) {
            eyesPositionY += 10;
            eyes.style.top = eyesPositionY + 'px';
        }
    }

   

    function resetEyesPosition() {
        let eyes = document.getElementById("eyes");
        eyes.style.left = initialEyesPositionX + 'px';
        eyes.style.top = initialEyesPositionY + 'px';
    }

    document.addEventListener('mousedown', resetEyesPosition);

    document.addEventListener('keydown', moveEyes);