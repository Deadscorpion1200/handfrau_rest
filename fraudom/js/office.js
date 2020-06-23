$( function() {

    var type_clean;
    var id_clean;
    var squareNumber = 1;
    var squereNumberWithDifficult = 1;
    var hoursNumber = 8;
    //var workersNumber = 1;
    var totalTime;
    var costHour = 1000;
    var difficult = 1;
    var additionalCost = 0;
    var placeName;

    var minSquare = 50;
    var maxSquare = 500;
    var fromSquare = 50;
    var minWorkers = 1;
    var maxWorkers = 30;
    var stepSquare = 50;

    var saveSquare = function (data) {
        squareNumber = data.from;
        squereNumberWithDifficult = squareNumber * difficult;

        $('#input-square').val(data.from);

        var time = squereNumberWithDifficult / 10;
        var worker = Math.ceil(time / 8);
        var needTime = time / worker;

        if (hours) {
            hoursNumber = needTime;
        }

        countAdditionalCost();

        money();
    };

    var saveWorkers = function (data) {
        //workersNumber = data.from;

        //var time = squereNumberWithDifficult / 10;
        //var needTime = Math.ceil(time / workersNumber);

        //money();
    };

    var square = $("#slide-square").ionRangeSlider({
        min: minSquare,
        max: maxSquare,
        from: 50,
        to: 500,
        hide_from_to: true,
        step: 1000,
        onChange: saveSquare,
        onLoad: saveSquare,
        onFinish: 500,
        onStart: saveSquare,
        onUpdate: saveSquare
    }).data("ionRangeSlider");

    var hours = 1;

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

        totalTime = (squereNumberWithDifficult / 10);

        var x = parseInt(totalTime * costHour);// + parseInt(additionalCost);

        var fixHours = 0;
        var fixWorkers = 0;
        var description = '';

        // прайсовые значения фиксированные по кол-ву работников и типу уборки
        //var additionPricePerWorkers = 0;
        //var iNeedWorkers = Math.ceil(totalTime / 8);

        if (id_clean == 'morning') {
            if (squareNumber <= 50) {
                x = 5980;
                description = "1 человек 2 часа";
            }
            if (squareNumber > 50 && squareNumber <= 100) {
                x = 7130;
                description = "1 человек 2 часа";
            }
            if (squareNumber > 100 && squareNumber <= 150) {
                x = 8000;
                description = "1 человек 3 часа";
            }
            if (squareNumber > 150 && squareNumber <= 200) {
                x = 9400;
                description = "1 человек 4 часа";
            }
            if (squareNumber > 200 && squareNumber <= 250) {
                x = 10800;
                description = "1 человек 4 часа";
            }
            if (squareNumber > 250 && squareNumber <= 300) {
                x = 12000;
                description = "2 человека 3 часа";
            }
            if (squareNumber > 300 && squareNumber <= 350) {
                x = 13500;
                description = "2 человека 4 часа";
            }
            if (squareNumber > 350 && squareNumber <= 400) {
                x = 15500;
                description = "3 человека 3 часа";
            }
            if (squareNumber > 400 && squareNumber <= 450) {
                x = 16000;
                description = "3 человека 4 часа";
            }
            if (squareNumber > 450 && squareNumber <= 500) {
                x = 16500;
                description = "3 человека 5 часов";
            }
            if (squareNumber > 500 && squareNumber <= 600) {
                x = 98000;
                description = "4 человека 4 часа";
            }
            if (squareNumber > 600 && squareNumber <= 700) {
                x = 110000;
                description = "4 человека 5 часа";
            }
            if (squareNumber > 700 && squareNumber <= 800) {
                x = 125000;
                description = "5 человек 3 часа";
            }
            if (squareNumber > 800 && squareNumber <= 900) {
                x = 130000;
                description = "5 человек 4 часа";
            }
            if (squareNumber > 900 && squareNumber <= 1000) {
                x = 135000;
                description = "6 человек 3 часа";
            }
            if (squareNumber > 1000 && squareNumber <= 1400) {
                x = 145000;
                description = "7 человек 4 часа";
            }
            if (squareNumber > 1400 && squareNumber <= 1600) {
                x = 155000;
                description = "8 человек 4 часа";
            }
            if (squareNumber > 1600 && squareNumber <= 1800) {
                x = 160000;
                description = "9 человек 4 часа";
            }
            if (squareNumber > 1800 && squareNumber <= 2000) {
                x = 165000;
                description = "10 человек 4 часа";
            }

            description = description + ', график 5/2';
        }

        if (id_clean == 'evening') {
            if (squareNumber <= 50) {
                x = 18000;
                description = "1 человек 2 часа";
            }
            if (squareNumber > 50 && squareNumber <= 100) {
                x = 22000;
                description = "1 человек 2 часа";
            }
            if (squareNumber > 100 && squareNumber <= 150) {
                x = 28000;
                description = "1 человек 3 часа";
            }
            if (squareNumber > 150 && squareNumber <= 200) {
                x = 39500;
                description = "1 человек 4 часа";
            }
            if (squareNumber > 200 && squareNumber <= 250) {
                x = 49000;
                description = "1 человек 4 часа";
            }
            if (squareNumber > 250 && squareNumber <= 300) {
                x = 59000;
                description = "2 человека 3 часа";
            }
            if (squareNumber > 300 && squareNumber <= 350) {
                x = 67500;
                description = "2 человека 4 часа";
            }
            if (squareNumber > 350 && squareNumber <= 400) {
                x = 75000;
                description = "3 человека 3 часа";
            }
            if (squareNumber > 400 && squareNumber <= 450) {
                x = 85000;
                description = "3 человека 4 часа";
            }
            if (squareNumber > 450 && squareNumber <= 500) {
                x = 93000;
                description = "3 человека 5 часов";
            }
            if (squareNumber > 500 && squareNumber <= 600) {
                x = 101000;
                description = "4 человека 4 часа";
            }
            if (squareNumber > 600 && squareNumber <= 700) {
                x = 115000;
                description = "4 человека 5 часов";
            }
            if (squareNumber > 700 && squareNumber <= 800) {
                x = 125000;
                description = "5 человек 3 часа";
            }
            if (squareNumber > 800 && squareNumber <= 900) {
                x = 130000;
                description = "5 человек 4 часа";
            }
            if (squareNumber > 900 && squareNumber <= 1000) {
                x = 135000;
                description = "6 человек 3 часа";
            }
            if (squareNumber > 1000 && squareNumber <= 1400) {
                x = 145000;
                description = "7 человек 4 часа";
            }
            if (squareNumber > 1400 && squareNumber <= 1600) {
                x = 155000;
                description = "8 человек 4 часа";
            }
            if (squareNumber > 1600 && squareNumber <= 1800) {
                x = 155000;
                description = "9 человек 4 часа";
            }
            if (squareNumber > 1800 && squareNumber <= 2000) {
                x = 155000;
                description = "10 человек 4 часа";
            }

            description = description + ', график 5/2';
        }

        if (id_clean == 'everyday') {
            if (squareNumber <= 50) {
                x = 9400;
                description = "1 человек 8 часов";
            }
            if (squareNumber > 50 && squareNumber <= 100) {
                x = 12900;
                description = "1 человек 8 часов";
            }
            if (squareNumber > 100 && squareNumber <= 150) {
                x = 14800;
                description = "1 человек 8 часов";
            }
            if (squareNumber > 150 && squareNumber <= 200) {
                x = 16500;
                description = "1 человек 8 часов";
            }
            if (squareNumber > 200 && squareNumber <= 250) {
                x = 18800;
                description = "1 человек 8 часов";
            }
            if (squareNumber > 250 && squareNumber <= 300) {
                x = 19320;
                description = "1 человек 8 часов";
            }
            if (squareNumber > 300 && squareNumber <= 350) {
                x = 19520;
                description = "1 человек 8 часов";
            }
            if (squareNumber > 350 && squareNumber <= 400) {
                x = 20000;
                description = "1 человек 8 часов";
            }
            if (squareNumber > 400 && squareNumber <= 450) {
                x = 21500;
                description = "1 человек 8 часов";
            }
            if (squareNumber > 450 && squareNumber <= 500) {
                x = 22500;
                description = "1 человек 8 часов";
            }
            if (squareNumber > 600 && squareNumber <= 700) {
                x = 65000;
                description = "1 человек 8 часов";
            }
            if (squareNumber > 700 && squareNumber <= 800) {
                x = 75000;
                description = "2 человека 8 часов";
            }
            if (squareNumber > 800 && squareNumber <= 900) {
                x = 82000;
                description = "2 человека 8 часов";
            }
            if (squareNumber > 900 && squareNumber <= 1000) {
                x = 88000;
                description = "3 человека 8 часов";
            }
            if (squareNumber > 1000 && squareNumber <= 1400) {
                x = 120000;
                description = "4 человека 8 часов";
            }
            if (squareNumber > 1400 && squareNumber <= 1600) {
                x = 150000;
                description = "5 человек 8 часов";
            }
            if (squareNumber > 1600 && squareNumber <= 1800) {
                x = 180000;
                description = "6 человек 8 часов";
            }
            if (squareNumber > 1800 && squareNumber <= 2000) {
                x = 230000;
                description = "7 человек 8 часов";
            }

            description = description + ', график 5/2';
        }

        if (id_clean == 'newstart') {
            if (squareNumber <= 50) {
                x = 10000;
                description = "2 человека 10 часов";
            }
            if (squareNumber > 50 && squareNumber <= 100) {
                x = 25000;
                description = "3 человек 10 часа";
            }
            if (squareNumber > 100 && squareNumber <= 150) {
                x = 35000;
                description = "4 человека 10 часов";
            }
            if (squareNumber > 150 && squareNumber <= 200) {
                x = 42000;
                description = "5 человек 12 часов";
            }
            if (squareNumber > 200 && squareNumber <= 250) {
                x = 50000;
                description = "6 человека 12 часов";
            }
            if (squareNumber > 250 && squareNumber <= 300) {
                x = 58000;
                description = "7 человека 12 часов";
            }
            if (squareNumber > 300 && squareNumber <= 350) {
                x = 73000;
                description = "8 человек 12 часов";
            }
            if (squareNumber > 350 && squareNumber <= 400) {
                x = 78000;
                description = "9 человек 12 часов";
            }
            if (squareNumber > 400 && squareNumber <= 500) {
                x = 95000;
                description = "12 человек 12 часов";
            }
            if (squareNumber > 500 && squareNumber <= 600) {
                x = 115000;
                description = "14 человек 12 часов";
            }
            if (squareNumber > 600 && squareNumber <= 700) {
                x = 130000;
                description = "16 человек 12 часов";
            }
            if (squareNumber > 700 && squareNumber <= 800) {
                x = 152000;
                description = "18 человек 12 часов";
            }
            if (squareNumber > 800 && squareNumber <= 900) {
                x = 168000;
                description = "20 человека 12 часов";
            }
            if (squareNumber > 900 && squareNumber <= 1000) {
                x = 180000;
                description = "22 человека 12 часов";
            }
            if (squareNumber > 1000 && squareNumber <= 1400) {
                x = 249500;
                description = "23 человека 12 часов";
            }
            if (squareNumber > 1400 && squareNumber <= 1600) {
                x = 260000;
                description = "24 человека 12 часов";
            }
            if (squareNumber > 1600 && squareNumber <= 1800) {
                x = 280000;
                description = "26 человек 12 часов";
            }
            if (squareNumber > 1800 && squareNumber <= 2000) {
                x = 299999;
                description = "28 человек 12 часов";
            }

        }

        if (id_clean == 'general') {
            if (squareNumber <= 50) {
                x = 8700;
                description = "1 человек 8 часов";
            }
            if (squareNumber > 50 && squareNumber <= 100) {
                x = 16400;
                description = "2 человека 8 часов";
            }
            if (squareNumber > 100 && squareNumber <= 150) {
                x = 24000;
                description = "3 человека 8 часов";
            }
            if (squareNumber > 150 && squareNumber <= 200) {
                x = 30000;
                description = "4 человека 8 часов";
            }
            if (squareNumber > 200 && squareNumber <= 250) {
                x = 36250;
                description = "4 человека 10 часов";
            }
            if (squareNumber > 250 && squareNumber <= 300) {
                x = 41400;
                description = "5 человек 10 часов";
            }
            if (squareNumber > 300 && squareNumber <= 350) {
                x = 45500;
                description = "6 человек 10 часов";
            }
            if (squareNumber > 350 && squareNumber <= 400) {
                x = 50000;
                description = "7 человек 10 часов";
            }
            if (squareNumber > 400 && squareNumber <= 450) {
                x = 54000;
                description = "7 человек 12 часов";
            }
            if (squareNumber > 450 && squareNumber <= 500) {
                x = 57500;
                description = "8 человек 12 часов";
            }
            if (squareNumber > 500 && squareNumber <= 600) {
                x = 69900;
                description = "9 человек 12 часов";
            }
            if (squareNumber > 600 && squareNumber <= 700) {
                x = 80500;
                description = "9 человек 14 часов";
            }
            if (squareNumber > 700 && squareNumber <= 800) {
                x = 92000;
                description = "10 человек 12 часов";
            }
            if (squareNumber > 800 && squareNumber <= 900) {
                x = 103500;
                description = "11 человек 12 часов";
            }
            if (squareNumber > 900 && squareNumber <= 1000) {
                x = 115000;
                description = "12 человек 14 часов";
            }
            if (squareNumber > 1000 && squareNumber <= 1500) {
                x = 160500;
                description = "18 человек 14 часов";
            }
            if (squareNumber > 1500 && squareNumber <= 2000) {
                x = 200000;
                description = "22 человека 14 часов";
            }

        }

        $('.schedule-description').html(description);

        // доп. плата за доп. усулги
        x += parseInt(additionalCost);

        x = x.toString();
        x = x.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1,');

        $('.price span').text(x);
    }


    // перерасчет цены при смене типа уборки
    $('.select-type-clean').change(function (e) {
        difficult = parseInt($('.select-type-clean option:selected').data('difficult'));

        if ($('.place.custom-checkbox').find('input:checked').length > 0) {
            difficult = difficult + parseInt($('.place.custom-checkbox').find('input:checked').data('difficult'));
        }

        type_clean = $('.select-type-clean').val();
        id_clean = $('.select-type-clean option:selected').data('type');

        $('.clean-description p').hide();
        $('.clean-description p.' + id_clean).show();

        var id = $('.select-type-clean option:selected').data('id');
        $('.description-type-clean-wrapper .description-type-clean').hide();
        $('.description-type-clean-wrapper .clean' + id).show();

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


    /* связываем инпут квадратных метров с ползунком */
    $('#input-square').change(function (e) {
        square.update({
            from: $(this).val()
        });
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

$('.gen').click(function() {
  $('.clean2').addClass('active');
})
$('.chp').click(function() {
  $('.clean2').removeClass('active');
})
$('.sup').click(function() {
  $('.clean2').removeClass('active');
})
$('.two-week').click(function() {
  $('.visible').addClass('hidden');
  $('.visible').removeClass('flex');
})
$('.one-week').click(function() {
  $('.visible').removeClass('hidden');
  $('.visible').addClass('flex');
})
$('.two-m').click(function() {
  $('.visible').removeClass('hidden');
  $('.visible').addClass('flex');
})
$('.two-week').click(function() {
  $('.personal-prise').removeClass('hidden');
})
$('.one-week').click(function() {
  $('.personal-prise').addClass('hidden');
})
$('.two-m').click(function() {
  $('.personal-prise').addClass('hidden');
})
$('.chp').click(function() {
  $('.personal-prise').addClass('hidden');
})
$('.gen').click(function() {
  $('.personal-prise').addClass('hidden');
})
$('.gen').click(function() {
  $('.visible').addClass('hidden');
  $('.visible').removeClass('flex');
})
$('.sup').click(function() {
  $('.visible').removeClass('hidden');
  $('.visible').addClass('flex');
})
$('.chp').click(function() {
  $('.visible').removeClass('hidden');
  $('.visible').addClass('flex');
})
$('.left-link-open').click(function() {
  $('.left-text').toggleClass('hidden');
  $('.left-box').toggleClass('active');
  $('.left-box').toggleClass('hidden');
  $('.left-link-open').toggleClass('hidden');
  $('.left-link-hide').toggleClass('hidden');
  $('.section-info-calc').toggleClass('before-none');
})
$('.left-link-hide').click(function() {
  $('.left-text').toggleClass('hidden');
  $('.left-box').toggleClass('active');
  $('.left-box').toggleClass('hidden');
  $('.left-link-open').toggleClass('hidden');
  $('.left-link-hide').toggleClass('hidden');
  $('.section-info-calc').toggleClass('before-none');
})

$(".category").change(function(e) {
  e.preventDefault();
  $(this.value).toggleClass('mob-hidden');
});
