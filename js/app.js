var result = document.querySelector('.result');
var buttons = document.getElementById('buttons');
var number = "";
var solve = document.querySelector('.solve');
var main = [];
var sign = document.querySelector('.asign');



buttons.addEventListener('click', function () {
    if (event.target.className == 'num') {
        number += event.target.value;
    }
    result.value = number;
    if (event.target.className == 'sign') {
        result.value = number;
        main.push(number);
        if (main.length == 3) {
            var output = 0
            if (main[1] == '+') {
                output = add(main[0], main[2]);
            } else if (main[1] == '-') {
                output = subtract(main[0], main[2]);
            } else if (main[1] == '/') {
                output = division(main[0], main[2]);
            } else if (main[1] == '*') {
                output = multiply(main[0], main[2]);
            }
            result.value = output;
            main = [output];
        }
        number = "";
        main.push(event.target.value);
        console.log('SSS', main);
    }



    // console.log(main);
    // console.log(output);
    if (event.target.className == 'solve') {
        result.value = output;
        
        
    }

})

function add(sum1, sum2) {
    return Number(sum1) + Number(sum2);
}
function subtract(sum1, sum2) {
    return Number(sum1) - Number(sum2);
}

function division(sum1, sum2) {
    return Number(sum1) / Number(sum2);
}

function multiply(sum1, sum2) {
    return Number(sum1) * Number(sum2);
}





