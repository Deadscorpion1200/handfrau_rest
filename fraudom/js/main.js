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
        from: 50,
        step: 100,
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

        /* связываем инпут квадратных метров с ползунком */
        $('#input-square').val(squareNumber);
        /* связываем инпут квадратных метров с ползунком */
        $('#input-workers').val(Math.ceil(workersNumber));
        /* связываем инпут квадратных метров с ползунком */
        $('#input-hours').val(Math.ceil(hoursNumber));


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

        if (id_clean == 'oneday') {
            if (squareNumber <= 30) {
                x = 3500;
            }
            if (squareNumber > 30 && squareNumber <= 40) {
                x = 3500;
            }
            if (squareNumber > 40 && squareNumber <= 50) {
                x = 4000;
            }
            if (squareNumber > 50 && squareNumber <= 60) {
                x = 4000;
            }
            if (squareNumber > 60 && squareNumber <= 70) {
                x = 5000;
            }
            if (squareNumber > 70 && squareNumber <= 80) {
                x = 5500;
            }
            if (squareNumber > 80 && squareNumber <= 90) {
                x = 5500;
            }
            if (squareNumber > 90 && squareNumber <= 100) {
                x = 6000;
            }
            if (squareNumber > 100 && squareNumber <= 110) {
                x = 7500;
            }
            if (squareNumber > 110 && squareNumber <= 120) {
                x = 7500;
            }
            if (squareNumber > 120 && squareNumber <= 130) {
                x = 7500;
            }
            if (squareNumber > 130 && squareNumber <= 140) {
                x = 8000;
            }
            if (squareNumber > 140 && squareNumber <= 150) {
                x = 8000;
            }
            if (squareNumber > 150 && squareNumber <= 160) {
                x = 8000;
            }
            if (squareNumber > 160 && squareNumber <= 170) {
                x = 10000;
            }
            if (squareNumber > 170 && squareNumber <= 180) {
                x = 10000;
            }
            if (squareNumber > 180 && squareNumber <= 190) {
                x = 10000;
            }
            if (squareNumber > 190 && squareNumber <= 200) {
                x = 12000;
            }
            if (squareNumber > 1800 && squareNumber <= 2000) {
                x = 165000;
            }
        }


        if (id_clean == 'extraclean') {
            if (squareNumber <= 30) {
                x = 5000;
            }
            if (squareNumber > 30 && squareNumber <= 40) {
                x = 5500;
            }
            if (squareNumber > 40 && squareNumber <= 50) {
                x = 6500;
            }
            if (squareNumber > 50 && squareNumber <= 60) {
                x = 8000;
            }
            if (squareNumber > 60 && squareNumber <= 70) {
                x = 8500;
            }
            if (squareNumber > 70 && squareNumber <= 80) {
                x = 9500;
            }
            if (squareNumber > 80 && squareNumber <= 90) {
                x = 11500;
            }
            if (squareNumber > 90 && squareNumber <= 100) {
                x = 12000;
            }
            if (squareNumber > 100 && squareNumber <= 110) {
                x = 12000;
            }
            if (squareNumber > 110 && squareNumber <= 120) {
                x = 13500;
            }
            if (squareNumber > 120 && squareNumber <= 130) {
                x = 14000;
            }
            if (squareNumber > 130 && squareNumber <= 140) {
                x = 15500;
            }
            if (squareNumber > 140 && squareNumber <= 150) {
                x = 16000;
            }
            if (squareNumber > 150 && squareNumber <= 160) {
                x = 16500;
            }
            if (squareNumber > 160 && squareNumber <= 170) {
                x = 17000;
            }
            if (squareNumber > 170 && squareNumber <= 180) {
                x = 18500;
            }
            if (squareNumber > 180 && squareNumber <= 190) {
                x = 19500;
            }
            if (squareNumber > 190 && squareNumber <= 200) {
                x = 20000;
            }
            if (squareNumber > 1800 && squareNumber <= 2000) {
                x = 165000;
            }
        }
        if (id_clean == 'everyclean') {
            if (squareNumber <= 30) {
                x = 9000;
            }
            if (squareNumber > 30 && squareNumber <= 40) {
                x = 12000;
            }
            if (squareNumber > 40 && squareNumber <= 50) {
                x = 14000;
            }
            if (squareNumber > 50 && squareNumber <= 60) {
                x = 15000;
            }
            if (squareNumber > 60 && squareNumber <= 70) {
                x = 22500;
            }
            if (squareNumber > 70 && squareNumber <= 80) {
                x = 22500;
            }
            if (squareNumber > 80 && squareNumber <= 90) {
                x = 26000;
            }
            if (squareNumber > 90 && squareNumber <= 100) {
                x = 27000;
            }
            if (squareNumber > 100 && squareNumber <= 110) {
                x = 28000;
            }
            if (squareNumber > 110 && squareNumber <= 120) {
                x = 30000;
            }
            if (squareNumber > 120 && squareNumber <= 130) {
                x = 32000;
            }
            if (squareNumber > 130 && squareNumber <= 140) {
                x = 35000;
            }
            if (squareNumber > 140 && squareNumber <= 150) {
                x = 37500;
            }
            if (squareNumber > 150 && squareNumber <= 160) {
                x = 39000;
            }
            if (squareNumber > 160 && squareNumber <= 170) {
                x = 39500;
            }
            if (squareNumber > 170 && squareNumber <= 180) {
                x = 40000;
            }
            if (squareNumber > 180 && squareNumber <= 190) {
                x = 41000;
            }
            if (squareNumber > 190 && squareNumber <= 200) {
                x = 42000;
            }
            if (squareNumber > 1800 && squareNumber <= 2000) {
                x = 165000;
            }
        }
        if (id_clean == 'everyday') {
            if (squareNumber <= 30) {
                x = 9000;
            }
            if (squareNumber > 30 && squareNumber <= 40) {
                x = 9000;
            }
            if (squareNumber > 40 && squareNumber <= 50) {
                x = 9000;
            }
            if (squareNumber > 50 && squareNumber <= 60) {
                x = 10000;
            }
            if (squareNumber > 60 && squareNumber <= 70) {
                x = 10000;
            }
            if (squareNumber > 70 && squareNumber <= 80) {
                x = 12000;
            }
            if (squareNumber > 80 && squareNumber <= 90) {
                x = 14000;
            }
            if (squareNumber > 90 && squareNumber <= 100) {
                x = 14000;
            }
            if (squareNumber > 100 && squareNumber <= 110) {
                x = 16000;
            }
            if (squareNumber > 110 && squareNumber <= 120) {
                x = 16000;
            }
            if (squareNumber > 120 && squareNumber <= 130) {
                x = 18000;
            }
            if (squareNumber > 130 && squareNumber <= 140) {
                x = 18000;
            }
            if (squareNumber > 140 && squareNumber <= 150) {
                x = 20000;
            }
            if (squareNumber > 150 && squareNumber <= 160) {
                x = 20000;
            }
            if (squareNumber > 160 && squareNumber <= 170) {
                x = 22000;
            }
            if (squareNumber > 170 && squareNumber <= 180) {
                x = 22000;
            }
            if (squareNumber > 180 && squareNumber <= 190) {
                x = 24000;
            }
            if (squareNumber > 190 && squareNumber <= 200) {
                x = 24000;
            }
            if (squareNumber > 1800 && squareNumber <= 2000) {
                x = 165000;
            }
        }
        if (id_clean == 'newstart') {
            if (squareNumber <= 30) {
                x = 8000;
            }
            if (squareNumber > 30 && squareNumber <= 40) {
                x = 8500;
            }
            if (squareNumber > 40 && squareNumber <= 50) {
                x = 8500;
            }
            if (squareNumber > 50 && squareNumber <= 60) {
                x = 9300;
            }
            if (squareNumber > 60 && squareNumber <= 70) {
                x = 12000;
            }
            if (squareNumber > 70 && squareNumber <= 80) {
                x = 12500;
            }
            if (squareNumber > 80 && squareNumber <= 90) {
                x = 15000;
            }
            if (squareNumber > 90 && squareNumber <= 100) {
                x = 16000;
            }
            if (squareNumber > 100 && squareNumber <= 110) {
                x = 16500;
            }
            if (squareNumber > 110 && squareNumber <= 120) {
                x = 17000;
            }
            if (squareNumber > 120 && squareNumber <= 130) {
                x = 17500;
            }
            if (squareNumber > 130 && squareNumber <= 140) {
                x = 18000;
            }
            if (squareNumber > 140 && squareNumber <= 150) {
                x = 21500;
            }
            if (squareNumber > 150 && squareNumber <= 160) {
                x = 22000;
            }
            if (squareNumber > 160 && squareNumber <= 170) {
                x = 23500;
            }
            if (squareNumber > 170 && squareNumber <= 180) {
                x = 25000;
            }
            if (squareNumber > 180 && squareNumber <= 190) {
                x = 25500;
            }
            if (squareNumber > 190 && squareNumber <= 200) {
                x = 28000;
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

        if ($('.place .active')) {
            difficult = difficult + parseInt($('.place .active').data('difficult'));
        }

        type_clean = $('.select-type-clean').val();
        id_clean = $('.select-type-clean option:selected').data('type');

        if (id_clean == "everyday") {
            $('.clean-everyday').show();
        }
        else {
            $('.clean-everyday').hide();
        }

        var id = $('.select-type-clean option:selected').data('id');
        $('.description-type-clean-wrapper .description-type-clean').hide();
        $('.description-type-clean-wrapper .clean' + id).show();

        square.update({
            step: stepSquare
        });
    });

    // перерасчет цены при вкл/выкл. галочки типа дом/квартира
    $('.place .nav-link').click(function (e) {
        difficult = parseInt($('.select-type-clean option:selected').data('difficult'));

        placeName = $(this).text();

        difficult = difficult + parseInt($(this).data('difficult'));

        square.update({
            step: stepSquare
        });
    });

    $('.place.custom-checkbox label').eq(0).click();

    $('.select-type-clean').change();


    // удаление доп. услуг, перерасчет цены
    /*$('body').on('click', '.delete', function (e) {
        e.preventDefault();

        additionalCost -= parseInt($(this).parents('li').attr('data-price'));

        $(this).parents('li').remove();

        money();
    });*/

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



    $('.count').change(function (e) {
        countAdditionalCost();
        var max = $(this).attr('max');
        if ($(this).val() > max) {
            $(this).val(max);
        }

        countAdditionalCost();
        money();
    });


    /* связываем инпут квадратных метров с ползунком */
    $('#input-square').change(function (e) {
        var max = $(this).attr('max');
        if ($(this).val() > max) {
            $(this).val(max);
        }

        square.update({
            from: $(this).val()
        });
    });

    /* связываем инпут квадратных метров с ползунком */
    $('#input-workers').change(function (e) {
        var max = $(this).attr('max');
        if ($(this).val() > max) {
            $(this).val(max);
        }

        workers.update({
            from: $(this).val()
        });
    });

    /* связываем инпут квадратных метров с ползунком */
    $('#input-hours').change(function (e) {
        var max = $(this).attr('max');
        if ($(this).val() > max) {
            $(this).val(max);
        }

        hours.update({
            from: $(this).val()
        });
    });


    $('.count-plus, .count-minus').click(function (e) {
        countAdditionalCost();
    });

    $('.additional-service .list li').click(function (e) {
        countAdditionalCost();
    });

    /* считаем все доп. услуги */
    function countAdditionalCost() {
        additionalCost = 0;

        $('.additional-service .list').find('li.active').each(function (e) {
            var count = parseInt($(this).find('.count').val()) || 0;

            if (count < 1) {
                count = 1;
            }

            var price = $(this).attr('data-price') * count;
            additionalCost += price;
        });

        money();
    }



    /* смена типа уборки */
    $('.clean-type-list li').click(function () {
        $(this).parent().find('.active').removeClass('active');
        $(this).addClass('active');

        var typeCleanId = $(this).data('select-id');
        $('.select-type-clean option[data-id=' + typeCleanId + ']').prop('selected', true);
        $('.select-type-clean').change();
    });



} );
