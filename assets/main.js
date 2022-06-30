const input1 = parseFloat(input1);
const input2 = parseFloat(input2);

 
// function display(input){
//     document.getElementById('viewcontent').value += input
//     return input;
// }
function display(button){
    var input = button.value;
    document.getElementById("viewcontent").value += input;
}
    let result;

    if (value == '+') {
        result = input1 + input2;
        document.getElementById("viewcontent").innerHTML = result;
    }
    else if (value == '-') {
        result = input1 - input2;
        document.getElementById("viewcontent").innerHTML = result;
    }
    else if (value == '-') {
        result = input1 + input2;
        document.getElementById("viewcontent").innerHTML = result;
    }
    else {
        result = input1 / input2;
        document.getElementById("viewcontent").innerHTML = result;
    }
    

    function clear(){
        // var output = 0;
        document.getElementById("viewcontent").innerHTML = " ";
    }


// function del(){
//     const input = document.querySelector('input');
//     input.addEventListener('click', function() {
//         input.innerHTML = slice(0, -1);
//     })
    
// }
