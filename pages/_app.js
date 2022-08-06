import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

var character = document.getElementById("character");
var block = document.getElementById("block");

function jump(){    
    if(character.classList == "animate"){return}
    character.classList.add("animate");

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

document.addEventListener('keyup', event => {
    if (event.code === 'Space') {
      jump()
    }
  })

export default MyApp
