let popup = document.getElementById("popup");

function openPopup(){
     popup.classList.add("open-popup");
}

function closePopup(){
     popup.classList.remove("open-popup");
}

const slider = document.querySelector('.dest-block');
const bot = document.querySelector('.slider-buttons');
const left = document.querySelector('.left');
let count = 1;

bot.addEventListener('click',(e)=>{
    
          if(e.target.value == 1 && e.target.checked == true){slider.style.transform = "translateX(850px)"}
          else if(e.target.value == 2 && e.target.checked == true){ slider.style.transform = "translateX(0px)" }
          else if(e.target.value == 3 && e.target.checked == true){ slider.style.transform = "translateX(-850px)" }
     

});


left.addEventListener('click', (e)=>{
     if(count > 0){slider.style.transform = `translateX(${count * 850}px)`}
     count--;
})


