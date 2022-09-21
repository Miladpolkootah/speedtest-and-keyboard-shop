let slidesArr = $(".slider--item");
let bollertsArr = $(".pointe");
console.log(bollertsArr);

let counter = -1;

let slidy = ()=>{
  $(slidesArr[counter]).removeClass("slider__show");
  $(bollertsArr[counter]).removeClass("slider--point_active");
  $(slidesArr[counter + 1]).addClass('slider__show');
  $(bollertsArr[counter + 1]).addClass('slider--point_active');
  counter++;
  if(counter>2){
    $(slidesArr[0]).addClass("slider__show");
    $(bollertsArr[0]).addClass("slider--point_active");
    counter = -1;
  };
};

setInterval(slidy, 3000);


