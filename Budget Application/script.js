//Add budget
var budgetBtn = document.getElementById("budget-btn");
budgetBtn.addEventListener('click',()=>{
    let budget = document.getElementById("budget-inp");
    if(Number.isInteger(Number(budget.value))){
        document.getElementById("budget-amt").innerText="$"+budget.value;
        budget.value="";
    }else{
        alert("Input must be a number");
        budget.value="";
    }
});

//Add expense
var count = 0;
var calc = document.getElementById("expense-btn");
calc.addEventListener('click',()=>{
    let expName = document.getElementById("expense-name-inp").value;
    let expAmt = document.getElementById("expense-amt-inp").value;
    if(Number.isInteger(Number(expAmt))){
        expAmt = Number(expAmt);
        let budgetAmt = document.getElementById("budget-amt").innerText;
        budgetAmt = Number(budgetAmt.replace('$',''));
        let currentExpAmt = document.getElementById("expense-amt").innerText;
        currentExpAmt = Number(currentExpAmt.replace('$',''));
        let totalExpAmt = currentExpAmt+expAmt;

        //add expense amt !=0 condition to not create problem for count
        if(!(totalExpAmt>budgetAmt)){
            document.getElementById("expense-amt").innerText = "$"+(totalExpAmt);

            //add expense title
            let nameContainer = document.getElementById("expense-titles");
            let name = `<span class="name list ${count}">${expName}</span>`;
            nameContainer.innerHTML+=name;

            //add expense value
            let expContainer = document.getElementById("expense-values");
            let exp = `<span class="price list ${count}">-${expAmt}</span>`;
            expContainer.innerHTML+=exp;

            //add buttons
            let btnContainer = document.getElementById("expense-btns");
            let btns = `<div class="${count}">
            <iconify-icon class="edit-btn" icon="material-symbols:edit-square-outline-rounded" width="20"></iconify-icon>
            <iconify-icon class="del-btn" icon="ic:baseline-delete" width="20"></iconify-icon>
        </div>`;
            btnContainer.innerHTML+=btns;

            //balance update
            document.getElementById("balance-amt").innerText = "$"+(budgetAmt-totalExpAmt);

            document.getElementById("expense-name-inp").value="";
            document.getElementById("expense-amt-inp").value="";
            count++;
            deleteList(document.querySelectorAll(".del-btn"));
            editList(document.querySelectorAll(".edit-btn"));
        }else{
            alert("Total expense exceeding budget");
        } 
    }else{
        alert("Expense amount should be a number");
        document.getElementById("expense-amt-inp").value="";
    }
});

//Delete button functionality
function deleteList(delBtns){
    delBtns.forEach(elm=>{
        elm.addEventListener('click',()=>{
            var listCount = elm.parentElement.classList[0];
            var itemsToBeDel = document.getElementsByClassName(listCount);
            document.getElementById("expense-name-inp").value=itemsToBeDel[0].innerText;
            document.getElementById("expense-amt-inp").value=itemsToBeDel[1].innerText.replace("-","");
            let expAmt = document.getElementById("expense-amt");
            expAmt.innerText = "$"+(Number(expAmt.innerText.replace('$',''))-Number(itemsToBeDel[1].innerText.replace('-','')));
            let balAmt = document.getElementById("balance-amt");
            balAmt.innerText = "$"+(Number(balAmt.innerText.replace('$',''))+Number(itemsToBeDel[1].innerText.replace('-','')));


            //list gets shorter every time a element is deleted so same index
            itemsToBeDel[0].remove();
            // console.log(itemsToBeDel);
            itemsToBeDel[0].remove();
            itemsToBeDel[0].remove();
        });
    });
}
deleteList(document.querySelectorAll(".del-btn"));

//Edit button functionality
function editList(editBtns){
    editBtns.forEach(elm=>{
        elm.addEventListener('click',function(){
            var listCount = elm.parentElement.classList[0];
            var itemsToEdit = document.getElementsByClassName(listCount);
            document.getElementById("expense-name-inp").value=itemsToEdit[0].innerText;
            document.getElementById("expense-amt-inp").value=itemsToEdit[1].innerText.replace("-","");
            let expAmt = document.getElementById("expense-amt");
            expAmt.innerText = "$"+(Number(expAmt.innerText.replace('$',''))-Number(itemsToEdit[1].innerText.replace('-','')));
            let balAmt = document.getElementById("balance-amt");
            balAmt.innerText = "$"+(Number(balAmt.innerText.replace('$',''))+Number(itemsToEdit[1].innerText.replace('-','')));
            itemsToEdit[0].remove();
            itemsToEdit[0].remove();
            itemsToEdit[0].remove();
        });
    });
}
editList(document.querySelectorAll(".edit-btn"));