let numbersAll = document.querySelectorAll(".numbers");
let inputAff = document.getElementById("inputaff");
let historyAff = document.getElementById("historyaff");
let rmzero = 0;
let firstValue = 0;
let secondValue = 0;
let thirdvalue = 0;
let saisie = 0;
let caseEgale;
let recupOperator;

function soustraction(){
    if(saisie == 0 && inputAff.value != "")
    {
        firstValue = parseFloat(inputAff.value);
        inputAff.value = "";
        historyAff.value = firstValue + "-";
        rmzero++;
        saisie++;
    }
    else if(saisie == 1){
        secondValue = parseFloat(inputAff.value);
        inputAff.value = secondValue;
        thirdvalue = parseFloat(historyAff.value) - secondValue;
        if(rmzero == 1)
        {
            historyAff.value = thirdvalue + "-";
        }else{
            historyAff.value = firstValue + "-";
            rmzero++;
        }
        inputAff.value = "";
        inputAff.placeholder = "0";
    }
}

function multiplication(){
    if(saisie == 0 && inputAff.value != "")
    {
        firstValue = parseFloat(inputAff.value);
        inputAff.value = "";
        historyAff.value = firstValue + "*";
        rmzero++;
        saisie++;
    }
    else if(saisie == 1){
        secondValue = parseFloat(inputAff.value);
        inputAff.value = secondValue;
        thirdvalue = secondValue * parseFloat(historyAff.value);
        if(rmzero == 1)
        {
            historyAff.value = thirdvalue + "*";
        }else{
            historyAff.value = firstValue + "*";
            rmzero++;
        }
        inputAff.value = "";
        inputAff.placeholder = "0";
    }
}

function diviser(){
    if(saisie == 0 && inputAff.value != "")
    {
        firstValue = parseFloat(inputAff.value);
        inputAff.value = "";
        historyAff.value = firstValue + "/";
        rmzero++;
        saisie++;
    }
    else if(saisie == 1){
        secondValue = parseFloat(inputAff.value);//enlever les string en les convertisant en int
        inputAff.value = secondValue;
        thirdvalue =  parseFloat(historyAff.value) / secondValue;
        if(rmzero == 1)
        {
            historyAff.value = thirdvalue + "/";
        }else{
            historyAff.value = firstValue + "/";
            rmzero++;
        }
        inputAff.value = "";
        inputAff.placeholder = "0";
    }
}


function addition(){
    if(saisie == 0 && inputAff.value != "")//premiere saisie 
    {
                firstValue = parseFloat(inputAff.value);
                inputAff.value = "";
                historyAff.value = firstValue + "+";
                rmzero++;
                saisie++;

    }else
    if(saisie == 1){//si ce n'est pas la premiere saisie dans inputaff
        secondValue = parseFloat(inputAff.value);
        inputAff.value = secondValue;
        thirdvalue = secondValue + parseFloat(historyAff.value);//on prend la derniere valeur calculer plus celle dans lecran principale
        if(rmzero == 1)
        {
            historyAff.value = thirdvalue + "+";//autre que premiere saisie dans history
        }else{
            historyAff.value = firstValue + "+";
            rmzero++;
        }
        inputAff.value = "";
        inputAff.placeholder = "0";
    }
}

function clearCalcul(operator)
{
    recupOperator = historyAff.value;//trasnmet la donner du input history
    caseEgale = recupOperator.substr(-1);//lis le dernier caractere qui est l'operateur
    //termine le calcul en cours ex si on avait 6*6*6*1 on doit bien faire tous les * avant le +
    if(saisie == 1){
        if(caseEgale == "*" && inputAff.value != "" && operator !="*")
    {
        historyAff.value = parseInt(historyAff.value) * parseInt(inputAff.value) + operator;   
        inputAff.value = "";
    }else if(caseEgale == "/" && inputAff.value != "" && operator !="/")
    {
        historyAff.value = parseInt(historyAff.value) / parseInt(inputAff.value) + operator;   
        inputAff.value = "";
    }else if(caseEgale == "-" && inputAff.value != "" && operator !="-")
    {
        historyAff.value = parseInt(historyAff.value) - parseInt(inputAff.value) + operator;   
        inputAff.value = "";
    }else if(caseEgale == "+" && inputAff.value != "" && operator !="+")
    {
        historyAff.value = parseInt(historyAff.value) * parseInt(inputAff.value) + operator;   
        inputAff.value = "";
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
            //on efface tous donc on decremente aussi pour revenir a la premiere saisie
            if(rmzero == 1 && saisie == 1)
            {
                rmzero--;
                saisie--;   
            }
            inputAff.value = "";
           // inputAff.placeholder = "0";
            historyAff.value = "";
            //historyAff.placeholder = "0";
        })
    }
    if(i == 1)// btn CE
    {
        numbersAll[i].addEventListener("click", function(event){
            
            inputAff.value = "";//mets la valeur a null pour pouvoir faire placeholder
        })
    }
    if(i == 3)// btn -
    {
        numbersAll[i].addEventListener("click", function(event){       
           recupOperator = historyAff.value;//trasnmet la donner du input history
            caseEgale = recupOperator.substr(-1);//lis le dernier caractere qui est l'operateur
            if(caseEgale == "+" && inputAff.value != "")
            {
                historyAff.value = parseInt(inputAff.value) + parseInt(historyAff.value) + "-";   
            }   
            soustraction();        
        })      
    }
    if(i==15)// btn +
    {
        numbersAll[i].addEventListener("click", function(event){
            clearCalcul("+");
                addition();
        })  
    }
    if(i==11)//btn *
    {
        numbersAll[i].addEventListener("click", function(event){
            multiplication();
    })  
    }
    if(i==7)//btn /
    {
        numbersAll[i].addEventListener("click", function(event){
            diviser();
    })  
    }
    if(i==18)//btn =
    {
        numbersAll[i].addEventListener("click", function(event){
            recupOperator = historyAff.value;//trasnmet la donner du input history
            caseEgale = recupOperator.substr(-1);//lis le dernier caractere qui est l'operateur
            //verification des operateurs
            if(inputAff.value != "")
            {
                if(caseEgale == "+"){
                    inputAff.value = parseFloat(inputAff.value) + parseFloat(historyAff.value);
                }else if(caseEgale == "-"){
                    inputAff.value = parseFloat(historyAff.value) - parseFloat(inputAff.value);
                }else if(caseEgale == "/"){
                    inputAff.value = parseFloat(historyAff.value) / parseFloat(inputAff.value);
                }else if(caseEgale == "*"){
                    inputAff.value = parseFloat(inputAff.value) * parseFloat(historyAff.value);
                }else if(caseEgale == "%"){
                    inputAff.value = parseFloat(inputAff.value) + parseFloat(historyAff.value);
                }
            }
            //
            historyAff.value = "";
            saisie--;
            rmzero--;
            console.log(caseEgale);
        })
    }
}

