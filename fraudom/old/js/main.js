$( function() {

    var type_general = $('.type-general').val();
    var type_clean;
    var id_clean;
    var squareNumber = 1;
    var squereNumberWithDifficult = 1;
    var hoursNumber = 8;
    var workersNumber = 1;
    var totalTime;
    var costHour = 1000;
    var difficult = 1;
    var place = 1;
    var additionalCost = 0;
    var placeName;

    var minSquare = 10;
    var maxSquare = 200;
    var fromSquare = 50;
    var minWorkers = 1;
    var maxWorkers = 10;
    var stepSquare = 10;

    if (type_general == 'office') {
        minSquare = 50;
        maxSquare = 2000;
        fromSquare = 500;
        minWorkers = 3;
        maxWorkers = 30;
        stepSquare = 50;
    }

    var saveSquare = function (data) {
        squareNumber = data.from;
        squereNumberWithDifficult = squareNumber * difficult;

        var time = squereNumberWithDifficult / 10;
        var worker = Math.ceil(time / 8);
        var needTime = time / worker;

        if (hours) {
            hoursNumber = needTime;
            hours.update({
                from: needTime
            });
        }

        if (workers) {
            workersNumber = worker;
            workers.update({
                from: worker
            });
        }

        money();
    };

    var saveHours = function (data) {
        hoursNumber = data.from;

        var needTime = hoursNumber;
        var worker = Math.ceil(squereNumberWithDifficult / 10 / needTime);

        if (workers) {
            workers.update({
                from: worker
            });
        }

        money();
    };

    var saveWorkers = function (data) {
        workersNumber = data.from;

        var time = squereNumberWithDifficult / 10;
        var needTime = Math.ceil(time / workersNumber);

        if (hours) {
            hours.update({
                from: needTime
            });
        }

        money();
    };

    var square = $("#slide-square").ionRangeSlider({
        min: minSquare,
        max: maxSquare,
        from: fromSquare,
        step: 10,
        onChange: saveSquare,
        onLoad: saveSquare,
        onFinish: saveSquare,
        onStart: saveSquare,
        onUpdate: saveSquare
    }).data("ionRangeSlider");

    var hours = $("#slide-hours").ionRangeSlider({
        min: 2,
        max: 20,
        from: 8,
        onChange: saveHours,
        onLoad: saveHours,
        onFinish: saveHours,
        onStart: saveHours
    }).data("ionRangeSlider");

    var workers = $("#slide-workers").ionRangeSlider({
        min: minWorkers,
        max: maxWorkers,
        from: 1,
        onChange: saveWorkers,
        onLoad: saveWorkers,
        onFinish: saveWorkers,
        onStart: saveWorkers
    }).data("ionRangeSlider");



    function money() {
        totalTime = (squereNumberWithDifficult / 10);

        var x = parseInt(totalTime * costHour);// + parseInt(additionalCost);

       // прайсовые значения фиксированные по кол-ву работников и типу уборки
        var additionPricePerWorkers = 0;
        var iNeedWorkers = Math.ceil(totalTime / 8);

        if (id_clean == "oneday") {

            if (iNeedWorkers < workersNumber) {
                additionPricePerWorkers = Math.floor(workersNumber - iNeedWorkers) * 3000;
            }

            if (totalTime < 4) {
                x = 3000;
            }
            if (totalTime <= 4) {
                x = 3500;
            }
            if (totalTime > 4 && totalTime <= 6) {
                x = 4000;
            }
            if (totalTime > 6 && totalTime <= 7) {
                x = 4500;
            }
            if (totalTime > 7 && totalTime <= 8) {
                x = 5500;
            }
            if (totalTime > 8 && totalTime <= 9) {
                x = 6000;
            }
            if (totalTime > 9 && totalTime <= 10) {
                x = 7000;
            }
            if (totalTime > 10 && totalTime <= 12) {
                x = 7500;
            }
            if (totalTime > 12 && totalTime <= 16) {
                x = 9000;
            }
            if (totalTime > 16 && totalTime <= 20) {
                x = 10000;
            }

            x = x + additionPricePerWorkers;
        }

        if (id_clean == "everyday") {

            if (iNeedWorkers < workersNumber) {
                additionPricePerWorkers = Math.floor(workersNumber - iNeedWorkers) * 2500;
            }

            if (totalTime <= 3) {
                x = 2500;
            }
            if (totalTime > 3 && totalTime <= 4) {
                x = 3000;
            }
            if (totalTime > 4 && totalTime <= 6) {
                x = 3500;
            }
            if (totalTime > 6 && totalTime <= 7) {
                x = 4500;
            }
            if (totalTime > 7 && totalTime <= 8) {
                x = 5000;
            }
            if (totalTime > 8 && totalTime <= 9) {
                x = 5500;
            }
            if (totalTime > 9 && totalTime <= 10) {
                x = 6000;
            }
            if (totalTime > 10 && totalTime <= 12) {
                x = 7000;
            }
            if (totalTime > 12 && totalTime <= 13) {
                x = 7300;
            }
            if (totalTime > 13 && totalTime <= 14) {
                x = 7400;
            }
            if (totalTime > 14 && totalTime <= 15) {
                x = 7500;
            }
            if (totalTime > 15 && totalTime <= 16) {
                x = 8000;
            }
            if (totalTime > 16 && totalTime <= 20) {
                x = 8500;
            }

            x = x + additionPricePerWorkers;
        }

        if (id_clean == 'morning') {
            if (squareNumber <= 50) {
                x = 11000;
            }
            if (squareNumber > 50 && squareNumber <= 100) {
                x = 18000;
            }
            if (squareNumber > 100 && squareNumber <= 150) {
                x = 25000;
            }
            if (squareNumber > 150 && squareNumber <= 200) {
                x = 35500;
            }
            if (squareNumber > 200 && squareNumber <= 250) {
                x = 45000;
            }
            if (squareNumber > 250 && squareNumber <= 300) {
                x = 56000;
            }
            if (squareNumber > 300 && squareNumber <= 350) {
                x = 64500;
            }
            if (squareNumber > 350 && squareNumber <= 400) {
                x = 72000;
            }
            if (squareNumber > 400 && squareNumber <= 450) {
                x = 82000;
            }
            if (squareNumber > 450 && squareNumber <= 500) {
                x = 89000;
            }
            if (squareNumber > 500 && squareNumber <= 600) {
                x = 98000;
            }
            if (squareNumber > 600 && squareNumber <= 700) {
                x = 110000;
            }
            if (squareNumber > 700 && squareNumber <= 800) {
                x = 125000;
            }
            if (squareNumber > 800 && squareNumber <= 900) {
                x = 130000;
            }
            if (squareNumber > 900 && squareNumber <= 1000) {
                x = 135000;
            }
            if (squareNumber > 1000 && squareNumber <= 1400) {
                x = 145000;
            }
            if (squareNumber > 1400 && squareNumber <= 1600) {
                x = 155000;
            }
            if (squareNumber > 1600 && squareNumber <= 1800) {
                x = 160000;
            }
            if (squareNumber > 1800 && squareNumber <= 2000) {
                x = 165000;
            }
        }

        /*if (id_clean == 'evening') {
            if (totalTime < 50) {
                x = parseInt(totalTime * 600) + parseInt(additionalCost);
            }
            if (totalTime >= 50) {
                x = parseInt(totalTime * 500) + parseInt(additionalCost);
            }
            if (totalTime >= 60) {
                x = parseInt(totalTime * 450) + parseInt(additionalCost);
            }
            if (totalTime >= 75) {
                x = parseInt(totalTime * 420) + parseInt(additionalCost);
            }
            if (totalTime >= 90) {
                x = parseInt(totalTime * 380) + parseInt(additionalCost);
            }
            //x = parseInt(totalTime * (1 - totalTime / 140) * costHour) + parseInt(additionalCost);
            if (totalTime >= 100) {
                x = parseInt(totalTime * 350) + parseInt(additionalCost);
            }
        }*/

        // доп. плата за доп. усулги
        x += parseInt(additionalCost);

        x = x.toString();
        x = x.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1,');

        $('.price').text(x);
    }


    // перерасчет цены при смене типа уборки
    $('.select-type-clean').change(function (e) {
        difficult = parseInt($('.select-type-clean option:selected').data('difficult'));

        if ($('.place.custom-checkbox').find('input:checked').lenght > 0) {
            difficult = difficult + parseInt($('.place.custom-checkbox').find('input:checked').data('difficult'));
        }

        type_clean = $('.select-type-clean').val();
        id_clean = $('.select-type-clean option:selected').data('type');

        if (id_clean == "everyday") {
            $('.clean-everyday').show();
        }
        else {
            $('.clean-everyday').hide();
        }

        square.update({
            step: stepSquare
        });
    });

    // перерасчет цены при вкл/выкл. галочки типа дом/квартира
    $('.place.custom-checkbox label').click(function (e) {
        difficult = parseInt($('.select-type-clean option:selected').data('difficult'));

        placeName = $(this).parent().find('input').val();

        difficult = difficult + parseInt($(this).parent().find('input').data('difficult'));

        square.update({
            step: stepSquare
        });
    });

    $('.place.custom-checkbox label').eq(0).click();

    $('.select-type-clean').change();


    // удаление доп. услуг, перерасчет цены
    $('body').on('click', '.delete', function (e) {
        e.preventDefault();

        additionalCost -= parseInt($(this).parents('li').attr('data-price'));

        $(this).parents('li').remove();

        money();
    });

    // перерачет цены при добавлении услуг в список
    $('.add-service-to-list').on('click', function (e) {
        e.preventDefault();
        additionalCost = 0;

        $('.list-additional').html('');

        var html = '';
        var price;

        $('.additional-service').find('input:checked').each(function (e) {

            var count = parseInt($(this).parent().find('.count').val()) || 0;

            if (count < 1) {
                count = 1;
            }

            price = $(this).attr('data-price') * count;
            additionalCost += price;

            html += '<li data-price="' + price + '">' + $(this).parents('li').find('label').text() + '<i class="delete"></i></li>';
        });

        $('.list-additional').html(html);

        money();
    });







} );