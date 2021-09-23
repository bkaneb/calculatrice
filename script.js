let numbersAll = document.querySelectorAll(".numbers");
let inputAff = document.getElementById("inputaff");
let rmzero = 0;

for(let i = 0; i<numbersAll.length; i++)/*tant que le i ne correspond pas a celui du tableau on ne rentre pas dans la condition*/
{
    numbersAll[i].addEventListener("click", function(event){
        if(rmzero == 0)
        {
            inputAff.value = "";
            rmzero++;
        }
        inputAff.value = inputAff.value + numbersAll[i].innerText;
    })
}
