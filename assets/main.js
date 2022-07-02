// display the values
function display(input){
    document.getElementById("viewcontent").value += input;
}

// Calculation
function equal(){

//    let result = null ;
//     var input1 = parseFloat(firstinput.innerHTML);
//     var input2 = parseFloat(secondinput.innerHTML);
//     var output = document.getElementById("viewcontent");
   

//     if (operator === '+') {
//         result = input1 + input2;
//         output.innerHTML = result;
//         console.log(result);
//     }
//     else if (operator === '-') {
//         result = input1 - input2;
//         output.innerHTML = result;
//     }
//     else if (operator === '*') {
//         result = input1 * input2;
//         output.innerHTML = result;
//     }
//     else if (operator === '/') {
//         result = input1 / input2;
//         output.innerHTML = result;
//     }else{
//         output.innerHTML = result;
//     }
    result = document.getElementById("viewcontent");
    result.value = eval(result.value);  
}

// clear the screen
function allClear(){
    document.getElementById("viewcontent").value="";
}

// delete the numbers from the right side
function del(){
    var newnumber = document.getElementById("viewcontent");
    var delt = newnumber.value.slice(0, -1);
    newnumber.value = delt;
}
