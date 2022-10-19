window.addEventListener('load', function(){
  myScripts();
  });

function myScripts() {

  var s = document.createElement('script');
  s.type = "text/javascript"
  s.async = "true";
  s.src = "https://www.googletagmanager.com/gtag/js?id=G-SQLQSTN1KD";
  var x = document.getElementsByTagName('script')[0];
  x.parentNode.insertBefore(s, x);

  window.dataLayer = window.dataLayer || [];

  function gtag() {
    dataLayer.push(arguments);
  }
  gtag('js', new Date());
  gtag('config', 'G-SQLQSTN1KD');
}


function menu() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}