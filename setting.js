function numbervalue(value) {
    var resultvalue = document.querySelector("#result").value;

    document.querySelector("#result").value = resultvalue + value;
}
function numbersum() {
    var resultvalue = document.querySelector("#result").value;
    var finalResult = (resultvalue = eval(resultvalue));
    var finalResult = parseFloat(finalResult).toFixed(2);

    document.querySelector("#result").value = finalResult;
}

function runC() {
    document.querySelector("#result").value = "0";
}
