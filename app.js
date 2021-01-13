function getInput(num){
    var result = document.getElementById("result");
    result.value += num;
}

function reset (){
    var result = document.getElementById("result");
    result.value = ""
}

function calculation(){
    var result = document.getElementById("result");
    result.value = eval(result.value)
}