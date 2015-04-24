(function(){
  $(document).ready(function(){
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
