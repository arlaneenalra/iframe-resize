=============
iframe-resize
=============
A simple utility to resize iframes to their content.
----------------------------------------------------

USAGE
~~~~~~ 

::

  $('iframe').iframeResize();

This will bind a load event handler to each iframe and resize
them to the current size of their content.  It also registers a
handler for the custom ``sizeToContent`` event that can be triggered
from within the iframe using:

::

  window.parent.$(window.frameElement).trigger("sizeToContent");

The class ``iframeResize-min-height`` can be used to set a default height to
the iframe and will be removed automatically when the content loads.


