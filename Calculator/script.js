var num = document.querySelectorAll(".btn");
var display = document.getElementById("display");
var calc;


num.forEach(elm => {
    elm.addEventListener('click', function(){
        if(elm.value=="c"){
            display.value = display.value.slice(0,-1);
        }else if(elm.value=="ac"){
            display.value = "";
        }else if(elm.value=="="){
            calc = display.value;
            calc = calc.replace("×","*");
            calc = calc.replace("÷","/");
            display.value = eval(calc);
        }else{

            display.value += elm.value;
        }
    });
});
