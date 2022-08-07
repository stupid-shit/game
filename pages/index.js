import { useState, useRef, useEffect } from 'react';

function Home() {

  useEffect(() => {
    document.body.addEventListener('Space', onKeyDown);
    var character = document.getElementById("character");
    var block = document.getElementById("block");
  }, []);

  function jump(){    
      if(character.classList !== "animate"){
        character.classList.add("animate");
      }

      setTimeout(function(){
          character.classList.remove("animate");
      }, 300);

      var checkDead = setInterval(function(){
          var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
          var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
          
          if(blockLeft<18 && blockLeft>3 && characterTop>=125){
              block.style.animation="none";
              block.style.display="none";
              alert("game over.");
          }
      },10);
  }
  
  function onKeyDown(event) {
    jump();
  }
  /*html.addEventListener('keyup', event => {
      if (event.code === 'Space') {
        jump()
      }
    })*/
  
  return (
    <body id="screen" className="grid h-screen place-items-center">
      <div id="game">
          <div id="character"></div>
          <div id="block"></div>
      </div>
    </body>
  )

}

export default Home