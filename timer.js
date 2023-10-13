const time = document.getElementById("num");
const start = document.getElementById("start");
const stop = document.getElementById("stop");
const reset = document.getElementById("reset");
let count = 0;
let change;


start.addEventListener("click", () => {
   change = setInterval(counting, 1000);
});

function counting(){
   count++;
   let hours = Math.floor((count % (3600 * 24)) / 3600)
   let minutes = Math.floor((count % 3600) / 60);
   let seconds = Math.floor((count % 60));

   if(hours < 10){
      hours = `0${hours}`;
   }

   if(minutes < 10){
      minutes = `0${minutes}`;
   }
   if(seconds < 10){
      seconds = `0${seconds}`;
   }

   time.innerHTML =`${hours}:${minutes}:${seconds}`;
}
 

stop.addEventListener("click", () => {
   clearInterval(change);
});

reset.addEventListener("click", () => {
   clearInterval(change);
   time.innerHTML = `00:00:00`;
   count = 0;
});