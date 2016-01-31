/**
 * jSquareImages - JQuery Plugin
 * =============================
 * 
 * This plugin is used to display non-squared images in 
 * squared sizes. The plugin uses CSS to format the images
 * around spans or divs and provide the desired effect applying
 * background properties to the image.
 * 
 * The objective of this plugin is to be extremely small, simple 
 * and easy to use.  
 * 
 * Copyright (c) R. Javier Vega 2014
 * https://github.com/rjaviervega
 * 
 */

(function($) {
        $.fn.squareimages = function(options) {
            
            return this.each(function(){

                // Defaults with general options
                //
                var settings = $.extend({
                    size:    '64',
                    centerx: 'left',
                    centery: 'top'
                }, options);
            
                var itemData = $(this).data();
                var image = $(this);
                var imgUrl = "url('" + image.attr('src') + "')";

                // Extend with per item options
                //
                if (itemData) settings = $.extend(settings, itemData);
                
                settings.size = settings.size + 'px';
            
                image.css({'display': 'none'});
                
                var e = $('<span/>');
                
                var classList =$(this).attr('class').split(/\s+/);
                $.each( classList, function(index, item){
                    e.addClass(item);
                });                        
                
                $(e).css({
                    'overflow' : 'hidden',
                    'display'  : 'block',
                    'height'   : settings.size,
                    'width'    : settings.size,
                    'background-image'      : imgUrl, 
                    'background-position'   : settings.centerx + ' ' + settings.centery,
                    'background-repeat'     : 'no-repeat',
                    'background-size'       : 'auto ' + settings.size,
                });
                
                $(this).wrap(e);
                
        
                
            });
        };
}(jQuery));