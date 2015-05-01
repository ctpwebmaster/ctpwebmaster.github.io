(function(){
  $(document).ready(function(){
    $(".video").fitVids();

    $(".modal-link").click(function() {
    $("body").addClass("modal-open"),
    $(".modal-bg").fadeIn(),
    $(".modal-close").fadeIn(),
    $(".modal-container").fadeIn()
    });

    $(".modal-close").click(function() {
    $("body").removeClass("modal-open"),
    $(".modal-bg").fadeOut(),
    $(".modal-close").fadeOut(),
    $(".modal-container").fadeOut()
    });

    (function(){
      var active = false,
          $header = $('.header');

      $('[data-menu-toggle]').click(function(){
        if(active){
          $header.removeClass('is-active');
          active = false;
        }else {
          $header.addClass('is-active');
          active = true;
        }
      });
    }());
  });
}());
