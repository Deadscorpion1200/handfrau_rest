let slider = $('.range');
let fill = $('.bar .fill');
let baseSum = 0;
let totalSum = 0;
let addSum = 0;
function setBar() {
    fill.css('width', (slider.val() / 20) + '%');
    square = slider.val();
}

slider.on('input', setBar);
setBar();

$('.navbar-mobile__menu').on('click', function (e) {
    e.preventDefault();
    $(this).toggleClass('navbar-mobile__menu_active');
    $('.navbar-nav__mobile').toggleClass('navbar-nav__mobile_active');
});
// $('.modal-contact__checkbox').addEventListener('click', function(){
// if(!($(this).checked))   {     console.log('1');
// $('.modal-contact__label:before').css('border', 'red');   } }) Переключение
// вкладок




const toggleTabContent = (index) => {
    for (let i = 0; i < typeListText.length; i++) {
        if (index === i) {
            typeListItems[i]
                .classList
                .add('calc-type__category_active');
            typeListText[i]
                .classList
                .remove('calc-type__description_adaptive--d-none');
        } else {
            typeListItems[i]
                .classList
                .remove('calc-type__category_active');
            typeListText[i]
                .classList
                .add('calc-type__description_adaptive--d-none');
        }
    }
};


/*
// Окрашивание плиток
let services = document.querySelector('.calc-calculator-services');
services.addEventListener('click', (event) => {
    let target = event.target;
    let serviceTarget = target.closest('.calc-calculator__service');
    let tr;
    let spanAmountSel = target.closest('.calc-calculator-service__parameters');

    if(target.closest('.button-minus')){
        spanAmountSel = spanAmountSel.querySelector('span.amount');
        if( +spanAmountSel.textContent > 1) {
            spanAmountSel.textContent--;
            // addSum -= +serviceTarget.dataset.price;
        }
    }
    else if(target.closest('.button-plus')){
        spanAmountSel = spanAmountSel.querySelector('span.amount');
        spanAmountSel.textContent++;
        // addSum += +serviceTarget.dataset.price;
    }
    else if (serviceTarget.matches('.calc-calculator__service')) {
        serviceTarget
            .classList
            .toggle('calc-calculator__service--active');

        let addPrice = +serviceTarget.dataset.price;
        if( !serviceTarget.classList.contains('calc-calculator__service--active')) addPrice = -addPrice;
        // addSum += addPrice;
    }

    calc();
});

// бегунок
let inputRange = document.querySelector('.range'),
    area = document.querySelector('.calc-calculator-square__square_count'),
    result = document.querySelector('.calc-result-sum__count'),
    resultPersonal = document.querySelectorAll('.calc-result-personal__man'),
    resultHours = document.querySelectorAll('.calc-result-personal__hour');

inputRange.addEventListener('input', (event) => {
    inputRange.value = event.target.value;
    area.textContent = +inputRange.value;

    // Количество людей и часов
    for (let i = 0; i < resultPersonal.length && i < resultHours.length; i++) {
        if (+inputRange.value === 10) {
            resultPersonal[i].textContent = '1 человек';
            resultHours[i].textContent = '2 часа';
        } else if (+inputRange.value === 20) {
            resultPersonal[i].textContent = '1 человек';
            resultHours[i].textContent = '4 часа';
        } else if (+inputRange.value === 30) {
            resultPersonal[i].textContent = '1 человек';
            resultHours[i].textContent = '6 часов';
        } else if (+inputRange.value === 40) {
            resultPersonal[i].textContent = '1 человек';
            resultHours[i].textContent = '8 часов';
        } else if (+inputRange.value === 50) {
            resultPersonal[i].textContent = '2 человека';
            resultHours[i].textContent = '5 часов';
        } else if (+inputRange.value === 60) {
            resultPersonal[i].textContent = '2 человека';
            resultHours[i].textContent = '6 часов';
        } else if (+inputRange.value === 70) {
            resultPersonal[i].textContent = '2 человека';
            resultHours[i].textContent = '7 часов';
        } else if (+inputRange.value === 80) {
            resultPersonal[i].textContent = '2 человека';
            resultHours[i].textContent = '8 часов';
        } else if (+inputRange.value === 90) {
            resultPersonal[i].textContent = '3 человека';
            resultHours[i].textContent = '6 часов';
        } else if (+inputRange.value === 100) {
            resultPersonal[i].textContent = '3 человека';
            resultHours[i].textContent = '7 часов';
        } else if (+inputRange.value === 110) {
            resultPersonal[i].textContent = '3 человека';
            resultHours[i].textContent = '8 часов';
        } else if (+inputRange.value === 120) {
            resultPersonal[i].textContent = '3 человека';
            resultHours[i].textContent = '8 часов';
        } else if (+inputRange.value === 130) {
            resultPersonal[i].textContent = '4 человека';
            resultHours[i].textContent = '7 часов';
        } else if (+inputRange.value === 140) {
            resultPersonal[i].textContent = '4 человека';
            resultHours[i].textContent = '7 часов';
        } else if (+inputRange.value === 150) {
            resultPersonal[i].textContent = '4 человека';
            resultHours[i].textContent = '8 часов';
        } else if (+inputRange.value === 160) {
            resultPersonal[i].textContent = '4 человека';
            resultHours[i].textContent = '8 часов';
        } else if (+inputRange.value === 170) {
            resultPersonal[i].textContent = '5 человек';
            resultHours[i].textContent = '7 часов';
        } else if (+inputRange.value >= 180 && +inputRange.value <= 200) {
            resultPersonal[i].textContent = '5 человек';
            resultHours[i].textContent = '8 часов';
        }
    }

    calc();

    // Передаём в модалку данные из калькулятора
    let modalCount = document.querySelector('.add-modal-contact__count');
    modalCount.textContent = result.textContent;
});

// Калькулятор
const calc = (price = 200) => {
    addSum = 0;
    let services  = document.querySelectorAll('.calc-calculator__service');
    let serviceAmount = 1;
    services.forEach( srv => {
        if( srv.classList.contains('calc-calculator__service--active')) {
            let spanAmountSel = srv.querySelector('span.amount');

            if(spanAmountSel) serviceAmount = +spanAmountSel.textContent;
            addSum += serviceAmount * +srv.dataset.price;
            }
        });

    baseSum = price * inputRange.value;
    result.textContent = (baseSum+addSum).toLocaleString();
};
calc();*/
// popup'ы
let window1 = document.querySelector('.modal');
let window2 = document.querySelector('.add-modal');

