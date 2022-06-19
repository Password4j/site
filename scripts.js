window.addEventListener('load', function(){
  window.cookieconsent.initialise({
    type: "opt-in",
    theme: "classic",
    palette: {
        popup: {
            background: "#43a",
              text: "#fff"
          },
      button: {
          background: "#e27",
            text: "#fff"
          }
      },

    content: {
        link: "About consent",
        href: "https://2gdpr.com/cookies"
      },
      
      onInitialise: function(status) {
        if(status == cookieconsent.status.allow) myScripts();
      },
      onStatusChange: function(status) {
        if (this.hasConsented()) {
          myScripts();
        }
      }
    })
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
