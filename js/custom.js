$(function() {
  jQuery( function() {
    jQuery( '#jquery-ui-slider-1' ) . slider( {
        animate: 'slow',
        range: 'min',
        value: 50,
        min: 0,
        max: 100,
        slide: function( event, ui ) {
            jQuery( '#jquery-ui-slider-value-1' ) . val( ui.value);
        }
    } );
    jQuery( '#jquery-ui-slider-value-1' ) . val( jQuery( '#jquery-ui-slider-1' ) . slider( 'value' ) );

    jQuery( '#jquery-ui-slider-2' ) . slider( {
        animate: 'slow',
        range: 'min',
        value: 50,
        min: 0,
        max: 100,
        slide: function( event, ui ) {
            jQuery( '#jquery-ui-slider-value-2' ) . val( ui.value);
        }
    } );
    jQuery( '#jquery-ui-slider-value-2' ) . val( jQuery( '#jquery-ui-slider-2' ) . slider( 'value' ) );
});
  jQuery( '#jquery-ui-slider-3' ) . slider( {
        animate: 'slow',
        range: 'min',
        value: 50,
        min: 0,
        max: 100,
        slide: function( event, ui ) {
            jQuery( '#jquery-ui-slider-value-3' ) . val( ui.value);
        }
    } );
    jQuery( '#jquery-ui-slider-value-3' ) . val( jQuery( '#jquery-ui-slider-3' ) . slider( 'value' ) );

    jQuery( '#jquery-ui-slider-volume' ) . slider( {
        animate: 'slow',
        range: 'min',
        value: 50,
        min: 0,
        max: 100,
        slide: function( event, ui ) {
            jQuery( '#jquery-ui-slider-value-volume' ) . val( ui.value);
        }
    } );
    jQuery( '#jquery-ui-slider-value-volume' ) . val( jQuery( '#jquery-ui-slider-volume' ) . slider( 'value' ) );
});

$(function(){
  $(".soundBtn").click(function(){
	// $(this).toggleClass("hidden-lg");
	// $('.stopBtn').toggleClass("visible-lg");
    if($(this).hasClass("clicked")){
      $(this).removeClass("clicked");

      document.getElementById("overSound").currentTime = 0; //再生秒数を 0 にセット
      document.getElementById("overSound").play();
    }else{
      $(this).addClass("clicked");

      document.getElementById("overSound").pause();
    }
  });
});

