/*
 * Copyright (c) 2012 Chris Salch, 
 * http://chrissalch.com/, https://github.com/arlaneenalra/iframe-resize
 * 
 * Permission is hereby granted, free of charge, to any person obtaining
 * a copy of this software and associated documentation files (the
 * "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:
 * 
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE. i
 *
 * ----
 * A simple utility to resize iframes to their content.
 *
 * USAGE:
 *  
 *  $('iframe').iframeResize();
 *
 *  The class iframeResize-min-height can be used to set a default height to the iframe 
 *  and will be removed automatically when the content loads.
 */

(function( $ ) {
    
    var methods = {
        init: function init() {
            // Return this for chaining
            return this.each(function(index, frame) {

               frame = $(frame);
               // Remove the default min-height class if we need to
               frame.removeClass("iframeResize-min-height");

               var sizeEventHandler = function sizeEventHander() {
                    $(this).iframeResize('sizeToContent');
               };

               // Bind a load event to resize the iframe to 
               // its content
               frame.bind("load.iframeResize", sizeEventHandler);
            });
        },

        // Resize a iframe to it's content
        sizeToContent: function sizeToContent() {
            return this.each(function sizeCallback(index, frame) {
                var wrapped_frame = $(frame);
                
                wrapped_frame.height(0); // reset sizing
                var height = $(frame.contentWindow.document).height();

                // we add one to avoid scrollbars being added 
                // due to decimals in calculated height.
                wrapped_frame.height(height+1); 
            });
        },

        destroy: function destroy() {
           return this.each(function(index, frame) {
               frame = $(frame);
 
               // unbind the load event
               frame.unbind(".iframeResize");
           });
        }
    };

    // Add the dispatcher method
    $.fn.iframeResize = function( method ) {

        if( methods[ method ] ) {
            // call an explicitly named method with the arguments after the method
            return methods[ method ].apply(
                this, Array.prototype.slice.call( arguments, 1));

        } else if ( typeof method === 'object' || ! method ) {
            // Just run the init method 
            return methods.init.apply( this, arguments );

        } else {
            // Heh! That's an undefined method!
            $.error( 'Attept to call undefined method "'
                + method + '" on jQuery.iframeResize');
        }
    };

})( jQuery );
