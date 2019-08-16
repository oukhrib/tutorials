var ball    = document.querySelector('.ball'),
    info    = document.querySelector('.info'),
    y       = 1,
    gravity = 1;

setInterval(function(){

  if(y>420){ gravity = -gravity; }
  gravity+=1;
  y = y + gravity;
  ball.style.top = (y) + "px";
  info.innerText = "Y : "+y+", G : "+ gravity;
},50);
