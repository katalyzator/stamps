$(function () {

    window.SetVideoBG = function (el) {

        var ratio = 16 / 9;

        function resize() {
            var cWidth = Math.floor(el.width());
            var cHeight = Math.floor(el.outerHeight());
            var pWidth = Math.floor($(window).width());
            if (pWidth < cWidth) {
                pWidth = cWidth;
            }
            var pHeight = Math.floor(pWidth / ratio);
            if (pHeight < cHeight) {
                pHeight = cHeight;
                pWidth = Math.floor(pHeight * ratio);
            }
            var position_top = 0,
                position_left = 0;

            if ((cHeight - pHeight) < 0) {
                position_top = Math.floor((cHeight - pHeight) / 2);
            }
            if ((cWidth - pWidth) < 0) {
                position_left = Math.floor((cWidth - pWidth) / 2);
            }

            el.find('.video_bg').css({
                height: pHeight,
                width: pWidth,
                left: position_left,
                top: position_top,
            });
        }

        resize();
        $(window).resize(function () {
            resize()
        })


    }


    $('.section').each(function () {
        if ($(this).find('.video_bg').size()) {
            SetVideoBG($(this));
        }


    })


    $('#wrapper').find('iframe').each(function () {
        var src = $(this).attr('src');

        if ($(this).parents('.form_html, .html').size()) {
            return false;

        }


        if (src.indexOf('https://www.youtube.com/embed/') > -1) {
            var video_id = src.substring(30);
            $(this).replaceWith('<div class="video_holder" data-video="' + $(this).attr('src') + '" style="width:' + $(this).width() + 'px; height:' + $(this).height() + 'px; background-image: url(https://i.ytimg.com/vi/' + video_id + '/maxresdefault.jpg);"></div>')
        }
    })
    $('.video_holder').on('click', function () {
        var src = $(this).data('video');
        $(this).replaceWith('<iframe  allowfullscreen src="' + src + '?autoplay=1"></iframe>');
    })


    $('body').on('click', '.popup_thanks_close, .popup_form_close', function () {
        $('.popup_thanks').hide();
        $('.popup_form').hide();
    })

    $('body').on('click', '.popup_form', function (event) {
        if ($(event.target).closest(".popup_form_inner").length === 0) {
            $('.popup_form').hide();
        }
    });
    $('body').on('click', '.popup_thanks', function (event) {
        if ($(event.target).closest(".popup_thanks_inner").length === 0) {
            $('.popup_thanks').hide();
        }
    });

    if ($('.section153').size()) {
        $('.section153').each(function () {
            SetVideoBG($(this));
        })
    }

    if ($('.section52').size()) {

        $('.section52 .logo').hover(function () {
            $(this).children('img').removeClass('grayscale')
        }, function () {
            $(this).children('img').addClass('grayscale')
        });

    }
    if ($('.section19').size()) {
        $('.section19 .policy').click(function () {
            $('#policy').remove();
            $('body').append('<div id="policy">\n\
				<div class="close  close_x">X</div>\n\
				<h1>ÐŸÐ¾Ð»Ð¸Ñ‚Ð¸ÐºÐ° ÐºÐ¾Ð½Ñ„Ð¸Ð´ÐµÐ½Ñ†Ð¸Ð°Ð»ÑŒÐ½Ð¾ÑÑ‚Ð¸</h1>\n\
				<p>\n\
				Ð”Ð°Ð½Ð½Ñ‹Ð¹ ÑÐ°Ð¹Ñ‚ ÑƒÐ²Ð°Ð¶Ð°ÐµÑ‚ Ð’Ð°ÑˆÐµ Ð¿Ñ€Ð°Ð²Ð¾ Ð¸ ÑÐ¾Ð±Ð»ÑŽÐ´Ð°ÐµÑ‚ ÐºÐ¾Ð½Ñ„Ð¸Ð´ÐµÐ½Ñ†Ð¸Ð°Ð»ÑŒÐ½Ð¾ÑÑ‚ÑŒ Ð¿Ñ€Ð¸ Ð·Ð°Ð¿Ð¾Ð»Ð½ÐµÐ½Ð¸Ð¸, Ð¿ÐµÑ€ÐµÐ´Ð°Ñ‡Ðµ Ð¸ Ñ…Ñ€Ð°Ð½ÐµÐ½Ð¸Ð¸ Ð’Ð°ÑˆÐ¸Ñ… ÐºÐ¾Ð½Ñ„Ð¸Ð´ÐµÐ½Ñ†Ð¸Ð°Ð»ÑŒÐ½Ñ‹Ñ… ÑÐ²ÐµÐ´ÐµÐ½Ð¸Ð¹.\n\
				Ð Ð°Ð·Ð¼ÐµÑ‰ÐµÐ½Ð¸Ðµ Ð·Ð°ÑÐ²ÐºÐ¸ Ð½Ð° Ð´Ð°Ð½Ð½Ð¾Ð¼ ÑÐ°Ð¹Ñ‚Ðµ Ð¾Ð·Ð½Ð°Ñ‡Ð°ÐµÑ‚ Ð’Ð°ÑˆÐµ ÑÐ¾Ð³Ð»Ð°ÑÐ¸Ðµ Ð½Ð° Ð¾Ð±Ñ€Ð°Ð±Ð¾Ñ‚ÐºÑƒ Ð´Ð°Ð½Ð½Ñ‹Ñ… Ð¸ Ð´Ð°Ð»ÑŒÐ½ÐµÐ¹ÑˆÐµÐ¹ Ð¿ÐµÑ€ÐµÐ´Ð°Ñ‡Ð¸ Ð²Ð°ÑˆÐ¸Ñ… ÐºÐ¾Ð½Ñ‚Ð°ÐºÑ‚Ð½Ñ‹Ñ… Ð´Ð°Ð½Ð½Ñ‹Ñ… Ð½Ð°ÑˆÐµÐ¹ ÐºÐ¾Ð¼Ð¿Ð°Ð½Ð¸Ð¸.\n\
				ÐŸÐ¾Ð´ Ð¿ÐµÑ€ÑÐ¾Ð½Ð°Ð»ÑŒÐ½Ñ‹Ð¼Ð¸ Ð´Ð°Ð½Ð½Ñ‹Ð¼Ð¸ Ð¿Ð¾Ð´Ñ€Ð°Ð·ÑƒÐ¼ÐµÐ²Ð°ÐµÑ‚ÑÑ Ð¸Ð½Ñ„Ð¾Ñ€Ð¼Ð°Ñ†Ð¸Ñ, Ð¾Ñ‚Ð½Ð¾ÑÑÑ‰Ð°ÑÑÑ Ðº ÑÑƒÐ±ÑŠÐµÐºÑ‚Ñƒ Ð¿ÐµÑ€ÑÐ¾Ð½Ð°Ð»ÑŒÐ½Ñ‹Ñ… Ð´Ð°Ð½Ð½Ñ‹Ñ…, Ð² Ñ‡Ð°ÑÑ‚Ð½Ð¾ÑÑ‚Ð¸ Ð¸Ð¼Ñ, ÐºÐ¾Ð½Ñ‚Ð°ÐºÑ‚Ð½Ñ‹Ðµ Ñ€ÐµÐºÐ²Ð¸Ð·Ð¸Ñ‚Ñ‹ (Ð°Ð´Ñ€ÐµÑ ÑÐ»ÐµÐºÑ‚Ñ€Ð¾Ð½Ð½Ð¾Ð¹ Ð¿Ð¾Ñ‡Ñ‚Ñ‹) Ð¸ Ð¸Ð½Ñ‹Ðµ Ð´Ð°Ð½Ð½Ñ‹Ðµ, Ð¾Ñ‚Ð½Ð¾ÑÐ¸Ð¼Ñ‹Ðµ Ð¤ÐµÐ´ÐµÑ€Ð°Ð»ÑŒÐ½Ñ‹Ð¼ Ð·Ð°ÐºÐ¾Ð½Ð¾Ð¼ Ð¾Ñ‚ 27 Ð¸ÑŽÐ»Ñ 2006 Ð³Ð¾Ð´Ð° â„– 152-Ð¤Ð— Â«Ðž Ð¿ÐµÑ€ÑÐ¾Ð½Ð°Ð»ÑŒÐ½Ñ‹Ñ… Ð´Ð°Ð½Ð½Ñ‹Ñ…Â» Ðº ÐºÐ°Ñ‚ÐµÐ³Ð¾Ñ€Ð¸Ð¸ Ð¿ÐµÑ€ÑÐ¾Ð½Ð°Ð»ÑŒÐ½Ñ‹Ñ… Ð´Ð°Ð½Ð½Ñ‹Ñ….\n\
				Ð¦ÐµÐ»ÑŒÑŽ Ð¾Ð±Ñ€Ð°Ð±Ð¾Ñ‚ÐºÐ¸ Ð¿ÐµÑ€ÑÐ¾Ð½Ð°Ð»ÑŒÐ½Ñ‹Ñ… Ð´Ð°Ð½Ð½Ñ‹Ñ… ÑÐ²Ð»ÑÐµÑ‚ÑÑ Ð¸Ð½Ñ„Ð¾Ñ€Ð¼Ð¸Ñ€Ð¾Ð²Ð°Ð½Ð¸Ðµ Ð¾Ð± Ð¾ÐºÐ°Ð·Ñ‹Ð²Ð°ÐµÐ¼Ñ‹Ñ… ÑƒÑÐ»ÑƒÐ³Ð°Ñ… Ð½Ð°ÑˆÐµÐ¹ ÐºÐ¾Ð¼Ð¿Ð°Ð½Ð¸Ð¸.\n\
				Ð•ÑÑ‚ÑŒ Ð²Ð¾Ð¿Ñ€Ð¾ÑÑ‹? ÐŸÐ¸ÑˆÐ¸Ñ‚Ðµ Ð½Ð°Ð¼ Ð½Ð° ' + window.tobiz.owner_email + '.</p>\n\
				<div class="close close_btn">Ð—Ð°ÐºÑ€Ñ‹Ñ‚ÑŒ</div></div>');
            $('#policy .close_x, #policy .close_btn').click(function () {
                $('#policy').remove();
            })
        });
    }

    if ($('.section119').size()) {
        $('.section119 .policy').click(function () {
            $('#policy').remove();
            $('body').append('<div id="policy">\n\
				<div class="close  close_x">X</div>\n\
				<h1>ÐŸÐ¾Ð»Ð¸Ñ‚Ð¸ÐºÐ° ÐºÐ¾Ð½Ñ„Ð¸Ð´ÐµÐ½Ñ†Ð¸Ð°Ð»ÑŒÐ½Ð¾ÑÑ‚Ð¸</h1>\n\
				<p>\n\
				Ð”Ð°Ð½Ð½Ñ‹Ð¹ ÑÐ°Ð¹Ñ‚ ÑƒÐ²Ð°Ð¶Ð°ÐµÑ‚ Ð’Ð°ÑˆÐµ Ð¿Ñ€Ð°Ð²Ð¾ Ð¸ ÑÐ¾Ð±Ð»ÑŽÐ´Ð°ÐµÑ‚ ÐºÐ¾Ð½Ñ„Ð¸Ð´ÐµÐ½Ñ†Ð¸Ð°Ð»ÑŒÐ½Ð¾ÑÑ‚ÑŒ Ð¿Ñ€Ð¸ Ð·Ð°Ð¿Ð¾Ð»Ð½ÐµÐ½Ð¸Ð¸, Ð¿ÐµÑ€ÐµÐ´Ð°Ñ‡Ðµ Ð¸ Ñ…Ñ€Ð°Ð½ÐµÐ½Ð¸Ð¸ Ð’Ð°ÑˆÐ¸Ñ… ÐºÐ¾Ð½Ñ„Ð¸Ð´ÐµÐ½Ñ†Ð¸Ð°Ð»ÑŒÐ½Ñ‹Ñ… ÑÐ²ÐµÐ´ÐµÐ½Ð¸Ð¹.\n\
				Ð Ð°Ð·Ð¼ÐµÑ‰ÐµÐ½Ð¸Ðµ Ð·Ð°ÑÐ²ÐºÐ¸ Ð½Ð° Ð´Ð°Ð½Ð½Ð¾Ð¼ ÑÐ°Ð¹Ñ‚Ðµ Ð¾Ð·Ð½Ð°Ñ‡Ð°ÐµÑ‚ Ð’Ð°ÑˆÐµ ÑÐ¾Ð³Ð»Ð°ÑÐ¸Ðµ Ð½Ð° Ð¾Ð±Ñ€Ð°Ð±Ð¾Ñ‚ÐºÑƒ Ð´Ð°Ð½Ð½Ñ‹Ñ… Ð¸ Ð´Ð°Ð»ÑŒÐ½ÐµÐ¹ÑˆÐµÐ¹ Ð¿ÐµÑ€ÐµÐ´Ð°Ñ‡Ð¸ Ð²Ð°ÑˆÐ¸Ñ… ÐºÐ¾Ð½Ñ‚Ð°ÐºÑ‚Ð½Ñ‹Ñ… Ð´Ð°Ð½Ð½Ñ‹Ñ… Ð½Ð°ÑˆÐµÐ¹ ÐºÐ¾Ð¼Ð¿Ð°Ð½Ð¸Ð¸.\n\
				ÐŸÐ¾Ð´ Ð¿ÐµÑ€ÑÐ¾Ð½Ð°Ð»ÑŒÐ½Ñ‹Ð¼Ð¸ Ð´Ð°Ð½Ð½Ñ‹Ð¼Ð¸ Ð¿Ð¾Ð´Ñ€Ð°Ð·ÑƒÐ¼ÐµÐ²Ð°ÐµÑ‚ÑÑ Ð¸Ð½Ñ„Ð¾Ñ€Ð¼Ð°Ñ†Ð¸Ñ, Ð¾Ñ‚Ð½Ð¾ÑÑÑ‰Ð°ÑÑÑ Ðº ÑÑƒÐ±ÑŠÐµÐºÑ‚Ñƒ Ð¿ÐµÑ€ÑÐ¾Ð½Ð°Ð»ÑŒÐ½Ñ‹Ñ… Ð´Ð°Ð½Ð½Ñ‹Ñ…, Ð² Ñ‡Ð°ÑÑ‚Ð½Ð¾ÑÑ‚Ð¸ Ð¸Ð¼Ñ, ÐºÐ¾Ð½Ñ‚Ð°ÐºÑ‚Ð½Ñ‹Ðµ Ñ€ÐµÐºÐ²Ð¸Ð·Ð¸Ñ‚Ñ‹ (Ð°Ð´Ñ€ÐµÑ ÑÐ»ÐµÐºÑ‚Ñ€Ð¾Ð½Ð½Ð¾Ð¹ Ð¿Ð¾Ñ‡Ñ‚Ñ‹) Ð¸ Ð¸Ð½Ñ‹Ðµ Ð´Ð°Ð½Ð½Ñ‹Ðµ, Ð¾Ñ‚Ð½Ð¾ÑÐ¸Ð¼Ñ‹Ðµ Ð¤ÐµÐ´ÐµÑ€Ð°Ð»ÑŒÐ½Ñ‹Ð¼ Ð·Ð°ÐºÐ¾Ð½Ð¾Ð¼ Ð¾Ñ‚ 27 Ð¸ÑŽÐ»Ñ 2006 Ð³Ð¾Ð´Ð° â„– 152-Ð¤Ð— Â«Ðž Ð¿ÐµÑ€ÑÐ¾Ð½Ð°Ð»ÑŒÐ½Ñ‹Ñ… Ð´Ð°Ð½Ð½Ñ‹Ñ…Â» Ðº ÐºÐ°Ñ‚ÐµÐ³Ð¾Ñ€Ð¸Ð¸ Ð¿ÐµÑ€ÑÐ¾Ð½Ð°Ð»ÑŒÐ½Ñ‹Ñ… Ð´Ð°Ð½Ð½Ñ‹Ñ….\n\
				Ð¦ÐµÐ»ÑŒÑŽ Ð¾Ð±Ñ€Ð°Ð±Ð¾Ñ‚ÐºÐ¸ Ð¿ÐµÑ€ÑÐ¾Ð½Ð°Ð»ÑŒÐ½Ñ‹Ñ… Ð´Ð°Ð½Ð½Ñ‹Ñ… ÑÐ²Ð»ÑÐµÑ‚ÑÑ Ð¸Ð½Ñ„Ð¾Ñ€Ð¼Ð¸Ñ€Ð¾Ð²Ð°Ð½Ð¸Ðµ Ð¾Ð± Ð¾ÐºÐ°Ð·Ñ‹Ð²Ð°ÐµÐ¼Ñ‹Ñ… ÑƒÑÐ»ÑƒÐ³Ð°Ñ… Ð½Ð°ÑˆÐµÐ¹ ÐºÐ¾Ð¼Ð¿Ð°Ð½Ð¸Ð¸.\n\
				Ð•ÑÑ‚ÑŒ Ð²Ð¾Ð¿Ñ€Ð¾ÑÑ‹? ÐŸÐ¸ÑˆÐ¸Ñ‚Ðµ Ð½Ð°Ð¼ Ð½Ð° ' + window.tobiz.owner_email + '.</p>\n\
				<div class="close close_btn">Ð—Ð°ÐºÑ€Ñ‹Ñ‚ÑŒ</div></div>');
            $('#policy .close_x, #policy .close_btn').click(function () {
                $('#policy').remove();
            })
        });
    }

    $('body').on('click', '.section119 .policy2', function () {
        console.log('click');
        $(this).parent().parent().children('.policy2_popup').toggle();
    })


    $('body').on('click', '.product_card', function () {
        if ($(this).parent().parent().children('.extra_info_block_wrapper').eq($(this).data('id')).is(':visible')) {
            $(this).parent().parent().children('.extra_info_block_wrapper').hide();
        } else {
            $(this).parent().parent().children('.extra_info_block_wrapper').hide();
            $(this).parent().parent().children('.extra_info_block_wrapper').eq($(this).data('id')).show();
        }
    })
    $('body').on('click', '.extra_info_block .close', function () {
        $(this).parent().parent().hide();
    })

    $('body').on('click', '.extra_info_block_wrapper', function (event) {
        if ($(event.target).closest(".extra_info_block").length === 0) {
            if (typeof(window.tobiz.editor) === 'undefined') {
                $('.extra_info_block_wrapper').hide();
            }
        }
    });


    if ($('.section143 .overlay_image_box, .section148 .overlay_image_box, .section147 .overlay_image_box, .section313 .overlay_image_box').size()) {
        $('.section143 .overlay_image_box, .section148 .overlay_image_box, .section147 .overlay_image_box, .section313 .overlay_image_box').click(function () {

            if ($(this).attr('data-link') != '' && $(this).attr('data-link') != 'undefined') {
                window.open($(this).attr('data-link'), '_blank');
                return false;
            }
        })
    }


    if ($('.section41 .overlay_image_box, .section42 .overlay_image_box, .section43 .overlay_image_box, .section44 .overlay_image_box, .section45 .overlay_image_box, .section46 .overlay_image_box, .section47 .overlay_image_box, .section48 .overlay_image_box').size()) {
        $('.section41 .overlay_image_box, .section42 .overlay_image_box, .section43 .overlay_image_box, .section44 .overlay_image_box, .section45 .overlay_image_box, .section46 .overlay_image_box, .section47 .overlay_image_box, .section48 .overlay_image_box').click(function () {

            var this_section = $(this).closest('.section');
            if (this_section.hasClass('img_zoom')) {
                var image_url = $(this).parent().children().attr('src');
                var t_arr = image_url.split('/');
                var new_image_url = '/img/800x600/' + t_arr[3];

                console.log(new_image_url);

                if ($('#img_zoomer_bg').size()) {
                    $('#img_zoomer_bg').remove();
                }
                $('body').append('<div id="img_zoomer_bg"><div id="img_zoomer" style="background-image:url(' + new_image_url + ')"></div><div id="img_zoomer_close">X</div></div>');


            }
            //console.log('213');
        })
    }

    if ($('.section141 .overlay_image_box, .section142 .overlay_image_box, .section143 .overlay_image_box, .section144 .overlay_image_box, .section145 .overlay_image_box, .section146 .overlay_image_box, .section147 .overlay_image_box, .section148 .overlay_image_box').size()) {
        $('.section141 .overlay_image_box, .section142 .overlay_image_box, .section143 .overlay_image_box, .section144 .overlay_image_box, .section145 .overlay_image_box, .section146 .overlay_image_box, .section147 .overlay_image_box, .section148 .overlay_image_box').click(function () {

            var this_section = $(this).closest('.section');
            if (this_section.hasClass('img_zoom')) {
                var image_url = $(this).parent().children().attr('src');
                var t_arr = image_url.split('/');
                var new_image_url = '/img/800x600/' + t_arr[3];

                console.log(1);
                console.log(new_image_url);

                if ($('#img_zoomer_bg').size()) {
                    $('#img_zoomer_bg').remove();
                }
                $('body').append('<div id="img_zoomer_bg"><div id="img_zoomer" style="background-image:url(' + new_image_url + ')"></div><div id="img_zoomer_close">X</div></div>');
            }
            //console.log('213');
        })
    }
    //ÐÐ»ÑŒÐ±Ð¾Ð¼Ð½Ñ‹Ð¹ Ñ€ÐµÐ¶Ð¸Ð¼
    if ($('.section128 .image1, .section125 .image1, .section124 .image1, .section149 .image1, .section150 .image1, .section200 .image1, .section201 .image1, .section138 .image').size()) {
        $('.section128 .image1, .section128 .image2, .section128 .image3,  .section125 .image1,  .section125 .image2,  .section124 .image1,  .section124 .image2,  .section124 .image3, .section149 .image1, .section149 .image2, .section149 .image3, .section150 .image1, .section150 .image2, .section200 .image1, .section200 .image2, .section200 .image3, .section200 .image4, .section201 .image1, .section201 .image2, .section201 .image3, .section201 .image4, .section201 .image5, .section138 .image').click(function () {

            $('.show_extra_info').removeClass('currnet');
            $(this).addClass('currnet');

            var parent = $(this).closest('.arr1');


            var j = 0;
            $.each(parent.find('.show_extra_info'), function (index, element) {
                if ($(element).hasClass('currnet')) {
                    j = index;
                }

            })


            if ($(this).hasClass('show_extra_info')) {

//                            if($(window).width()<800){
//                                return true;
//                            }
                $(this).parent().parent().children('.extra_info_block_wrapper').eq(j).show()
                return true;

            }


            var this_section = $(this).closest('.section');
            if (this_section.hasClass('img_zoom')) {
                var image_url = $(this).children().attr('src');
                var t_arr = image_url.split('/');
                var new_image_url = '/img/800x600/' + t_arr[3];

                console.log(2);
                console.log(new_image_url);

                if ($('#img_zoomer_bg').size()) {
                    $('#img_zoomer_bg').remove();
                }
                $('body').append('<div id="img_zoomer_bg"><div id="img_zoomer" style="background-image:url(' + new_image_url + ')"></div><div id="img_zoomer_close">X</div></div>');
            }
            //console.log('213');
        })
    }

    //ÐŸÐ¾Ñ€Ñ‚Ñ€ÐµÑ‚Ð½Ñ‹Ð¹ Ñ€ÐµÐ¶Ð¸Ð¼
    if ($('.section151 .image1').size()) {
        $('.section151 .image1, .section151 .image2, .section151 .image3, .section151 .image4').click(function () {

            var this_section = $(this).closest('.section');
            if (this_section.hasClass('img_zoom')) {
                var image_url = $(this).children().attr('src');
                var t_arr = image_url.split('/');
                var new_image_url = '/img/400x560/' + t_arr[3];

                console.log(new_image_url);

                if ($('#img_zoomer_bg').size()) {
                    $('#img_zoomer_bg').remove();
                }
                $('body').append('<div id="img_zoomer_bg"><div id="img_zoomer" class="portret" style="background-image:url(' + new_image_url + ')"></div><div id="img_zoomer_close" class="portret">X</div></div>');
            }
            //console.log('213');
        })
    }


    $('body').on('click', '#img_zoomer_bg ,#img_zoomer_clocse', function () {
        if ($('#img_zoomer_bg').size()) {
            $('#img_zoomer_bg').remove();
        }

    })


    $('.btn1, .btn2, .btn3, .btn4,  .btn5, .btn1x, .btn2x, .btn3x, .btn4x,  .btn5x').each(function () {

        if ($(this).css('background-color') == 'rgb(255, 255, 255)') {
            //$(this).css({color: '#3D3D3D'})
        }


    })


    window.basket = {
        status: 0,

        getData: function () {
            var basket = JSON.parse(localStorage.getItem('basket'));
            if (basket == null) {
                return [];

            } else {
                return basket;
            }

        },
        saveData: function (data) {
            try {
                localStorage.setItem('basket', JSON.stringify(data));
            } catch (e) {
                if (e == QUOTA_EXCEEDED_ERR) {
                    alert('ÐžÑˆÐ¸Ð±ÐºÐ° Ð´Ð¾Ð±Ð°Ð²Ð»ÐµÐ½Ð¸Ñ Ñ‚Ð¾Ð²Ð°Ñ€Ð° Ð² ÐºÐ¾Ñ€Ð·Ð¸Ð½Ñƒ');
                }
            }
        },

        addItem: function (item) {
            var basket = this.getData();
            // ÑÐ¼Ð¾Ñ‚Ñ€Ð¸Ð¼ Ð½ÐµÑ‚ Ð»Ð¸ Ñ‚Ð°ÐºÐ¾Ð¹ Ð¿Ð¾Ð·Ð¸Ñ†Ð¸Ð¸
            var ifExist = false;
            $.each(basket, function (index, element) {
                if (element.title == item.title && element.price == item.price) {
                    // ÐµÑÐ»Ð¸ ÐµÑÑ‚ÑŒ ÑƒÐ²ÐµÐ»Ð¸Ñ‡Ð¸Ð²Ð°ÐµÐ¼ ÐºÐ¾Ð»Ð¸Ñ‡ÐµÑÑ‚Ð²Ð¾
                    ifExist = true;

                    if (typeof(element.quantity) === 'undefined') {
                        element.quantity = 1;


                    } else {
                        element.quantity = (parseInt(element.quantity));
                        element.quantity++;

                    }
                }
            })
            // ÐµÑÐ»Ð¸ Ð½ÐµÑ‚ Ð¿Ñ€Ð¾ÑÑ‚Ð¾ Ð´Ð¾Ð±Ð°Ð²Ð»ÑÐµÐ¼.
            if (!ifExist) {
                basket.push(item);
            }
            this.saveData(basket);
            this.renderForm();
            this.renderBtn();
            this.showBtn();
        },


        removeItem: function (item) {
            var basket = this.getData();
            // ÑÐ¼Ð¾Ñ‚Ñ€Ð¸Ð¼ Ð½ÐµÑ‚ Ð»Ð¸ Ñ‚Ð°ÐºÐ¾Ð¹ Ð¿Ð¾Ð·Ð¸Ñ†Ð¸Ð¸
            var break_each = false;

            if (basket) {
                $.each(basket, function (index, element) {
                    if (break_each) {
                        return true;
                    }
                    if (element.title == item.title && element.price == item.price) {
                        // ÐµÑÐ»Ð¸ ÐµÑÑ‚ÑŒ ÑƒÐ´Ð°Ð»ÑÐµÐ¼
                        basket.splice(index, 1);
                        break_each = true;
                    }
                })
            }
            this.saveData(basket);
        },
        updateItem: function (item) {
            var basket = this.getData();
            // ÑÐ¼Ð¾Ñ‚Ñ€Ð¸Ð¼ Ð½ÐµÑ‚ Ð»Ð¸ Ñ‚Ð°ÐºÐ¾Ð¹ Ð¿Ð¾Ð·Ð¸Ñ†Ð¸Ð¸
            var break_each = false;

            if (basket) {
                $.each(basket, function (index, element) {
                    if (break_each) {
                        return true;
                    }
                    if (element.title == item.title && element.price == item.price) {
                        // ÐµÑÐ»Ð¸ ÐµÑÑ‚ÑŒ ÑƒÐ´Ð°Ð»ÑÐµÐ¼
                        element.quantity = item.quantity;
                        break_each = true;
                    }
                })
            }
            this.saveData(basket);
        },
        clean: function () {
            this.saveData([]);
        },

        countItems: function () {
            return this.getData().length;
        },


        countSum: function () {
            var sum = 0;

            $.each(this.getData(), function (i, el) {
                sum += parseInt(el.quantity) * parseInt(el.price);

            })


            return sum;

        },

        btnEventListener: function () {
            var self = this;
            $('body').on('click', '#basket_btn', function () {
                self.showForm();
            })
        },
        renderBtn: function () {
            $('#basket_btn').remove();
            $('body').append('<div id="basket_btn"  style="display:none"> <i class="fa fa-shopping-cart"></i> ÐšÐ¾Ñ€Ð·Ð¸Ð½Ð° (' + this.countItems() + ')</div>');
            this.init();
        },


        hideBtn: function () {
            $('#basket_btn').hide();
        },
        showBtn: function () {
            $('#basket_btn').show();
        },


        formEventListener: function () {
            var self = this;


            $('body').on('click', '#basket_form_close', function () {
                self.hideForm();
            })
            $('body').on('click', '#basket_left .remove', function () {
                var title = $(this).parent().children('.title').text();
                var price = $(this).parent().children('.price').text();
                var item = {title: title, price: price};
                console.log(item);
                self.removeItem(item);
                self.renderForm();
                self.showForm();
            })
            $('body').on('keyup', '#basket_left .quantity input', function (event) {
                this.value = this.value.replace(/\D/gi, '').replace(/^0+/, '');
                if (this.value == '') {
                    this.value = 0;
                }

                var title = $(this).parent().parent().children('.title').text();
                var price = $(this).parent().parent().children('.price').text();
                var quantity = $(this).val();
                var item = {title: title, price: price, quantity: quantity};
                var sum = parseInt(price) * parseInt(quantity);
                $(this).parent().parent().children('.itogo').text(sum);
                self.updateItem(item);
                $('#basket_form_itogo').children('span').text(self.countSum());
                $('#basket_make_order textarea[name="order"]').text(JSON.stringify(self.getData()))
                $('#basket_make_order input[name="amount"]').text(self.countSum());

                //self.showForm();
            })
            $('body').on('click', '#basket_continue', function (event) {
                self.hideForm();
            })


        },


        renderForm: function () {
            var self = this;

            $('#basket_form_bg').remove();
            $('body').append('<div id="basket_form_bg" style="display:none">\n\
                    <div id="basket_form_inner">\n\
                        <div id="basket_form_close">X</div>\n\
                        <div id="basket_left"></div>\n\
                        <div id="basket_right"></div>\n\
                        <div class="clear"></div>\n\
                    </div>\n\
                </div>');
            var basket = this.getData();
            $('#basket_left').append('<div class="item caption">\n\
                        <div class="image">Ð¤Ð¾Ñ‚Ð¾</div>\n\
                        <div class="title">ÐÐ°Ð·Ð²Ð°Ð½Ð¸Ðµ</div>\n\
                        <div class="quantity">ÐšÐ¾Ð»Ð¸Ñ‡ÐµÑÑ‚Ð²Ð¾</div>\n\
                        <div class="price">Ð¦ÐµÐ½Ð°, Ð·Ð° ÐµÐ´.</div>\n\
                        <div class="itogo">Ð¦ÐµÐ½Ð°</div>\n\
                        <div class="clear"></div>\n\
                    </div>');
            $.each(basket, function (i, el) {

                var image = '';
                if (el.image != '') {
                    image = '<img src="' + el.image + '" />';
                }

                $('#basket_left').append('<div class="item" data-id="' + i + '">\n\
                            <div class="image">' + image + '</div>\n\
                            <div class="title">' + el.title + '</div>\n\
                            <div class="quantity"><input type="numper" value="' + el.quantity + '" /></div>\n\
                            <div class="price">' + el.price + '</div>\n\
                            <div class="itogo">' + (el.price * el.quantity) + '</div>\n\
                            <div class="remove"><i class="fa fa-trash"></i></div>\n\
                            <div class="clear"></div>\n\
                        </div>');
            })
            $('#basket_left').append('<div id="basket_form_itogo">Ð˜Ñ‚Ð¾Ð³Ð¾: <span>' + this.countSum() + '</span></div>');

            $('#basket_right').append('<div id="basket_title">ÐžÑ„Ð¾Ñ€Ð¼Ð¸Ñ‚ÑŒ Ð·Ð°ÐºÐ°Ð·</div>');
            $('#basket_right').append('<div id="basket_make_order"><form action="handler.php" enctype="multipart/form-data" method="post">\n\
                        <input type="hidden" name="action" value="basket" />\n\
                        <input type="hidden" name="amount" value="' + self.countSum() + '" />\n\
                        <div><input type="text" name="email" placeholder="Ð’Ð²ÐµÐ´Ð¸Ñ‚Ðµ E-mail" /></div>\n\
                        <div><input type="text" name="tel" placeholder="Ð’Ð²ÐµÐ´Ð¸Ñ‚Ðµ Ñ‚ÐµÐ»ÐµÑ„Ð¾Ð½" /></div>\n\
                        <div><textarea name="comment" placeholder="ÐšÐ¾Ð¼Ð¼ÐµÐ½Ñ‚Ð°Ñ€Ð¸Ð¹" ></textarea></div>\n\
                        <div><textarea name="order" style="display:none">' + JSON.stringify(self.getData()) + '</textarea></div>\n\
                        <div><input type="submit" value="ÐžÑ„Ð¾Ñ€Ð¼Ð¸Ñ‚ÑŒ Ð·Ð°ÐºÐ°Ð·" /></div>\n\
                    </form></div>');
            $('#basket_make_order form').append('<div id="basket_continue">ÐŸÑ€Ð¾Ð´Ð¾Ð»Ð¶Ð¸Ñ‚ÑŒ Ð¿Ð¾ÐºÑƒÐ¿ÐºÐ¸</div>');

            this.init();
        },
        hideForm: function () {
            $('#basket_form_bg').hide();
            this.showBtn()
        },
        showForm: function () {
            $('#basket_form_bg').show();
            this.hideBtn()
        },


        sendForm: function () {


        },
        init: function () {
            if (!this.status) {
                this.status = 1;
                this.formEventListener();
                this.btnEventListener();

            }
        }


    }


    if (window.basket.countItems() > 0 && window.tobiz.t >= 3) {
        window.basket.renderForm();
        window.basket.renderBtn();
        window.basket.showBtn();
        window.basket.init();


    }


    $('div.btn1, div.btn2, div.btn3, div.btn4,  div.btn5').click(function () {
        var this_section = $(this).closest('.section');
        if ($(this).hasClass('add_basket') && window.tobiz.t >= 3) {
            // Ð´Ð¾Ð±Ð°Ð²Ð»ÐµÐ½Ð¸Ðµ Ð² ÐºÐ¾Ñ€Ð·Ð¸Ð½Ñƒ
            var title = $(this).parent().find('.title1, .title2, .title3, .title4, .title5').text();

            var price = $(this).parent().find('.price1, .price2, .price3, .price4, .price5').text();

            if (this_section.hasClass('section125')) {
                var image = $(this).parent().parent().find('.image1 img, .image2 img, .image3 img, .image4 img, .image5 img').attr('src');


            } else {
                var image = $(this).parent().find('.image1 img, .image2 img, .image3 img, .image4 img, .image5 img').attr('src');

            }


            price = parseInt(price.replace(/\D+/g, ''));

            if (!image) {
                image = '';
            } else {
                var t_arr = image.split('/');
                image = '/img/100x100/' + t_arr[t_arr.length - 1];
            }


            var item = {
                title: title,
                price: price,
                image: image,
                quantity: 1
            }

            window.basket.addItem(item);
            //console.log(window.basket.getData());

            window.basket.renderForm();
            window.basket.showForm();


        } else {
            // ÑÑ‚Ð°Ð½Ð´Ð°Ñ€Ñ‚Ð½Ð¾Ðµ Ð´ÐµÐ¹ÑÑ‚Ð²Ð¸Ðµ

            if (this_section.find('.arr1').size()) {
                if (this_section.hasClass('section312')) {
                    $(this).closest('.arr1').find('.popup_form').show();
                } else {

                    $(this).parent().find('.popup_form').show();
                }

                //this_section.find('.arr1').find('.popup_form').show();
            } else {
                this_section.find('.popup_form').show();
            }

        }


    })
    $('.btn1x, .btn2x, .btn3x, .btn4x,  .btn5x').click(function () {
        $('.extra_info_block_wrapper').hide();
        for (i = 0; i <= 5; i++) {
            if ($(this).parent().children('.extra_info' + i).size()) {
                $(this).closest('.arr1').find('.btn' + i).click();

            }
        }

    })


    $('.btn1, .btn2, .btn3, .btn4,  .btn5, .submit_btn, .btn1x, .btn2x, .btn3x, .btn4x,  .btn5x').hover(function () {


        if ($(this).hasClass('surround')) {
            // Ð¾Ð±ÐªÐµÐ¼Ð½Ñ‹Ð¹ ÐºÐ½Ð¾Ð¿ÐºÐµ
            var color = $(this).css('background-color');
            $(this).attr('data-color', color);
            var color2 = '#fff';
            if (color == 'rgb(255, 255, 255)') {
                color2 = '#3D3D3D';
            }
            $(this).css({
                backgroundColor: color2,
                color: color,
            })


        } else {
            // Ð½Ðµ Ð¾Ð±ÑŠÐµÐ¼Ð½Ñ‹Ð¹ ÐºÐ½Ð¾Ð¿ÐºÐµ
            var color = $(this).css('color');
            $(this).attr('data-color', color);

            var color2 = '#fff';
            if (color == 'rgb(255, 255, 255)') {
                color2 = '#3D3D3D';
            }

            if (color == 'rgb(255, 255, 255)') {
                color = 'rgb(0, 0, 0,0.5    )';
                color2 = '#FFF';
            }


            $(this).css({
                backgroundColor: color,
                color: color2,
            })
        }
        $(this).addClass('hover');
    }, function () {

        if ($(this).hasClass('surround')) {
            // Ð¾Ð±ÐªÐµÐ¼Ð½Ñ‹Ð¹ ÐºÐ½Ð¾Ð¿ÐºÐµ
            var color = $(this).data('color');
            $(this).css({
                backgroundColor: color,
                color: '#fff',
            })

            if ($(this).css('background-color') == 'rgb(255, 255, 255)') {
                $(this).css({color: '#3D3D3D'})
            }


        } else {
            //$(this).attr('date-color', $(this).css('color'));
            var color = $(this).data('color');

            $(this).css({
                color: color,
                backgroundColor: 'transparent'
            })
        }

        $(this).removeAttr('date-color');
        $(this).removeClass('hover');
    })


    setInterval(function () {
        if ($('.objtimer').size()) {
            $('.objtimer').each(function () {

                var type = $(this).data('type'),
                    dd = $(this).data('dd'),
                    dm = $(this).data('dm'),
                    dy = $(this).data('dy'),
                    monthly = $(this).data('monthly'),
                    weekly = $(this).data('weekly'),
                    hr = $(this).data('hr'),
                    min = $(this).data('min'),
                    date_now = new Date();

                if (type == 'date') {
                    var date_next = new Date(dy, dm - 1, dd, hr, min, 0, 0);
                }
                if (type == 'monthly') {
                    var date_next = new Date(date_now.getFullYear(), date_now.getMonth(), dd, hr, min, 0, 0);
                    if (date_now > date_next) {
                        date_next = new Date(date_now.getFullYear(), date_now.getMonth() + 1, dd, hr, min, 0, 0);
                    }
                }
                if (type == 'weekly') {

                    var date_next = new Date(date_now.getFullYear(), date_now.getMonth(), date_now.getDate(), hr, min, 0, 0);
                    date_next.setDate(date_now.getDate() + (weekly + 7 - date_now.getDay()) % 7);

                }
                if (type == 'daily') {
                    var date_next = new Date(date_now.getFullYear(), date_now.getMonth(), date_now.getDate(), hr, min, 0, 0);
                    if (date_now > date_next) {
                        date_next = new Date(date_now.getFullYear(), date_now.getMonth(), date_now.getDate() + 1, hr, min, 0, 0);
                    }
                }


                if (date_now > date_next) {
                    if (window.tobiz.editor) {
                        $(this).children('.days').text('00');
                        $(this).children('.hrs').text('00');
                        $(this).children('.min').text('00');
                        $(this).children('.sec').text('00');
                    } else {
                        $(this).closest('.section').addClass('invis');

                    }


                } else {
                    var totalSec = parseInt((date_next.getTime() - date_now.getTime()) / 1000),
                        tdays = Math.floor(totalSec / (24 * 3600)),
                        thrs = Math.floor((totalSec - tdays * 24 * 3600) / (3600)),
                        tmin = Math.floor((totalSec - tdays * 24 * 3600 - thrs * 3600) / (3600 / 60)),
                        tsec = Math.floor((totalSec - tdays * 24 * 3600 - thrs * 3600 - tmin * (3600 / 60)) / (3600 / (60 * 60)));

                    if (tdays < 10)
                        tdays = "0" + tdays;
                    if (thrs < 10)
                        thrs = "0" + thrs;
                    if (tmin < 10)
                        tmin = "0" + tmin;
                    if (tsec < 10)
                        tsec = "0" + tsec;


//							console.log('tdays:'+tdays);
//							console.log('thrs:'+thrs);
//							console.log('tmin:'+tmin);
//							console.log('tsec:'+tsec);

                }

                $(this).children('.days').text(tdays);
                $(this).children('.hrs').text(thrs);
                $(this).children('.min').text(tmin);
                $(this).children('.sec').text(tsec);

                //$(this).html('ÐžÑÑ‚Ð°Ð»Ð¾ÑÑŒ '+ tdays +' Ð´Ð½ÐµÐ¹,  '+ thrs+ ' Ñ‡Ð°ÑÐ¾Ð², '+ tmin+ ' Ð¼Ð¸Ð½ÑƒÑ‚, '+tsec);


            })


        }
    }, 1000)

    setInterval(function () {
        if ($('[data-map-obj]').size()) {
            $('[data-map-obj]').each(function (index) {
                var points = JSON.parse(_.unescape($(this).attr('data-map-obj')));
                var center = JSON.parse(_.unescape($(this).attr('data-map-center')));
                $(this).removeAttr('data-map-obj');
                $(this).removeAttr('data-map-center');
                var this_element = $(this).children('.map_inner')[0];

                function MakeMap() {
                    var map;
                    map = new ymaps.Map(this_element, center);
                    center.controls = ["zoomControl"];


                    _.each(points, function (i, num) {
                        var myGeocoder = ymaps.geocode(i.address);
                        myGeocoder.then(
                            function (res) {
                                var myPlacemark = new ymaps.Placemark(res.geoObjects.get(0).geometry.getCoordinates(), {}, {
                                    preset: 'islands#icon',
                                    iconColor: i.color
                                });
                                map.geoObjects.add(myPlacemark);
                            },
                            function (err) {
                                //console.log('ÐžÑˆÐ¸Ð±ÐºÐ°');
                            }
                        );
                    })
                }


                $.ajax({
                    url: 'https://api-maps.yandex.ru/2.1/?lang=ru_RU',
                    dataType: "script",
                    cache: true,
                    success: function () {
                        ymaps.ready(function () {
                            MakeMap();
                        })
                    }
                });
            })
        }
    }, 200)


    setInterval(function () {
        if ($('.fixed_top').size()) {
            var count = $('.fixed_top').size();
            var height = 0;
            var top = 0;
            $('.fixed_top').each(function () {
                height += $(this).height();
                $(this).css({top: top + 'px'});
                top += $(this).height();
            })
            $('#wrapper').css({paddingTop: height + 'px'});
        } else {
            $('#wrapper').css({paddingTop: 0 + 'px'});
        }
    }, 200)


    $(window).scroll(function () {
        $('.fixed_top').css({'left': '-' + $(window).scrollLeft() + 'px'});
    })


    if (window.location.search == '?rk_pay=success') {
        alert('ÐžÐ¿Ð»Ð°Ñ‚Ð° ÑƒÑÐ¿ÐµÑˆÐ½Ð¾ Ð·Ð°Ð²ÐµÑ€ÑˆÐµÐ½Ð°!');
        window.location.search = '';
    }
    if (window.location.search == '?rk_pay=fail') {
        alert('ÐžÐ¿Ð»Ð°Ñ‚Ð° Ð½Ðµ Ð·Ð°Ð²ÐµÑ€ÑˆÐµÐ½Ð°!');
        window.location.search = '';
    }


    $('.section302 .left.style2 ul li a, .section302 .left.style4 ul li a').hover(function () {
        $(this).parent().addClass('hover');
    }, function () {
        $(this).parent().removeClass('hover');
    })


    $('body').on('click', '.section304 .spoiler_toggle', function () {
        if ($(this).parent().hasClass('close')) {
            $(this).text('-')
        }
        if ($(this).parent().hasClass('open')) {
            $(this).text('+')
        }
        $(this).parent().toggleClass('open');
        $(this).parent().toggleClass('close');
    })
    $('body').on('click', '.section305 .spoiler_toggle', function () {
        if ($(this).parent().hasClass('close')) {
            $(this).text('-')
        }
        if ($(this).parent().hasClass('open')) {
            $(this).text('+')
        }
        $(this).parent().toggleClass('open');
        $(this).parent().toggleClass('close');

    })
    $('body').on('click', '.section304 .spoiler_title', function () {
        if (typeof(window.tobiz.editor) === 'undefined') {


            $(this).parent().toggleClass('open');
            $(this).parent().toggleClass('close');
        }
    })
    $('body').on('click', '.section305 .spoiler_title', function () {
        if (typeof(window.tobiz.editor) === 'undefined') {


            $(this).parent().toggleClass('open');
            $(this).parent().toggleClass('close');
        }
    })

    if ($('.section304 .spoiler').size() && typeof(window.tobiz.editor) === 'undefined') {
        $('.section304 .spoiler').each(function () {
            $(this).removeClass('open');
            $(this).addClass('close');
        })
    }
    if ($('.section305 .spoiler').size() && typeof(window.tobiz.editor) === 'undefined') {
        $('.section305 .spoiler').each(function () {
            $(this).removeClass('open');
            $(this).addClass('close');
        })
    }


    if ($('.extra_info_block .extra_image').size() && typeof(window.tobiz.editor) === 'undefined') {
        $('.extra_info_block .extra_image').click(function () {
            var way = $(this).children('img').attr('src');
            console.log(way);
            var t_arr = way.split('/');
            var new_image_url = '/img/400x400/' + t_arr[3];

            $(this).parent().parent().children('img').attr('src', new_image_url);

        })
    }


    $('body').on('click', '.section310 .image_box', function () {
        var image = $(this).children('img').data('image');
        $(this).parent().parent().parent().parent().find('.viewport').css({
            backgroundImage: 'url(' + image + ')'
        });
    })

    function silder310(block, way) {
        var len = block.find('.image_box').size();

        var mr = block.find('.image_box').eq(0).css('marginRight');
        mr = mr.replace(/px/g, '') * 1;
        var w = block.find('.image_box').eq(0).width() + '';
        w = w.replace(/px/g, '') * 1;


        var width = len * w + (len - 1) * mr + mr;
        block.find('.image_wrapper').css({ // Ð¾Ð±Ð½Ð¾Ð²Ð»ÑÐµÐ¼ ÑˆÐ¸Ñ€Ð¸Ð½Ñƒ.
            width: width + 'px'
        });


        var max_left = block.find('.section_inner').width() + mr - width;
        var min_left = 0;


        var this_left = block.find('.image_wrapper').css('left');
        this_left = this_left.replace(/px/g, '') * 1;

        if (way == 'left') {
            this_left -= (mr + w);
            if (width < block.find('.section_inner').width()) {
                return
            }

            if (this_left < (-1) * (len * w + (len - 1) * mr)) {
                return
            }

        }
        if (way == 'right') {
            this_left += (mr + w);
            if (this_left > 0) {
                this_left = 0;
            }
        }

        block.find('.image_wrapper').css({
            left: this_left + 'px'

        });


    }


    $('body').on('click', '.section310 .iamges .go_left', function () {
        silder310($(this).closest('.section'), 'right');
    })


    $('body').on('click', '.section310 .iamges .go_right', function () {
        silder310($(this).closest('.section'), 'left');
    })


    if ($('.section.animate').size() && typeof(window.tobiz.editor) === 'undefined' && $(window).width() > 1000 && parseInt(window.tobiz.t) >= 3) {
        $('.section.animate').each(function () {


            if ($(this).hasClass('section118') || $(this).hasClass('section128') || $(this).hasClass('section149') || $(this).hasClass('section124')) {
                var seclector = '.col_3';
                var objects = $(this).find(seclector);
                var parent_selector = '.arr1';
                var parents = $(this).find(parent_selector);
                objects.css({opacity: 0, position: 'relative'});

                var block = $(this);
                var extra_objects = block.find('.title, .sub_title');
                extra_objects.css({opacity: 0, top: '0', position: 'relative'});


                $.each(parents, function (i, el) {
                    $(el).find(seclector).eq(0).css({left: '-200px'})
                    $(el).find(seclector).eq(2).css({left: '200px'})
                })
                $(window).scroll(function () {
                    $.each(objects, function (i, el) {
                        if (($(window).scrollTop() + ($(window).height() / 2)) > ($(el).closest('.arr1').offset().top) || ($(window).scrollTop() + $(window).height() > $(el).closest('.arr1').offset().top + $(el).closest('.arr1').height())) {
                            $(el).animate({opacity: 1.0, left: 0}, 900);
                            extra_objects.animate({opacity: 1, top: 0}, 900);
                        }
                    })
                })
            }
            if ($(this).hasClass('section125') || $(this).hasClass('section250')) {
                var seclector = '.col_2';
                var objects = $(this).find(seclector);
                var parent_selector = '.arr1';
                var parents = $(this).find(parent_selector);
                objects.css({opacity: 0, position: 'relative'});
                var block = $(this);
                var extra_objects = block.find('.title, .sub_title');
                extra_objects.css({opacity: 0, top: '0', position: 'relative'});

                $.each(parents, function (i, el) {
                    $(el).find(seclector).eq(0).css({left: '-200px'})
                    $(el).find(seclector).eq(1).css({left: '200px'})
                })
                $(window).scroll(function () {
                    $.each(objects, function (i, el) {
                        if (($(window).scrollTop() + ($(window).height() / 2)) > ($(el).closest('.arr1').offset().top) || ($(window).scrollTop() + $(window).height() > $(el).closest('.arr1').offset().top + $(el).closest('.arr1').height())) {
                            $(el).animate({opacity: 1.0, left: 0}, 900);
                            extra_objects.animate({opacity: 1, top: 0}, 900);
                        }
                    })
                })
            }
            if ($(this).hasClass('section307')) {
                var seclector = '.col';
                var objects = $(this).find(seclector);
                var parent_selector = '.section_inner';
                var parents = $(this).find(parent_selector);
                objects.css({opacity: 0, position: 'relative'});

                var block = $(this);
                var extra_objects = block.find('.title, .sub_title');
                extra_objects.css({opacity: 0, top: '0', position: 'relative'});


                $.each(parents, function (i, el) {
                    $(el).find(seclector).eq(0).css({left: '-600px'})
                    $(el).find(seclector).eq(1).css({left: '-400px'})
                    $(el).find(seclector).eq(2).css({left: '-200px'})
                })
                $(window).scroll(function () {
                    $.each(objects, function (i, el) {
                        if (($(window).scrollTop() + ($(window).height() / 2)) > ($(el).closest('.section_inner').offset().top) || ($(window).scrollTop() + $(window).height() > $(el).closest('.section_inner').offset().top + $(el).closest('.section_inner').height())) {
                            $(el).animate({opacity: 1.0, left: 0}, 900);
                            extra_objects.animate({opacity: 1, top: 0}, 900);
                        }
                    })
                })
            }
            if ($(this).hasClass('section309')) {
                var seclector = '.col';
                var objects = $(this).find(seclector);
                var parent_selector = '.section_inner';
                var parents = $(this).find(parent_selector);
                objects.css({opacity: 0, position: 'relative'});

                var block = $(this);
                var extra_objects = block.find('.title, .sub_title');
                extra_objects.css({opacity: 0, top: '0', position: 'relative'});

                $.each(parents, function (i, el) {
                    $(el).find(seclector).eq(0).css({left: '-1000px'})
                    $(el).find(seclector).eq(1).css({left: '-800px'})
                    $(el).find(seclector).eq(2).css({left: '-600px'})
                    $(el).find(seclector).eq(3).css({left: '-400px'})
                    $(el).find(seclector).eq(4).css({left: '-200px'})
                })
                $(window).scroll(function () {
                    $.each(objects, function (i, el) {
                        if (($(window).scrollTop() + ($(window).height() / 2)) > ($(el).closest('.section_inner').offset().top) || ($(window).scrollTop() + $(window).height() > $(el).closest('.section_inner').offset().top + $(el).closest('.section_inner').height())) {
                            $(el).animate({opacity: 1.0, left: 0}, 900);
                            extra_objects.animate({opacity: 1, top: 0}, 900);
                        }
                    })
                })
            }
            if ($(this).hasClass('section308')) {
                var seclector = '.col';
                var objects = $(this).find(seclector);
                var parent_selector = '.section_inner';
                var parents = $(this).find(parent_selector);
                objects.css({opacity: 0, position: 'relative'});

                var block = $(this);
                var extra_objects = block.find('.title, .sub_title');
                extra_objects.css({opacity: 0, top: '0', position: 'relative'});

                $.each(parents, function (i, el) {
                    $(el).find(seclector).eq(0).css({left: '-800px'})
                    $(el).find(seclector).eq(1).css({left: '-600px'})
                    $(el).find(seclector).eq(2).css({left: '-400px'})
                    $(el).find(seclector).eq(3).css({left: '-200px'})
                })
                $(window).scroll(function () {
                    $.each(objects, function (i, el) {
                        if (($(window).scrollTop() + ($(window).height() / 2)) > ($(el).closest('.section_inner').offset().top) || ($(window).scrollTop() + $(window).height() > $(el).closest('.section_inner').offset().top + $(el).closest('.section_inner').height())) {
                            $(el).animate({opacity: 1.0, left: 0}, 900);
                            extra_objects.animate({opacity: 1, top: 0}, 900);
                        }
                    })
                })
            }
            if ($(this).hasClass('section226')) {
                var seclector = '.arr1';
                var objects = $(this).find(seclector);
                var parent_selector = '.section_inner';
                var parents = $(this).find(parent_selector);
                objects.css({opacity: 0, position: 'relative'});


                var block = $(this);
                var extra_objects = block.find('.title, .sub_title');
                extra_objects.css({opacity: 0, top: '0', position: 'relative'});

                $.each(objects, function (i, el) {
                    $(el).css({left: '-' + ((i + 1) * 400) + 'px'})
                })
                $(window).scroll(function () {
                    $.each(objects, function (i, el) {
                        if (($(window).scrollTop() + ($(window).height() / 2)) > ($(el).closest('.section_inner').offset().top) || ($(window).scrollTop() + $(window).height() > $(el).closest('.section_inner').offset().top + $(el).closest('.section_inner').height())) {
                            $(el).animate({opacity: 1.0, left: 0}, 900);
                            extra_objects.animate({opacity: 1, top: 0}, 900);
                        }
                    })
                })
            }
            if ($(this).hasClass('section132')) { //
                var seclector = '.text';
                var objects = $(this).find(seclector);
                var parent_selector = '.section_inner';
                var parents = $(this).find(parent_selector);
                objects.css({opacity: 0, position: 'relative'});
                objects.eq(0).css({left: '-' + (400) + 'px'})

                var block = $(this);
                var extra_objects = block.find('.title, .sub_title');
                extra_objects.css({opacity: 0, top: '0', position: 'relative'});

                $(window).scroll(function () {
                    $.each(objects, function (i, el) {
                        if (($(window).scrollTop() + ($(window).height() / 2)) > ($(el).closest('.section_inner').offset().top) || ($(window).scrollTop() + $(window).height() > $(el).closest('.section_inner').offset().top + $(el).closest('.section_inner').height())) {
                            $(el).animate({opacity: 1.0, left: 0}, 900);
                            extra_objects.animate({opacity: 1, top: 0}, 900);
                        }
                    })
                })
            }
            if ($(this).hasClass('section164')) { //
                var seclector = '.pcenter';
                var objects = $(this).find(seclector);
                var parent_selector = '.section_inner';
                var parents = $(this).find(parent_selector);
                objects.css({opacity: 0, position: 'relative'});
                objects.eq(0).css({left: '-' + (400) + 'px'})

                var block = $(this);
                var extra_objects = block.find('.title, .sub_title');
                extra_objects.css({opacity: 0, top: '0', position: 'relative'});
                $(window).scroll(function () {
                    $.each(objects, function (i, el) {
                        if (($(window).scrollTop() + ($(window).height() / 2)) > ($(el).closest('.section_inner').offset().top) || ($(window).scrollTop() + $(window).height() > $(el).closest('.section_inner').offset().top + $(el).closest('.section_inner').height())) {
                            $(el).animate({opacity: 1.0, left: 0}, 900);
                            extra_objects.animate({opacity: 1, top: 0}, 900);
                        }
                    })
                })
            }
            if ($(this).hasClass('section310') || $(this).hasClass('section148') || $(this).hasClass('section147') || $(this).hasClass('section143') || $(this).hasClass('section306')) { //
                var seclector = '.viewport, .iamges, .image_box1, .image_box2, .image_box3, .image_box4, .image_box5, .image_box, .form_wrapper';
                var objects = $(this).find(seclector);
                var parent_selector = '.section_inner';
                var parents = $(this).find(parent_selector);
                objects.css({opacity: 0});


                var block = $(this);
                var extra_objects = block.find('.title, .sub_title');
                extra_objects.css({opacity: 0});
                $(window).scroll(function () {
                    $.each(objects, function (i, el) {
                        if (($(window).scrollTop() + ($(window).height() / 2)) > ($(el).closest('.section_inner').offset().top) || ($(window).scrollTop() + $(window).height() > $(el).closest('.section_inner').offset().top + $(el).closest('.section_inner').height())) {
                            $(el).animate({opacity: 1.0}, 900);
                            extra_objects.animate({opacity: 1}, 900);
                        }
                    })
                })
            }
            if ($(this).hasClass('section126')) { //
                var seclector = '.image1, .video1, .right';
                var objects = $(this).find(seclector);
                var parent_selector = '.arr1';
                var parents = $(this).find(parent_selector);
                objects.css({opacity: 0, position: 'relative'});


                $.each(parents, function (i, el) {
                    $(el).find(seclector).eq(0).css({left: '-200px'})
                    $(el).find(seclector).eq(1).css({left: '200px'})
                })


                var block = $(this);
                var extra_objects = block.find('.title, .sub_title');
                extra_objects.css({opacity: 0, top: '0', position: 'relative'});


                $(window).scroll(function () {
                    $.each(objects, function (i, el) {
                        if (($(window).scrollTop() + ($(window).height() / 2)) > ($(el).closest('.arr1').offset().top) || ($(window).scrollTop() + $(window).height() > $(el).closest('.arr1').offset().top + $(el).closest('.arr1').height())) {
                            $(el).animate({opacity: 1.0, left: 0}, 900);
                            extra_objects.animate({opacity: 1, top: 0}, 900);
                        }
                    })
                })
            }
            if ($(this).hasClass('section301')) { //
                var seclector = '.arr1';
                var objects = $(this).find(seclector);
                var parent_selector = '.section_inner';
                var parents = $(this).find(parent_selector);
                objects.css({opacity: 0, left: '-400px', position: 'relative'});


                var block = $(this);
                var extra_objects = block.find('.title, .sub_title');
                extra_objects.css({opacity: 0, top: '0', position: 'relative'});


                $(window).scroll(function () {
                    $.each(objects, function (i, el) {
                        if (($(window).scrollTop() + ($(window).height() / 2)) > ($(el).closest('.arr1').offset().top) || ($(window).scrollTop() + $(window).height() > $(el).closest('.arr1').offset().top + $(el).closest('.arr1').height())) {
                            $(el).animate({opacity: 1.0, left: 0}, 900);
                            extra_objects.animate({opacity: 1, top: 0}, 900);
                        }
                    })
                })
            }


            if ($(this).hasClass('section117')) { //
                var seclector = '.col_2';
                var objects = $(this).find(seclector);
                var parent_selector = '.arr1';
                var parents = $(this).find(parent_selector);
                objects.css({opacity: 0, position: 'relative'});

                var block = $(this);
                var extra_objects = block.find('.title, .sub_title');
                extra_objects.css({opacity: 0, top: '0', position: 'relative'});

                $.each(parents, function (i, el) {
                    if ((i + 1) % 2) {
                        $(el).find(seclector).eq(0).css({left: '-200px'})
                        $(el).find(seclector).eq(1).css({left: '200px'})
                    } else {
                        $(el).find(seclector).eq(0).css({left: '200px'})
                        $(el).find(seclector).eq(1).css({left: '-200px'})
                    }
                })
                $(window).scroll(function () {
                    $.each(objects, function (i, el) {
                        if (($(window).scrollTop() + ($(window).height() / 2)) > ($(el).closest('.arr1').offset().top) || ($(window).scrollTop() + $(window).height() > $(el).closest('.arr1').offset().top + $(el).closest('.arr1').height())) {
                            $(el).animate({opacity: 1.0, left: 0}, 900);
                            extra_objects.animate({opacity: 1, top: 0}, 900);
                        }
                    })
                })
            }


            if ($(this).hasClass('section152') || $(this).hasClass('section201')) {
                var seclector = '.image_box1, .image_box2, .image_box3, .image_box4, .image_box5, .col_5 ';
                var objects = $(this).find(seclector);
                var parent_selector = '.arr1';
                var parents = $(this).find(parent_selector);
                objects.css({opacity: 0, position: 'relative'});

                var block = $(this);
                var extra_objects = block.find('.title, .sub_title');
                extra_objects.css({opacity: 0, top: '0', position: 'relative'});


                $.each(parents, function (i, el) {
                    $(el).find(seclector).eq(0).css({left: '-200px'})
                    $(el).find(seclector).eq(1).css({left: '-100px'})
                    $(el).find(seclector).eq(3).css({left: '100px'})
                    $(el).find(seclector).eq(4).css({left: '200px'})
                })
                $(window).scroll(function () {
                    $.each(objects, function (i, el) {
                        if (($(window).scrollTop() + ($(window).height() / 2)) > ($(el).closest('.arr1').offset().top) || ($(window).scrollTop() + $(window).height() > $(el).closest('.arr1').offset().top + $(el).closest('.arr1').height())) {
                            $(el).animate({opacity: 1.0, left: 0, top: 0}, 900);
                            extra_objects.animate({opacity: 1, top: 0}, 900);
                        }
                    })
                })
            }
            if ($(this).hasClass('section121') || $(this).hasClass('section151') || $(this).hasClass('section200')) {
                var seclector = '.col_4';
                var objects = $(this).find(seclector);
                var parent_selector = '.arr1';
                var parents = $(this).find(parent_selector);
                objects.css({opacity: 0, position: 'relative'});

                var block = $(this);
                var extra_objects = block.find('.title, .sub_title');
                extra_objects.css({opacity: 0, top: '0', position: 'relative'});

                $.each(parents, function (i, el) {
                    $(el).find(seclector).eq(0).css({left: '-200px'})
                    $(el).find(seclector).eq(1).css({left: '-100px'})
                    $(el).find(seclector).eq(2).css({left: '100px'})
                    $(el).find(seclector).eq(3).css({left: '200px'})
                })
                $(window).scroll(function () {
                    $.each(objects, function (i, el) {
                        if (($(window).scrollTop() + ($(window).height() / 2)) > ($(el).closest('.arr1').offset().top) || ($(window).scrollTop() + $(window).height() > $(el).closest('.arr1').offset().top + $(el).closest('.arr1').height())) {
                            $(el).animate({opacity: 1.0, left: 0, top: 0}, 900);
                            extra_objects.animate({opacity: 1, top: 0}, 900);
                        }
                    })
                })
            }


        })
    }


    if ($('.section.widget').size() && typeof(window.tobiz.editor) === 'undefined' && parseInt(window.tobiz.w) == 1) {

        if ($('.section1000').size()) {
            var popup_1000 = 1;
            $('html').mouseleave(function (e) {
                if (popup_1000) {
                    popup_1000 = 0;
                    $('.section1000').find('.extra_info_block_wrapper').show();
                }
            })
        }
        if ($('.section1003').size()) {
            $('.section1003').show();

        }
        if ($('.section1001').size()) {
            var today = new Date();

            $('.section1001').each(function () {

                var lag = parseInt($(this).data('lag'));
                var start = parseInt($(this).data('start'));
                var stop = parseInt($(this).data('stop'));

                if (start < 0 && start > 23) {
                    console.log('ÐÐµÐ²ÐµÑ€Ð½Ñ‹Ðµ Ð¿Ð°Ñ€Ð°Ð¼ÐµÑ‚Ñ€Ñ‹ POPUP');
                    return false;
                }
                if (stop < 0 && stop > 23) {
                    console.log('ÐÐµÐ²ÐµÑ€Ð½Ñ‹Ðµ Ð¿Ð°Ñ€Ð°Ð¼ÐµÑ‚Ñ€Ñ‹ POPUP');
                    return false;
                }
                if (start > stop) {
                    console.log('ÐÐµÐ²ÐµÑ€Ð½Ñ‹Ðµ Ð¿Ð°Ñ€Ð°Ð¼ÐµÑ‚Ñ€Ñ‹ POPUP');
                    return false;
                }

                if (today.getHours() >= start && today.getHours() <= stop) {
                    var block = $(this).find('.extra_info_block_wrapper');
                    setTimeout(function () {
                        block.show();
                    }, lag * 1000)

                }


            })


        }


    }


    window.tobiz.slider312array = [];
    window.tobiz.slider312Init = function (id) {
        var slide_id = 0;
        var auto_s = 1;
        if ($('#b_' + id).size()) {
            auto_s = $('#b_' + id).data('autoslide') * 1;

        }
        if (!(typeof(window.tobiz.slider312array[id]) === 'undefined')) {

            if (!(typeof(window.tobiz.slider312array[id].current_id) === 'undefined'))
                slide_id = window.tobiz.slider312array[id].current_id;
            auto_s = window.tobiz.slider312array[id].auto_slide;

            delete window.tobiz.slider312array[id];
        }

        if ($('#b_' + id).size()) {
            var block_slider = $('#b_' + id);
            window.tobiz.slider312array[id] = {
                width: block_slider.find('.section_inner').width(),
                height: block_slider.find('.slider').height(),
                len: block_slider.find('.slide').size(),
                current_id: 0,
                auto_slide: block_slider.data('autoslide') * 1,
                auto_slide_interval: 'timeout',
                lag: 6000,
                setScroller: function () {
                    block_slider.find('.scroller').html('');
                    var len = block_slider.find('.slide').size();
                    $.each(block_slider.find('.slide'), function (index, element) {
                        block_slider.find('.scroller').append('<div class="point" data-id="' + index + '"></div>')
                    })
                },
                goToSlide: function (id, fast) {
                    var speed = 500;
                    if (fast == 1) {
                        speed = 0;
                    }

                    if (id < 0) {
                        id = this.len - 1;
                    }
                    if (id > this.len - 1) {
                        id = 0;
                    }


                    block_slider.find('.point').removeClass('current');
                    var pos = (-1 * (id * this.width)) + 'px';
                    block_slider.find('.slider_wrapper').animate({left: pos}, speed);
                    this.current_id = id;
                    block_slider.find('.point').eq(id).addClass('current');


                },
                autoSlide: function () {
                    if (this.auto_slide == 1) {
                        var id = this.current_id;
                        id++;
                        if (id > this.len - 1) {
                            id = 0;
                        }
                        this.goToSlide(id);
                    }
                },
                eventListener: function () {
                    var self = this;
                    block_slider.find('.point').click(function () {
                        if (!$(this).hasClass('current')) {
                            self.goToSlide($(this).data('id'));
                        }
                        self.auto_slide = 0;
                        clearInterval(self.auto_slide_interval);

                    })
                    block_slider.find('.go_left, .go_right').click(function () {
                        var id = self.current_id;
                        if ($(this).hasClass('go_left')) {
                            id--;
                            if (id < 0) {
                                id = self.len - 1;
                            }
                        } else {
                            id++;
                            if (id > self.len - 1) {
                                id = 0;
                            }
                        }
                        self.goToSlide(id);
                        self.auto_slide = 0;
                        clearInterval(self.auto_slide_interval);
                    })
                },
                init: function (slide_id, auto_s) {
                    this.auto_slide = auto_s;
                    block_slider.find('.point').eq(0).addClass('current');
                    block_slider.find('.slider_wrapper').css({width: this.width * this.len, height: this.height});
                    block_slider.find('.slide').css({width: this.width});
                    block_slider.find('.arr1').css({width: this.width});
                    this.setScroller();
                    this.eventListener();
                    this.goToSlide(slide_id, 1);
                    var self = this;
                    if (typeof(window.tobiz.editor) === 'undefined') {
                        self.auto_slide_interval = setInterval(function () {
                            self.autoSlide();
                        }, self.lag)
                    }
                }
            }
            window.tobiz.slider312array[id].init(slide_id, auto_s);
        }
    }

    $('.section312').each(function () {
        console.log($(this));
        window.tobiz.slider312Init($(this).data('id'))
    })

    $(window).resize(function () {

        $('.section312').each(function () {
            console.log($(this));
            window.tobiz.slider312Init($(this).data('id'))
        })

    })


    setInterval(function () {
        $({temporary_x: -151, temporary_y: 0}).animate({temporary_x: 500, temporary_y: 0}, {
            duration: 1000,
            step: function () {
                var position = Math.round(this.temporary_x) + "px " + Math.round(this.temporary_y) + "px";
                $('.btn.animation, .btn1.animation, .btn2.animation, .btn3.animation, .btn4.animation, .btn5.animation').css("background-position", position);
            }
        });
    }, 2000)


})