$('.modal-contact__close').on('click', function () {
    window1
        .classList
        .remove('modal_active')
    // window2.classList.remove('add-modal_active')
});
$('.modal-contact-close').on('click', function () {
    window1
        .classList
        .remove('modal_active');
});
$('.modal-mobile__close').on('click', function (e) {
    e.preventDefault();
    window1
        .classList
        .remove('modal_active');
})

// слайдеры
let swiper1 = new Swiper('.special-gallery', {
    slidesPerView: 2,
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: '.special-gallery__pagination',
        clickable: true
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        576: {
            slidesPerView: 2

        }
    }
});

let swiper2 = new Swiper('.command-slider-container', {
    // Optional parameters
    loop: true,
    spaceBetween: 30,
    slidesPerView: 3,
    // If we need pagination
    pagination: {
        clickable: true,
        el: '.command-pagination'
    },

    // Navigation arrows
    navigation: {
        nextEl: '.command-button-next',
        prevEl: '.command-button-prev'
    },

    breakpoints: {
        320: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2,
            centredSlides: false
        },
        991: {
            slidesPerview: 3,
            centeredSlides: true
        }
    }
});

let swiper3 = new Swiper('.materials-slider', {
    loop: true,
    slidesPerView: 2,
    navigation: {
        nextEl: '.materials-button-next',
        prevEl: '.materials-button-prev'
    },
    pagination: {
        clickable: true,
        el: '.materials-slider-pagination'
    }

});

let swiper6 = new Swiper('.chemistry-slider', {
    loop: true,
    slidesPerView: 2,
    navigation: {
        nextEl: '.chemistry-button-next',
        prevEl: '.chemistry-button-prev'
    },
    pagination: {
        clickable: true,
        el: '.materials-slider-pagination'
    }

});

