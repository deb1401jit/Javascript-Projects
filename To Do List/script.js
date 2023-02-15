var add = document.getElementById("add-btn");
var listConatainer = document.getElementById("list-container");
var tickIcon = `<iconify-icon class="tick" icon="mdi:tick" style="color: gray;" width="25"></iconify-icon>`;
var del = `<iconify-icon class="del" inline icon="ic:baseline-delete-forever" style="color: red;" width="35"></iconify-icon>`;


// adding to the to-do list
add.addEventListener('click',function(){
    var input = document.getElementById("inp");
    if(input.value.trim()!=""){
        var list = `<div class="item">${tickIcon}<span class="list">${input.value}</span>${del}</div>`; 
        listConatainer.innerHTML += list;
        input.value="";
        delbtn(document.querySelectorAll(".del")); 
        taskComplete(document.querySelectorAll(".item"));
        
    }
});


//functionality of delete btn
function delbtn(delButton){
    delButton.forEach(elm =>{
        elm.addEventListener('click', function(){
            var parent = elm.parentElement;
            parent.remove();
        });
    });
}
delbtn(document.querySelectorAll(".del"));


//task completed
function taskComplete(items){
    items.forEach(elm=>{
        elm.addEventListener('click',function(){
            let childs = elm.children;
            if(elm.classList.contains('complete')){
                childs[0].style.visibility = "hidden";
                elm.classList.remove("complete");
            }else{
                childs[0].style.visibility = "visible";
                elm.classList.add('complete');
            }
        });
    });
}
taskComplete(document.querySelectorAll(".item"));

//add to list on press enter
document.body.addEventListener('keypress',function(event){
    if(event.key=="Enter"){
        // Cancel the default action, if needed
        event.preventDefault();
        // Trigger the button element with a click
        document.getElementById("add-btn").click();
    }
})