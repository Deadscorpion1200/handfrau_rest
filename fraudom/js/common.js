$( function() {


    /**
     * forEach implementation for Objects/NodeLists/Arrays, automatic type loops and context options
     *
     * @private
     * @author Todd Motto
     * @link https://github.com/toddmotto/foreach
     * @param {Array|Object|NodeList} collection - Collection of items to iterate, could be an Array, Object or NodeList
     * @callback requestCallback      callback   - Callback function for each iteration.
     * @param {Array|Object|NodeList} scope=null - Object/NodeList/Array that forEach is iterating over, to use as the this value when executing callback.
     * @returns {}
     */
     
    var forEach=function(t,o,r){if("[object Object]"===Object.prototype.toString.call(t))for(var c in t)Object.prototype.hasOwnProperty.call(t,c)&&o.call(r,t[c],c,t);else for(var e=0,l=t.length;l>e;e++)o.call(r,t[e],e,t)};

    var hamburgers = document.querySelectorAll(".hamburger");
    if (hamburgers.length > 0) {
        forEach(hamburgers, function(hamburger) {
            hamburger.addEventListener("click", function() {
                this.classList.toggle("is-active");

                $('.menu-mobile').toggleClass("is-active");
            }, false);
        });
    }

    $('.menu-mobile a').click(function () {
        $('.menu-mobile').toggleClass("is-active");
    });

    $('.contacts-mobile').click(function (e) {
        $(this).toggleClass("is-active");

        $('.contacts-mobile-container').toggleClass("is-active");
    });


    $('.showmore').click(function (e) {
        e.preventDefault();

        $(this).parent().find('.list').addClass('full');
        $(this).remove();
    });

    $('.count-minus').click(function (e) {
        e.stopPropagation();
        e.preventDefault();

        var value = parseInt($(this).parent().parent().find('input').val());
        var step = parseInt($(this).parent().parent().find('input').attr('step'));

        if (value > step) {
            value -= step;
            $(this).parent().parent().find('input').val(value);
        }
    });

    $('.count-plus').click(function (e) {
        e.stopPropagation();
        e.preventDefault();

        var value = parseInt($(this).parent().parent().find('input').val());
        var step = parseInt($(this).parent().parent().find('input').attr('step'));

        value += step;
        $(this).parent().parent().find('input').val(value);
    });


    $('.menu-list a, .go_to').click(function (e) {
        e.preventDefault();

        var scroll_el = $(this).attr('href');
        if ($(scroll_el).length != 0) { // проверим существование элемента чтобы избежать ошибки
            e.preventDefault();
            $('html, body').animate({scrollTop: $(scroll_el).offset().top - 150}, 500);
        }
        else {
            window.location.href = "/" + scroll_el;
        }

    });

    // отдельный скрол при закрытии попапа с заявкой "Узнать подробнее"
    $('#additional').on('hidden.bs.modal', function (e) {
        $('html, body').stop().animate({scrollTop: $('#personal').offset().top - 150}, 500);
    });

    // $('.btn-submit-price').click(function (e) {

        // e.preventDefault();

        // var form = $(this).parents('form');
        // var $input = $("#file");
        // var fd = new FormData();


        // var name = form.find('input[name=name]');
        // if (!name.val()) {
        //     name.addClass('error');
        //     return 0;
        // }
        // else {
        //     name.removeClass('error');
        // }

        // var phone = form.find('input[name=phone]');
        // if (!phone.val()) {
        //     phone.addClass('error');
        //     e.preventDefault();
        //     return 0;
        // }
        // else {
        //     name.removeClass('error');
        // }


        // fd.append('name', name.val());
        // fd.append('phone', phone.val());
        // fd.append('img', $input.prop('files')[0]);

        // if ($input.prop('files')[0]) {

        //     $.ajax({
        //         url: 'mail/send.php',
        //         data: fd,
        //         processData: false,
        //         contentType: false,
        //         type: 'POST',
        //         success: function () {
        //             form.find('.dist-form').remove();
        //             form.find('.form-result').addClass('active');
        //         },
        //         error: function (data) {
        //             console.log('error', data);
        //         }
        //     });

        // }
        // else {
        //     $('.form-box').addClass('error');
        //     return 0;
        // }

    // });

    // Отправка данных на сервер


    $('.submit-form-order').click(function (e) {

        e.preventDefault();

        var form = $(this).parents('.modal').find('form');

        var fd = new FormData();

        var name = form.find('input[name=name]');
        if (!name.val()) {
            name.addClass('error');
            return 0;
        }
        else {
            name.removeClass('error');
        }

        var phone = form.find('input[name=phone]');
        if (!phone.val()) {
            phone.addClass('error');
            e.preventDefault();
            return 0;
        }
        else {
            name.removeClass('error');
        }

        fd.append('name', name.val());
        fd.append('phone', phone.val());

        $.ajax({
            url: 'mail/send.php',
            data: fd,
            processData: false,
            contentType: false,
            type: 'POST',
            success: function () {
                $('#order').modal('hide');
                $('#order-call').modal('hide');
                $('#done').modal('show');
                console.log(fd);
            },
            error: function (data) {
                console.log('error', data);
            }
        });

    });

    $('.btn-submit-calc').click(function (e) {
        e.preventDefault();
    });

    $('.submit-form-order-calc').click(function (e) {
        e.preventDefault();

        var form = $(this).parents('.modal').find('form');
        var form_cal = $('.calc-body');
        const arrEmptyInputs = [];



        var fd = new FormData();

        var name = form.find('input[name=name]');
        if (!name.val()) {
            arrEmptyInputs.push(name);
            name.addClass('error');
            return 0;
        }
        else {
            name.removeClass('error');
        }

        var phone = form.find('input[name=phone]');
        if (!phone.val()) {
            arrEmptyInputs.push(phone);
            phone.addClass('error');
            e.preventDefault();
            return 0;
        }
        else {
            phone.removeClass('error');
        }


        if(arrEmptyInputs.length > 0) {
            return;
        }

        var additionService = '';



        $('.service-list li').each(function (e) {
            additionService += $(this).find('.title').text() + " " + $(this).find('.params').text() + ", ";
        });

        fd.append('name', name.val());
        fd.append('phone', phone.val());
        fd.append('type_clean', $('.select-type-clean').val());
        fd.append('square', $('#input-square').val());
        fd.append('schedule', $('.schedule-description').text());
        fd.append('service', additionService);

        $.ajax({
            url: 'mail/send.php',
            data: fd,
            processData: false,
            contentType: false,
            type: 'POST',
            success: function () {
                $('#order-calc').modal('hide');
                $('#done').modal('show');
            },
            error: function (data) {
                console.log('error', data);
            }
        });
    });

    $('.additional-service .list li .tip').click(function (e) {
        e.stopPropagation();
        $(this).addClass('tip-active');
    });

    $('.additional-service .list li').click(function (e) {
        if (!$(this).hasClass('active')) {
            $(this).addClass('active');
        }
        else {
            $(this).removeClass('active');
        }

        $(this).find('.tip').removeClass('tip-active');
    });

    $('.show-more-service').click(function (e) {
        e.preventDefault();
        $('.hide-more-service').show();
        $('.additional-service-list').addClass('opened');
        $(this).hide();
    });

    $('.hide-more-service').click(function (e) {
        e.preventDefault();
        $('.additional-service-list').removeClass('opened');
        $('.show-more-service').show();
        $(this).hide();
    });

    $('.command').slick({
        infinite: true,
        slidesToScroll: 1,
        dots: false,
        centerMode: true,
        variableWidth: true
    });

    $('.services').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        dots: true,
        arrows: true,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    $('.vertical-slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        vertical: true,
        verticalSwiping: true,
        draggable: false
    });

    $('.testimonials').slick({
        infinite: true,
        slidesToScroll: 1,
        dots: false,
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    arrows: false
                }
            }
        ]
    });




    $('.room button').tooltip();


    // feature detection for drag&drop upload
    var isAdvancedUpload = function()
    {
        var div = document.createElement( 'div' );
        return ( ( 'draggable' in div ) || ( 'ondragstart' in div && 'ondrop' in div ) ) && 'FormData' in window && 'FileReader' in window;
    }();


    // applying the effect for every form
    var forms = document.querySelectorAll( '.form-box' );
    Array.prototype.forEach.call( forms, function( form )
    {
        var input		 = form.querySelector( 'input[type="file"]' ),
            label		 = form.querySelector( 'label' ),
            errorMsg	 = form.querySelector( '.box__error span' ),
            restart		 = form.querySelectorAll( '.box__restart' ),
            droppedFiles = false,
            showFiles	 = function( files )
            {
                label.textContent = files.length > 1 ? ( input.getAttribute( 'data-multiple-caption' ) || '' ).replace( '{count}', files.length ) : files[ 0 ].name;
            },
            triggerFormSubmit = function()
            {
                var event = document.createEvent( 'HTMLEvents' );
                event.initEvent( 'submit', true, false );
                form.dispatchEvent( event );
            };

        // letting the server side to know we are going to make an Ajax request
        var ajaxFlag = document.createElement( 'input' );
        ajaxFlag.setAttribute( 'type', 'hidden' );
        ajaxFlag.setAttribute( 'name', 'ajax' );
        ajaxFlag.setAttribute( 'value', 2 );
        form.appendChild( ajaxFlag );

        // automatically submit the form on file select
        input.addEventListener( 'change', function( e )
        {
            showFiles( e.target.files );
        });

        // drag&drop files if the feature is available
        if( isAdvancedUpload )
        {
            form.classList.add( 'has-advanced-upload' ); // letting the CSS part to know drag&drop is supported by the browser

            [ 'drag', 'dragstart', 'dragend', 'dragover', 'dragenter', 'dragleave', 'drop' ].forEach( function( event )
            {
                form.addEventListener( event, function( e )
                {
                    // preventing the unwanted behaviours
                    e.preventDefault();
                    e.stopPropagation();
                });
            });
            [ 'dragover', 'dragenter' ].forEach( function( event )
            {
                form.addEventListener( event, function()
                {
                    form.classList.add( 'is-dragover' );
                });
            });
            [ 'dragleave', 'dragend', 'drop' ].forEach( function( event )
            {
                form.addEventListener( event, function()
                {
                    form.classList.remove( 'is-dragover' );
                });
            });
            form.addEventListener( 'drop', function( e )
            {
                droppedFiles = e.dataTransfer.files; // the files that were dropped
                showFiles( droppedFiles );

                $('.dist-price-form').addClass('has-file');

            });
        }


        // if the form was submitted
        form.addEventListener( 'submit', function( e )
        {
            // preventing the duplicate submissions if the current one is in progress
            if( form.classList.contains( 'is-uploading' ) ) return false;

            form.classList.add( 'is-uploading' );
            form.classList.remove( 'is-error' );

            if( isAdvancedUpload ) // ajax file upload for modern browsers
            {
                e.preventDefault();

                // gathering the form data
                var ajaxData = new FormData( form );
                if( droppedFiles )
                {
                    Array.prototype.forEach.call( droppedFiles, function( file )
                    {
                        ajaxData.append( input.getAttribute( 'name' ), file );
                    });
                }

                // ajax request
                var ajax = new XMLHttpRequest();
                ajax.open( form.getAttribute( 'method' ), form.getAttribute( 'action' ), true );

                ajax.onload = function()
                {
                    form.classList.remove( 'is-uploading' );
                    if( ajax.status >= 200 && ajax.status < 400 )
                    {
                        var data = JSON.parse( ajax.responseText );
                        form.classList.add( data.success == true ? 'is-success' : 'is-error' );
                        if( !data.success ) errorMsg.textContent = data.error;
                    }
                    else alert( 'Error. Please, contact the webmaster!' );
                };

                ajax.onerror = function()
                {
                    form.classList.remove( 'is-uploading' );
                    alert( 'Error. Please, try again!' );
                };

                ajax.send( ajaxData );
            }
            else // fallback Ajax solution upload for older browsers
            {
                var iframeName	= 'uploadiframe' + new Date().getTime(),
                    iframe		= document.createElement( 'iframe' );

                $iframe		= $( '<iframe name="' + iframeName + '" style="display: none;"></iframe>' );

                iframe.setAttribute( 'name', iframeName );
                iframe.style.display = 'none';

                document.body.appendChild( iframe );
                form.setAttribute( 'target', iframeName );

                iframe.addEventListener( 'load', function()
                {
                    var data = JSON.parse( iframe.contentDocument.body.innerHTML );
                    form.classList.remove( 'is-uploading' )
                    form.classList.add( data.success == true ? 'is-success' : 'is-error' )
                    form.removeAttribute( 'target' );
                    if( !data.success ) errorMsg.textContent = data.error;
                    iframe.parentNode.removeChild( iframe );
                });
            }
        });


        // restart the form if has a state of error/success
        Array.prototype.forEach.call( restart, function( entry )
        {
            entry.addEventListener( 'click', function( e )
            {
                e.preventDefault();
                form.classList.remove( 'is-error', 'is-success' );
                input.click();
            });
        });

        // Firefox focus bug fix for file input
        input.addEventListener( 'focus', function(){ input.classList.add( 'has-focus' ); });
        input.addEventListener( 'blur', function(){ input.classList.remove( 'has-focus' ); });

    });


    $('#order-calc').on('shown.bs.modal', function () {
        var services = '';
        $('.add-serv-label').hide();

        $('.additional-service-list li.active').each(function (e) {
            var title = $(this).find('.title').text();
            var params = $(this).find('.params').html() || '';
            var value = $(this).find('.count').val() || '';
            var serviceId = $(this).data('service-id');

            services += '<li data-service-id="' + serviceId + '"><span class="title">' + title + '</span><span class="params">' + value + ' ' + params + '</span><span class="close"></span></li>';
        });

        $('.service-list').html(services);

        if (services) {
            $('.add-serv-label').show();
        }

    });

    $('body').on('click', '.service-list .close', function () {
        var id = $(this).parent('li').data('service-id');

        $(this).parent('li').remove();
        $('.additional-service-list li[data-service-id=' + id + ']').removeClass('active');

        $('.select-type-clean').change();
    });


} );
