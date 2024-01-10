var nav = document.getElementById("navbar");
document.getElementById("toggle").addEventListener('click',function(){
    if(nav.className === "navmenu__desktop"){
        nav.className += " toggle";
    }else{
        nav.className = "navmenu__desktop";
    }
});

//parametros de la funcion elemento destino y duracion de la animacion en milisegundos
document.getElementById("tops").addEventListener('click',function(){
    nav.className = "navmenu__desktop";
    scroll(document.getElementById("tops"),1000);
});
document.getElementById("about").addEventListener('click',function(){
    nav.className = "navmenu__desktop";
    scroll(document.getElementById("abouts"),1000);
});
document.getElementById("service").addEventListener('click',function(){
    nav.className = "navmenu__desktop";
    scroll(document.getElementById("services"),1000);
});

$('.navmenu__mobile-btn').click(function(){
    $(this).toggleClass('active')
    $('.menu-mobile').toggleClass('active')
});


function scroll(element,time){
    // TESTEA HACIENDO UN MOVIMIENTO AL SCROLL SI FUNCIONA QUEDA CON FUNCION (WEBKIT) DE LO CONTRARIO CAMBIA DOCUMENTELEMENT (FUNCIONAL EN FIREFOX)
    function checkBody() {
        document.documentElement.scrollTop += 1;
        const body = (document.documentElement.scrollTop !== 0) ? document.documentElement : document.body;
        document.documentElement.scrollTop -= 1;
        return body;
    }
    const startTime = Date.now();
    var body = checkBody()
    var duracion = time;
    var div = element;
    // FIREFOX O CHROME elije la que funcione
    var domHeight = Math.max(document.body.scrollHeight,document.documentElement.scrollHeight);
    var clientHeight = Math.max(document.body.clientHeight);
    var margen = domHeight - clientHeight;
    var windowHeight = document.documentElement.clientHeight;
    var destino = (domHeight - div.offsetTop) + margen < windowHeight ? domHeight - windowHeight : div.offsetTop - margen;
    var start = body.scrollTop;

    function draw(){
        var now = Date.now();
        var t = Math.min(1,(now - startTime) / duracion);
        var animacion =  t<.5 ? 4*t*t*t : (t-1)*(2*t-2)*(2*t-2)+1
        var movimiento = (animacion * (destino - start)) + start;
        body.scrollTop = movimiento;
        if(body.scrollTop === destino){
            return;
        }
        requestAnimationFrame(draw);
    }
    draw();
}

//Mouse hover spotlight effect 
const mouseHandler = (e) => {
    const pricingContainer = e.currentTarget;
    const rect = pricingContainer.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
  
    const pricingElements = pricingContainer.querySelectorAll('.spotlight');
  
    pricingElements.forEach((pricing) => {
      const pricingRect = pricing.getBoundingClientRect();
      const newX = x - (pricingRect.left - rect.left);
      const newY = y - (pricingRect.top - rect.top);
  
      pricing.style.setProperty('--mouse-x', newX + 'px');
      pricing.style.setProperty('--mouse-y', newY + 'px');
    });
  };
  
  document.querySelector(".service").addEventListener("mousemove", (e)=>{
    mouseHandler(e)
  });