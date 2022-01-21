$(function () {
    $('.footer-title').on('click', function () {
        $(this).next().slideToggle();
        $(this).toggleClass('active');

    });

    $('.menu__btn').on('click', function () {
        $('.menu__btn').toggleClass('active');

    });


    var swiper = new Swiper(".myswiper", {
        slidesPerView: 4,
        spaceBetween: 30,
        loop: true,
        loopedslides: 1,

        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },

        breakpoints: {

            1200: {
                slidesPerView: 4,
            },

            992: {
                slidesPerView: 3,


            },

            600: {
                slidesPerView: 2,
            },

            320: {
                slidesPerView: 1,
            },
        },
    });

    $('.menu__btn').on('click', function () {
        $('.menu__items').toggleClass('menu__items--active');

    });

    $(' select,catalog-category__input').styler();

    $('.filter-selects__button').on('click', function () {
        $('.filter-selects__button').removeClass('filter-selects__button--active');
        $(this).addClass('filter-selects__button--active');
    });

    $('.button-list').on('click', function () {
        $('.week-products__content').addClass('week-products__content--list');
    });

    $('.button-grid').on('click', function () {
        $('.week-products__content').removeClass('week-products__content--list');
    });

    $('.product-tabs__link').on('click', function (e) {
        e.preventDefault();
        $('.product-tabs__link').removeClass('product-tabs__link--active');
        $(this).addClass('product-tabs__link--active');

        $('.product-tabs__text').removeClass('product-tabs__text--active');
        $($(this).attr('href')).addClass('product-tabs__text--active'); /*убирает добовляет класс*/
    });



    $('.trendy__items').slick({
        dots: true,
        arrows: false,
        fade: true,
        autoplay: false,
        autoplaySpead: 1000
    });

    $('.product-detalis-slider').slick({
        dots: false,
        arrows: false,
        asNavFor: '.product-detalis-slider-big',
        focusOnSelect: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        vertical: true,
        draggable: false
    });

    $('.product-detalis-slider-big').slick({
        dots: false,
        arrows: false,
        asNavFor: '.product-detalis-slider',
        draggable: false,
        responsive: [

            {
                breakpoint: 770,
                settings: {
                    autoplaySpeed: 2000,
                    autoplay: true,
                }
            },
        ]
    });


    $('.partners__list').slick({
        arrows: false,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplaySpeed: 2000,
        autoplay: true,
        /*variableWidth: true,*/

        responsive: [

            {
                breakpoint: 1150,
                settings: {
                    slidesToShow: 4,
                }
            },

            {
                breakpoint: 950,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    });

    $(".prise").ionRangeSlider({
        type: "double",
        grid: true,
        prefix: "$"
    });

    $(".recent-products__star").rateYo({
        rating: 4,
        starWidth: "11px",
        spacing: "7px",
    });

    $(".week-products__star").rateYo({
        rating: 4,
        starWidth: "18px",
        spacing: "13px",
        ratedFill: "#ffcc00"

    });

    $(".product-detalis__star").rateYo({
        rating: 4,
        starWidth: "19px",
        spacing: "11px"
    });

    $('.product-detalis__input').styler();

    var containerEl1 = document.querySelector('[data-ref="container-1"]');
    var containerEl2 = document.querySelector('[data-ref="container-2"]');
    var containerEl3 = document.querySelector('[data-ref="container-3"]');

    var config = {
        controls: {
            scope: 'local'
        }
    };

    var mixer1 = mixitup(containerEl1, config);
    var mixer2 = mixitup(containerEl2, config);
    var mixer3 = mixitup(containerEl3, config);

    $("#rateYo").rateYo({});
});