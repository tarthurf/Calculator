$(document).ready(function() {

    let operator = "";
    let firstNumber = "";
    let secondNumber = "";
    let selectedEL = "";
    let operatorValue = "";
    let answerValue = false;
    function updateTextEL(element, object) {
        $(element).text(object);
    }
    $('button').click(function(event) {
        selectedEL = $(this);
    });
    function numberButton() {
        if (selectedEL.attr("class") === "btn btn-primary number" && answerValue === false) {
            x = selectedEL.val();
            if (operator === "") {
                firstNumber += x;
                updateTextEL("#first-number", firstNumber);
            } else {
                secondNumber += x;
                updateTextEL("#second-number", secondNumber);
            }
        }
        else if (firstNumber === "") {
            return;
        } 
        else if (selectedEL.attr("class") === "btn btn-danger operator") {
            x = selectedEL.find("span").text();
            operatorValue = "";
            operatorValue = selectedEL.val();
            operator = "";
            operator += x;
            updateTextEL("#operator", operator);
        }
    }  
    $(".card-body").on("click", "button", () => numberButton())
    $("#button-equal").on("click", function() {
        const equation = [firstNumber, operatorValue, secondNumber];
        answer = eval(equation[0] + equation[1] + equation[2])
        updateTextEL("#result", answer);
        answerValue = true;
    })
    $("#button-clear").on("click", function() {
        $("#first-number").empty();
        $("#operator").empty();
        $("#second-number").empty();
        $("#result").empty();
        operator = "";
        firstNumber = "";
        secondNumber = "";
        selectedEL = "";
        operatorValue = "";
        answerValue = false;
    });
});