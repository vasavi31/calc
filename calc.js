let operator="";
let firstnumber="";
let secondnumber="";

function append(number)
{
    if(operator==""){
        firstnumber+=number;
        document.getElementById('result').value=firstnumber;
    }else
    {
        secondnumber+=number;
        document.getElementById('result').value=secondnumber;
    }
}
function operation(op){
    operator=op;
}

function calculate(){
    let result;
    switch(operator){
        case '+':
            result=parseInt(firstnumber)+parseInt(secondnumber);
            break;
        case '-':
            result=parseInt(firstnumber)-parseInt(secondnumber);
            break;
        case '*':
            result=parseInt(firstnumber)*parseInt(secondnumber);
            break;
        case '/':
            result=parseInt(firstnumber)/parseInt(secondnumber);
            break;

            
    }
    document.getElementById('result').value=result;

}

function clearresult(){
    operator="";
    firstnumber="";
    secondnumber="";
    document.getElementById('result').value='';
}