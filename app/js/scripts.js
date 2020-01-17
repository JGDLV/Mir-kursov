$(document).ready(function () {

  $('form').each(function () {
    const form = $(this);
    const fileInput = $(this).find('input[type="file"]');
    const fileSpan = $(this).find('input[type="file"] ~ span');
    const fileText = 'Прикрепить файл';
    const phone = $(this).find('input[name*="phone"]');
    const privacyLabel = $(this).find('label[class*="privacy"]');
    const privacyInput = privacyLabel.find('input');

    privacyLabel.on('click', function () {
      if (privacyInput.attr('type') == 'checkbox') {
        privacyInput.is(':checked')
          ? privacyLabel.addClass('active')
          : privacyLabel.removeClass('active');
      } else if (privacyInput.attr('type') == 'radio') {
        privacyInput.is(':checked')
          ? (privacyLabel.siblings().removeClass('active'), privacyLabel.addClass('active'))
          : privacyLabel.removeClass('active');
      }
    });

    phone.each(function () {
      $(this).inputmask("+7 (999) 999-99-99");
    });

    fileInput.on('change', function () {
      const fileVal = $(this).val().replace(/.+[\\\/]/, '');
      fileVal !== '' ? fileSpan.text(fileVal) : fileSpan.text(fileText);
    });

    form.on('submit', function () {
      fileSpan.text(fileText);
      privacyLabel.removeClass('active');
    });
  });

  $(window).scroll(function () {
    $(this).scrollTop() > 600 ? $('#top').show(200) : $('#top').hide(200);
  });

  $('#top').click(function () {
    $('body, html').animate({ scrollTop: 0 }, 500);
  });

  $('.menu-toggle .icon-toggle').click(function () {
    $(this).toggleClass('active');
    $('menu').slideToggle();
  });

  $('a[href="#callback"]').magnificPopup({
    type: 'inline',
    removalDelay: 300,
    mainClass: 'mfp-fade',
  });

  $('.ending__item__link').magnificPopup({
    type: 'image',
    closeOnContentClick: true,
    mainClass: 'mfp-img-mobile',
    removalDelay: 300,
    mainClass: 'mfp-fade',
    image: {
      verticalFit: true
    }
  });

  $(document).on('click', '.goto, .main-menu__link, .footer-menu__link', function (event) {
    event.preventDefault();
    let id = $(this).attr('href');
    let top = $(id).offset().top;
    $('body,html').animate({ scrollTop: top }, 500);
  });

  $(".tabs-block").each(function () {
    let tabsBlock = $(this);
    let tabsControls = tabsBlock.find('.tabs__control');
    let tabsContents = tabsBlock.find('.tabs__content');
    $(tabsContents).not(tabsContents[0]).css('display', 'none');
    $(tabsControls[0]).addClass('active');
    $(tabsControls).click(function (event) {
      event.preventDefault();
      tabsControls.removeClass('active');
      $(this).addClass('active');
      let index = $(this).index();
      tabsContents.css('display', 'none');
      tabsContents.eq(index).fadeIn(500);
    });
  });

  $('.accordion').each(function () {
    const accordionBlock = $(this);
    const accordionQuestion = accordionBlock.find('.accordion__item-question');
    const accordionAnswer = accordionBlock.find('.accordion__item-answer');

    accordionQuestion.on('click', function () {
      if ($(this).hasClass('active')) {
        $(this).removeClass('active');
        $(this).next(accordionAnswer).slideUp(500);
      } else {
        accordionQuestion.removeClass('active');
        accordionAnswer.slideUp(500);
        $(this).addClass('active');
        $(this).next(accordionAnswer).slideDown(500);
      }
    });
  });

  $('.main-menu').append('<div class="main-menu__hover"></div>');

  $('.main-menu__item').on('mouseover', function () {
    let pseudoWidth = $(this).innerWidth();
    let pseudoHeight = $(this).innerHeight();
    let pseudoOffsetLeft = $(this).position().left;
    let pseudoOffsetTop = $(this).position().top;
    $('.main-menu__hover').css({
      'width': pseudoWidth + 'px',
      'height': pseudoHeight + 'px',
      'left': pseudoOffsetLeft + 'px',
      'top': pseudoOffsetTop + 'px',
      'opacity': 1,
    });
  });

  $('.main-menu__item').on('mouseout', function () {
    $('.main-menu__hover').css('opacity', '0');
  });

  // wow = new WOW(
  //   {
  //     boxClass: 'wow',
  //     animateClass: 'animated',
  //     offset: 0,
  //     mobile: true,
  //     live: true
  //   }
  // );
  // wow.init();

});
