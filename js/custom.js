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