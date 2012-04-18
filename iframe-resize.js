

(function( $ ) {
    
    var methods = {
        init: function() {
            return this.each(function(index, frame) {

               frame = $(frame);
               frame.removeClass("iframeResize-min-height");

               frame.bind("load.iframeResize", function () {
                    var frame = $(this);
                    var height = $(this.contentWindow.document).height();
                    frame.height(height);
                    alert(height);
               });
           });
        },

        destory: function() {
            
        }
    };

    // Add the dispatcher method
    $.fn.iframeResize = function( method ) {

        if( methods[ method ] ) {
            return methods[ method ].apply( this, Array.prototype.slice.call( arguments, 1));

        } else if ( typeof method === 'object' || ! method ) {
            return methods.init.apply( this, arguments );

        } else {
            $.error( 'Attept to call undefined method "' + method + '" on jQuery.iframeResize');
        }
    };

})( jQuery );
