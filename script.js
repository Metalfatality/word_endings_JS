window.addEventListener('DOMContentLoaded', function() {
    'use strict';

    let number,
        endingOne = 'товар',
        endingTwo = 'товара',
        endingThree = 'товаров';

    function ending(number, endingOne, endingTwo, endingThree) { 
        let goodName;

        number = number + '';

        (number.substr(-2, 2) >= 11 && number.substr(-2, 2) <= 14) ? goodName = endingThree:
        (((number % 10) >= 2) && ((number % 10) <= 4)) ? goodName = endingTwo:
        ((number % 10) == 1) ? goodName = endingOne:
        goodName = endingThree;
        
        return goodName;
    }
});