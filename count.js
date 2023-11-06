const year = new Date().getFullYear();
const twentyNineJan = new Date(year, 1,29).getTime();
const twentyNineJanNextYear = new Date(year + 1, 1, 29).getTime();
const month = new Date().getMonth();

// countdown
let time = setInterval(function() {

  // get today's date
  const today = new Date().getTime();

  // get the difference between end and  ..... date<--->time
  let diff;
  if(month > 1) {
    diff = twentyNineJanNextYear - today;
  } else {
    diff = twentyNineJan - today;
  }




  // math
  let Days = Math.floor(diff / (1000 * 60 * 60 * 24));                                  // converts in days
  let Hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));         //converts in hours
  let Minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));             // converts in minutes
  let Seconds = Math.floor((diff % (1000 * 60)) / 1000);                       // converts in seconds

  // display using id attributes 

  
  document.getElementById("time").innerHTML =
    "<div class=\"days\"> \
  <div class=\"numbers\">" + Days + "</div>Days</div> \
<div class=\"hours\"> \
  <div class=\"numbers\">" + Hours + "</div>Hours</div> \
<div class=\"minutes\"> \
  <div class=\"numbers\">" + Minutes + "</div>Minutes</div> \
<div class=\"seconds\"> \
  <div class=\"numbers\">" + Seconds + "</div>Seconds</div> \
</div>";

}, 1000);