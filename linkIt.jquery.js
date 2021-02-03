/*
    * name: LinkIt
    * author: Adil Hussain
    * version: 0.1.0
    * license: MIT
*/

(function($){
    $.fn.linkIt = function() {
        alert(this.html()); 
        // mtlb jis pa laga ya plugin us ka ander ka html 
        // ap $(this) asa use nh krta plugin ma
    }
}(jQuery));

