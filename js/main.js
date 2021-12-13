$(document).ready(function() {
    let currentFloor = 2; // переменная, где хранится текущий этаж 
    let floorPath =  $('.home-image path'); // каждый отдельный этаж в SVG
    let counterUp = $('.counter-up') // кнопка увелечения этажа
    let counterDown = $('.counter-down') // кнопка уменьшения этажа
    let modal = $('.modal');
    let modalCloseButton = $('.modal-close-button');
    let viewFlatsButton = $('.view-flats');
    
    // функция при наведение мышью на этаж 
    floorPath.on('mouseover', function() {
        floorPath.removeClass('current-floor'); // удаляем активный класс у этажей
        currentFloor = $(this).attr('data-floor'); // получаем значение текущего этажа
        $('.counter').text(currentFloor); // записываем значение этажа в счетчик справа
    });

    floorPath.on('click', toggleModal);
    modalCloseButton.on('click', toggleModal);
    viewFlatsButton.on('click', toggleModal);
    
    counterUp.on('click', function() { // отслеживаем лик по кнопке вверх
       if (currentFloor < 18) { // провереряем значение этажа, оно не должно быть больше 18
           currentFloor++; // прибваляем один этаж
           usCurrentFloor = currentFloor.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false});
           $('.counter').text(usCurrentFloor);
           floorPath.removeClass('current-floor');
           $(`[data-floor=${usCurrentFloor}]`).toggleClass('current-floor');
       }
    });
    counterDown.on('click', function() {
        if (currentFloor > 2) {
            currentFloor--;
            usCurrentFloor = currentFloor.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false});
            $('.counter').text(usCurrentFloor);
            floorPath.removeClass('current-floor');
            $(`[data-floor=${usCurrentFloor}]`).toggleClass('current-floor');
        }
    });
    function toggleModal() {
        modal.toggleClass('is-open');
    }
});