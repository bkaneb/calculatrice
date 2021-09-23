let numbersAll = document.querySelectorAll(".numbers");
let inputAff = document.getElementById("inputaff");


for(let i = 0; i<numbersAll.length; i++)/*tant que le i ne correspond pas a celui du tableau on ne rentre pas dans la condition*/
{
    numbersAll[i].addEventListener("click", function(event){
    inputAff.value = inputAff.value + numbersAll[i].innerText;
    })
}