let swiper4 = new Swiper('.partners-slider-container', {
    loop: true,
    navigation: {
        nextEl: '.partners-button-next',
        prevEl: '.partners-button-prev'
    },
    breakpoints: {
        1200: {
            slidesPerView: 4
        },
        991: {
            slidesPerView: 3
        },
        768: {
            spaceBetween: 90,
            slidesPerView: 2
        },
        320: {
            centeredSlides: true,
            splidesPerView: 1,
            pagination: {
                clickable: true,
                el: '.partners-pagination'
            }
        }
    }
});
let swiper5 = new Swiper('.reviews-slider-container', {
    speed: 600,
    loop: true,
    navigation: {
        nextEl: '.reviews-button-next',
        prevEl: '.reviews-button-prev'
    },
    pagination: {
        clickable: true,
        el: '.reviews-pagination'
    },
    slidesPerView: 1,
    spaceBetween: 90,
    centeredSlides: true
});

$("input[type=file]").change(function () {
    var files = $(this)[0].files;
    var filesName = [];
    for (var i = 0; i < files.length; i++) {
        var fileName = files[i].name.replace(/.*\\/, "");
        if (fileName) {
            filesName.push(fileName)
        }
    }

    if (filesName.length > 0) {
        $('.evaluation-form__header').css('color', '#3a9fec');
        $('.evaluation-form__subtitle').css('max-width', '180px');
        $('.evaluation-form__subtitle').css('text-align', 'center');
        $('.evaluation-form__subtitle').text(
            'для замены перетащите другие фото объекта сюда'
        );
        $(".form-box-label").text(filesName.join(', '));
    }
});





