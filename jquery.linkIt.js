/*
    * name: LinkIt
    * author: Adil Hussain
    * version: 0.1.0
    * license: MIT
*/

(function($){
    $.fn.linkIt = function(options) {
        // alert(this.html()); 
        // mtlb jis pa laga ya plugin us ka ander ka html 
        // ap $(this) asa use nh krta plugin ma
        // Default Settings
        // bydefault set parameter
        // var settings = $.extend({
        //     whatever : 'something'
        // }, options);
        // user set parameter
        // var settings = $.extend({
        //     whatever : null
        // }, options);
        // actual plugin options
        // mtlb jo hmara plugin main hon gay
        var settings = $.extend({
            href : null,
            text : null,
            target : '_self'
        }, options);

        // alert(settings.whatever);

        // Validation
        if(settings.href == null){
            console.log('You need an href option for LinkIt to work');

            return this;
        }

        // ya hr element pa chala ga jo es ma attach hoga
        return this.each(function(){
            var object = $(this);
            // mtlb hr element jis pa plugin attached ha objectt ka mtlb ya ha

            if(settings.text == null){
                settings.text = object.text();
            }

            object.wrap('<a target="'+settings.target+'" href="'+settings.href+'"></a>').text(settings.text);
        });



    }
}(jQuery));

