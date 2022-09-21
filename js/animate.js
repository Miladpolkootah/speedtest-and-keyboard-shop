const heroart1 = document.querySelector(".herosec-art1");
const heroart3 = document.querySelector(".herosec-art3");

function Animate(a,b){
  var target = document.querySelectorAll(a);

  for (i = 0; i < target.length; i++){
    var windowHeight = window.innerHeight;
    var targetTop = target[i].getBoundingClientRect().top;
    var targetVisibilty = 30;

    if (targetTop<windowHeight-targetVisibilty){
      target[i].classList.add(b);
    }else{
      target[i].classList.remove(b);
    };
  };
}
  function animate1(){
    Animate(".an", "anim");
  }
  window.addEventListener("scroll", animate1);

  window.addEventListener("scroll", ()=>{
    let value = -window.scrollY;
    heroart1.style.top = value * 0.2+"px";
    heroart3.style.top = value * 0.5 + "Px";
  });