$(document).ready(function () {

    // Переменная куда будут располагаться данные файлов
    var files;

    // Вешаем функцию на событие Получим данные файлов и добавим их в переменную
    $('input[type=file]').change(function () {
        files = this.files;
    });

    $('.phone').mask("+7 (999) 999-99-99");
    $('.form1-form').each(function () {
        $(this).validate({
            rules: {
                formName: {
                    required: true
                },
                formTel: {
                    required: true
                }
            },
            errorClass: "error",
            errorElement: "label",
            errorPlacement: function (invalid, label) {},
            submitHandler: function (form) {
                $.ajax({
                    url: "smart3.php",
                    type: "POST",
                    data: $(form).serialize(),
                    success: function () {
                        $('.modal').addClass('modal_active')
                        $('#modal-main').hide();
                        $('#modal-order').hide();
                        $('#modal-photo').hide();
                        $('#modal-success').show();
                        $('form').trigger('reset');
                    }
                })
            }
        })
    });
    $('.modal-contact-form').each(function () {
        $(this).validate({
            rules: {
                name: {
                    required: true
                },
                tel: {
                    required: true
                },
                check: {
                    required: true
                }
            },
            errorClass: "invalid",
            errorElement: "label",
            errorPlacement: function (invalid, label) {},
            submitHandler: function (form) {
                // e.preventDefault();
                $.ajax({
                    url: "smart.php",
                    type: "POST",
                    data: $(form).serialize(),
                    success: function () {
                        $('#modal-main').hide();
                        $('#modal-success').show();
                        $('form').trigger('reset');
                    }
                })
            }
        })
    });
    $('.modal-check-form').each(function(){
    $(this).validate({
        rules: {
            name: {
                required: true
            },
            tel: {
                required: true
            },
            email: {
                required: true
            }
        },
        errorClass: "invalid",
        errorElement: "label",
        errorPlacement: function (invalid, label){},
        submitHandler: function(form){
            $.ajax({
                url: "smart4.php",
                type: "POST",
                data: $(form).serialize(),
                success: function() {
                    $('#modal-main-check').hide();
                    $('#modal-success').show();
                    $('form').trigger('reset');
                }
            })
        }
    })
});
    $('.add-modal-contact__form').each(function () {
        $(this).validate({
            rules: {
                orderName: {
                    required: true
                },
                orderTel: {
                    required: true
                },
                orderCheck: {
                    required: true
                }
            },
            errorClass: "invalid",
            errorElement: "label",
            errorPlacement: function (invalid, label) {},
            submitHandler: function (form) {
                // e.preventDefault();
                $.ajax({
                    url: "smart1.php",
                    type: "POST",
                    data: $(form).serialize(),
                    success: function () {
                        $('#modal-order').hide();
                        $('#modal-success').show();
                        $('form').trigger('reset');
                    }
                })
            }
        })
    });

    // $('.evaluation-form').validate({

    //     rules: {

    //         evaName: {

    //             required: true

    //         },

    //         evaTel: {

    //             required: true

    //         }

    //     },

    //     errorClass: "invalid",

    //     errorElement: "label",

    //     errorPlacement: function (invalid, label) {},

    //     submitHandler: function (form, event) {

    //         event.stopPropagation(); // Остановка происходящего

    //         event.preventDefault(); // Полная остановка происходящего

    //         var fd = new FormData;

    //         $.each(files, function (key, value) {

    //             fd.append(key, value);

    //         });

    //         fd.append('evaTel', $('#evaTel').val());

    //         fd.append('evaName', $('#evaName').val());

    //         $.ajax({

    //             url: 'smart2.php',

    //             method: "POST",

    //             processData: false,

    //             contentType: false,

    //             data: fd,

    //             success: function (respond, textStatus, jqXHR) {

    //                 // Если все ОК

    //                 if (typeof respond.error === 'undefined') {

    //                     // Файлы успешно загружены, делаем что нибудь здесь выведем пути к загруженным
    //                     // файлам в блок '.ajax-respond'

    //                     var files_path = respond.files;

    //                     var html = '';

    //                     $.each(files_path, function (key, val) {
    //                         html += val + '<br>';
    //                     })

    //                     console.log(html);

    //                     $('.modal').addClass('modal_active');

    //                     $('.modal-contact-body').hide();

    //                     $('.add-modal-contact').hide();

    //                     $('#modal-success').hide();

    //                     $('#modal-photo').show();

    //                     $('form').trigger('reset');

    //                     $('.evaluation-form__header').css('color', '#9DAFBD');

    //                     $('.evaluation-form__title').text('Выберите фотографии');

    //                     $('.evaluation-form__subtitle').css('max-width', '100%');

    //                     $('.evaluation-form__subtitle').text('или перетащите фото объекта сюда')

    //                 } else {

    //                     console.log('ОШИБКИ ОТВЕТА сервера: ' + respond.error);

    //                 }

    //             },

    //             error: function (jqXHR, textStatus, errorThrown) {

    //                 console.log('ОШИБКИ AJAX запроса: ' + textStatus);

    //             }

    //         });

    //     }
    // });

    let modal = $('.modal');
    $('.button-modal').on('click', function () {
        event.preventDefault();
        modal.addClass('modal_active');
        let target = $(this).attr('data-target');
        $('.modal-contact_hidden').hide();
        $('#' + target).show();
    });

    var massive = [];
    modalServices = document.querySelector('.modal-contact__input-services');
    modalServices.value = massive

    $('#order-calc').click(function () {
        var services = '';
        $('.add-modal-contact-add__title').hide();
        var modalAmount = document.querySelector('.add-modal-contact__amount');
        var modalCount = document.querySelector('.modal-contact__input-count');
        var modalType = document.querySelector('.modal-contact__input-type');
        modalCount.value = modalAmount.textContent;

        $('.calc-calculator__service--active').each(function (e) {
            var title = $(this)
                .find('.calc-calculator-service__header')
                .text();
            var params = $(this)
                .find('.params')
                .html() || '';
            var value = $(this)
                .find('.amount')
                .text() || '';
            var serviceId = $(this).data('service-id');
            massive.push(title + ' ' + value + ' ' + params);
            // console.log(title, params, value, serviceId)

            services += '<li class="add-modal-contact-add__item" data-service-id="' + serviceId + '"><d' +
                    'iv class="add-modal-contact-add__info"><span class="add-modal-contact-add__mar' +
                    'k"></span><span class="add-modal-contact-add__name">' + title + '</span></div>' +
                    '<div class="add-modal-contact-add__details"><span class="add-modal-contact-add' +
                    '__items">' + value + '</span> ' + params + '<img src="img/popup/x.png" alt="" ' +
                    'class="add-modal-contact-add__remove"></div></li>';
            console.log(massive);
            modalServices.value = massive;

        });

        $('.add-modal-contact-add__list').html(services);

        if (services) {
            $('.add-modal-contact-add__title').show();
        }
        let typeCleaning = document.getElementById('cleaning-type'),
            typeListItemsActive = typeList.querySelector('.calc-type__category_active'),
            cleaningTime = document.getElementById('cleaning-time'),
            cleaningTimeValue = cleaningTime
                .options[cleaningTime.selectedIndex]
                .value,
            special = document.getElementById('special');
        if (typeListItemsActive.textContent === 'Утренняя') {
            typeCleaning.textContent = 'утреннюю';
            modalType.value = typeListItemsActive.textContent;
            special.textContent = '';
        } else if (typeListItemsActive.textContent === 'Вечерняя') {
            typeCleaning.textContent = 'вечернюю';
            modalType.value = typeListItemsActive.textContent;
            special.textContent = '';
        } else if (typeListItemsActive.textContent === 'Ежедневная') {
            typeCleaning.typeListItemsActive = 'ежедневную';
            modalType.value = typeListItemsActive.textContent;
            special.textContent = '';
        } else if (typeListItemsActive.textContent === 'Генеральная') {
            typeCleaning.textContent = 'генеральную';
            modalType.value = typeListItemsActive.textContent;
            special.textContent = '';
        } else if (typeListItemsActive.textContent === 'После ЧП') {
            typeCleaning.textContent = '';
            special.textContent = 'после ЧП';
            modalType.value = typeListItemsActive.textContent;
        }

        if (document.documentElement.clientWidth < 769) {
            if (cleaningTimeValue === 'morning') {
                typeCleaning.textContent = 'утреннюю';
                special.textContent = '';
            } else if (cleaningTimeValue === 'evening') {
                typeCleaning.textContent = 'вечернюю';
                special.textContent = '';
            } else if (cleaningTimeValue === 'everyday') {
                typeCleaning.textContent = 'ежедневную';
                special.textContent = '';
            } else if (cleaningTimeValue === 'general') {
                typeCleaning.textContent = 'генеральную';
                special.textContent = '';
            } else if (cleaningTimeValue === 'emergency') {
                typeCleaning.textContent = '';
                special.textContent = 'после ЧП';
            }
        }
    });

    $('body').on('click', '.add-modal-contact-add__remove', function () {
        // $('.calc-calculator-services').find('calc-calculator__service--active').each(function(e){
        console.log($(this).parent('div').parent('li').data('serviceId'));
        var id = $(this)
            .parent('div')
            .parent('li')
            .data('serviceId');

        $(this)
            .parent('div')
            .parent('li')
            .remove();
        $('.calc-calculator__service[data-service-id=' + id + ']').removeClass(
            'calc-calculator__service--active'
        );
        // $('.select-type-clean').change();
        massive.splice(id - 1, 1)
        console.log(massive);

    });

    $('.clock-calculator-services__showMore').click(function (e) {
        e.preventDefault();
        $('.calc-service-add').removeClass('calc-service_hidden');
        $('.clock-calculator-services__showMore').css('display', 'none');
        $('.clock-calculator-services__hideMore').css('display', 'block');
    })
    $('.clock-calculator-services__hideMore').click(function (e) {
        e.preventDefault();
        $('.calc-service-add').addClass('calc-service_hidden');
        $('.clock-calculator-services__hideMore').css('display', 'none');
        $('.clock-calculator-services__showMore').css('display', 'block');
    })

    $('.dirt-slider').slick({
        centerMode: true,
        slidesToShow: 1,
        verticalSwiping: true,
        vertical: true,
        prevArrow: '<div class="dirt-arrow__up">',
        nextArrow: '<div class="dirt-arrow__down">',
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    verticalSwiping: false,
                    vertical: false,
                    dots: true
                }
            }
        ]
    });

    // var dropZone = document.querySelector('.box__input');
    // var startUpload = function(files)
    // {
    //     console.log(files)
    //     // $('input[type=file]').change(function () {
    //     //     this.files = files;
    //     // });
    // };

    // // drop functionality
    // dropZone.ondragover = function()
    // {
    //     this.className = 'box__input dragover' ;
    //     return false;
    // };
    // dropZone.ondragleave = function()
    // {
    //     this.className = 'box__input';
    // };

    // dropZone.ondrop = function(e)
    // {
    //     e.preventDefault();
    //     this.className = 'box__input';
    //     startUpload(e.dataTransfer.files);
    // }
});

$('.list__showMore').click(function() {
  $('.check-lis-show').toggleClass('check-lis-show-none');
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
