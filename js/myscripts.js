
var siteWrap = document.querySelector('.siteWrap')



var markup = `
  <div class="container">
    <div class="clock-face">
      <div class="hand hourHand"></div>
      <div class="hand minHand"></div>
      <div class="hand secHand"></div>
    
    </div>
  
  </div>
  
`

siteWrap.innerHTML = markup;

var secHand = document.querySelector('.secHand');
var minHand = document.querySelector('.minHand');
var hourHand = document.querySelector('.hourHand');

function clockControl() {
  var now = new Date();
  
  var sec = now.getSeconds();
  var secDegree = ((sec/60)*360) + 90;
  secHand.style.transform = `rotate(${secDegree}deg)`;
  if (sec === 59){
    secHand.style.transition = 'none';
  }

  console.log(sec);
  console.log(secDegree);
  
  var min = now.getMinutes();
  var minDegree = ((min/60) * 360) + 90;
  minHand.style.transform = `rotate(${minDegree}deg)`;
  if (min === 59){
    minHand.style.transition = 'none';
  }

  var hour = now.getHours();
  var hourDegree = ((hour/60)*360) + 90;
  hourHand.style.transform = `rotate(${hourDegree}deg)`;
  if (hour === 59){
    hourHand.style.transition = 'none';
  }


}

var time = setInterval(clockControl, 1000)


