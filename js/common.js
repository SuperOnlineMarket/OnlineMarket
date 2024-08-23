$(".logo, .button").click(function() { // ID откуда кливаем
    $('html, body').animate({
        scrollTop: $("#form").offset().top  // класс объекта к которому приезжаем
    }, 700); // Скорость прокрутки
});


$('a[href^="#"').on('click', function() {

    let href = $(this).attr('href');
    
    $('html, body').animate({
      scrollTop: $(href).offset().top
        }, {
            duration: 500,   // по умолчанию «400» 
            easing: "linear" // по умолчанию «swing» 
        });
    
        return false;
    });
    
    $(function () {
      $(window).scroll(function () {
        var top = $(document).scrollTop();
        if (top > 400) $('.aside__fixed').addClass('fixed');
        else $('.aside__fixed').removeClass('fixed');
      });
    });
  