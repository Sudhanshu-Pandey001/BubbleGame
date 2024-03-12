function getbubble() {
    let boll = "";
for(let i=1; i<=144; i++) {
  let rn = Math.floor(Math.random()*10)
  boll += `<div class="bubble">${rn}</div>`

}
document.querySelector(".pbtm").innerHTML = boll;
}

let timer = 60;
function runtimer() {
  var timerint = setInterval(() => {
        if(timer>0) {
        timer--;
    document.querySelector(".timerval").textContent = timer;
    } else {
        clearInterval(timerint);
document.querySelector(".pbtm").innerHTML = "<h>Game over..!"; //esase time khtm hote hi bubble khali ho jayega..!
        }

    },1000);
}

let hitran = 0;
function gethit() {
    hitran = Math.floor(Math.random()*10);
    document.querySelector(".hitval").textContent = hitran;
}

let score = 0;
function increScore() {
    score += 10;
    document.querySelector(".scoreval").textContent = score; //esko call nhi krenge event liste add krenge
}

document.querySelector(".pbtm").addEventListener("click", (dets) => {
    // console.log(Number(dets.target.textContent));
    let clickednum = Number(dets.target.textContent);
    if(clickednum === hitran){
        increScore(); // for new score
        getbubble(); // for new bubble
        gethit(); // for new hit                
    }
})

getbubble();
runtimer();
gethit();
