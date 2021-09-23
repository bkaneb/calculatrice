let numbersAll = document.querySelectorAll(".numbers");
let inputAff = document.getElementById("inputaff");
let historyAff = document.getElementById("historyaff");
let rmzero = 0;
let firstValueAddition = 0;
let secondValueAddition = 0;
let thirdvalue = 0;
let iFplus = 0;
let caseEgale;
let recupOperator;
/*function soustraction(){
    if(iFplus == 1){
        secondValueAddition = parseInt(inputAff.value);
        inputAff.value = secondValueAddition;
        thirdvalue = secondValueAddition - parseInt(historyAff.value);
        if(rmzero == 1)
        {
            historyAff.value = thirdvalue - "+";
        }else{
            historyAff.value = firstValueAddition - "+";
            rmzero++;
        }
    }
}*/
function addition(){
    if(iFplus == 0)//premiere saisie 
    {
                firstValueAddition = parseInt(inputAff.value);
                inputAff.value = "";
                historyAff.value = firstValueAddition + "+";
                rmzero++;
                iFplus++;

    }else
    if(iFplus == 1){//si ce n'est pas la premiere saisie dans inputaff
        secondValueAddition = parseInt(inputAff.value);
        inputAff.value = secondValueAddition;
        thirdvalue = secondValueAddition + parseInt(historyAff.value);//on prend la derniere valeur calculer plus celle dans lecran principale
        if(rmzero == 1)
        {
            historyAff.value = thirdvalue + "+";//autre que premiere saisie dans history
        }else{
            historyAff.value = firstValueAddition + "+";
            rmzero++;
        }
    }
}

for(let i = 0; i<numbersAll.length; i++)/*tant que le i ne correspond pas a celui du tableau on ne rentre pas dans la condition*/
{
     if((i>3 && i<7)|| (i>7 && i<11)|| (i>11 && i<15)|| (i>15 && i<18))//tous les chiffres
    {
        numbersAll[i].addEventListener("click", function(event){           
            inputAff.value = inputAff.value + numbersAll[i].innerText;// donne la valeur de la case du grip lu
        })
    }

   if(i == 2)//btn C
    {
        numbersAll[i].addEventListener("click", function(event){
            inputAff.value = "";//mets la valeur a null pour pouvoir faire placeholder
            inputAff.placeholder = "0";
        })
    }
    if(i == 1)// btn CE
    {
        numbersAll[i].addEventListener("click", function(event){
            //on efface tous donc on decremente aussi pour revenir a la premiere saisie
            rmzero--;
            iFplus--;
            inputAff.value = "";
            inputAff.placeholder = "0";
            historyAff.value = "";
            historyAff.placeholder = "0";
        })
    }
    if(i == 3)// btn -
    {
        /*numbersAll[i].addEventListener("click", function(event){
            
                if(iFplus == 0)
                {
                    firstValueAddition = parseInt(inputAff.value);
                    inputAff.value = "";
                    historyAff.value = firstValueAddition + "-";
                    rmzero++;
                    iFplus++;
    
                }else
                {
                    soustraction();
                }
        
        })      */
    }
    if(i==15)// btn +
    {
        numbersAll[i].addEventListener("click", function(event){
                addition();
        })  
    }
    if(i==18)//btn =
    {
        numbersAll[i].addEventListener("click", function(event){
            recupOperator = historyAff.value;//trasnmet la donner du input history
            caseEgale = recupOperator.substr(-1);//lis le dernier caractere qui est l'operateur
            //verification des operateurs
            if(caseEgale == "+"){
                inputAff.value = parseInt(inputAff.value) + parseInt(historyAff.value);
            }else if(caseEgale == "-"){
                inputAff.value = parseInt(inputAff.value) + parseInt(historyAff.value);
            }else if(caseEgale == "/"){
                inputAff.value = parseInt(inputAff.value) + parseInt(historyAff.value);
            }else if(caseEgale == "*"){
                inputAff.value = parseInt(inputAff.value) + parseInt(historyAff.value);
            }else if(caseEgale == "%"){
                inputAff.value = parseInt(inputAff.value) + parseInt(historyAff.value);
            }
            //
            historyAff.value = "";
            iFplus--;
            rmzero--;
            console.log(caseEgale);
        })
    }
}

