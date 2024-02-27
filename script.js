//to only allow specific header to glow up
//let helloText =  document.getElementById("welcome_text");

let helloText = document.querySelector("h1");

let colors = ["red", "orange", "yellow", "green", "blue", "indigo", "purple"];

let index = 0;

//function changes colour of text
setInterval(function() {
    helloText.style.color = colors[index];
    index = (index + 1) % colors.length;
}, 1000);

//Hamburger
const menu = document.querySelector(".menu");
/*selects each menu items*/
const menuItems = document.querySelectorAll(".menuItem");
/*selects the button with class name "hamburger"*/
const hamburger= document.querySelector(".hamburger");
/*selects the i tag containing our icon*/
const menuButton= document.querySelector(".menuButton");

function toggleMenu() {
    if (menu.classList.contains("showMenu")) {
      menu.classList.remove("showMenu");
      menuButton.innerHTML = "menu";
    } else {
      menu.classList.add("showMenu");
      menuButton.innerHTML = "close";
    }
  }

hamburger.addEventListener("click", toggleMenu);

menuItems.forEach( 
    function(menuItem) { 
      menuItem.addEventListener("click", toggleMenu);
    }
  )


  const track = document.getElementById("image-track");

  const handleOnDown = e => track.dataset.mouseDownAt = e.clientX

  const handleOnUp =  () => {
    track.dataset.mouseDownAt = "0";
    track.dataset.prevPercentage = track.dataset.Percentage;
  }

  const handleOnMove = e =>{
    if(track.dataset.mouseDownAt === "0") return;

    const MouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX,
    maxDelta = window.innerWidth / 2;

    const percentage = (MouseDelta / maxDelta) * -100,
        nextPercentageUnconstrained = parseFloat(track.dataset.prevPercentage) + percentage,
        nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100);

    track.dataset.percentage = nextPercentage
    track.animate(
        transform: 'translate'(${nextPercentage})
    )
  }
