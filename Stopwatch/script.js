var hr = 0;
var min = 0;
var sec = 0;
var count = 0;

// tells if timer is running or not
var running = false;

function start(){
    running = true;
    stopwatch();
}

function stop(){
    running = false;
}

function reset(){
    running = false;
    hr = 0; min = 0; sec = 0; count = 0;
    document.getElementById("hr").innerText = "00";
    document.getElementById("min").innerText = "00";
    document.getElementById("sec").innerText = "00";
    document.getElementById("count").innerText = "00"; 
}

function stopwatch(){
    if(running == true){
        count += 1;

        if(count == 100){
            sec += 1;
            count = 0;
        }

        if(sec == 60){
            min += 1;
            sec = 0;
        }

        if(min==60){
            hr += 1;
            min=0;
            sec=0;
        }

        var hrString = hr;
        var minString = min;
        var secString = sec;
        var countString = count;

        if(hr<10){ hrString = "0"+ hrString; }
        if(min<10){ minString = "0"+ minString; }
        if(sec<10){ secString = "0"+ secString; }
        if(count<10){ countString = "0"+ countString; }

        document.getElementById("hr").innerText = hrString;
        document.getElementById("min").innerText = minString;
        document.getElementById("sec").innerText = secString;
        document.getElementById("count").innerText = countString; 
        setTimeout(stopwatch, 10);
    }
}

var temp =0;
function st(){
    console.log(temp += 1);
}

var id;
var s = document.getElementById("start");
s.addEventListener('click', function(){
    id = setInterval('st()',1000);
});
var e = document.getElementById("stop");
e.addEventListener('click', function(){
    clearInterval(id);
});