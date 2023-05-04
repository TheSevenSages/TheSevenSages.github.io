// variables
var currMenuOption;

// on document load...
$(document).ready(function(){

        MenuClick($('#menu_home'), false);
        $('#menu_home').addClass("current_tab");

        // switches content and activates transition
        $('.menu_link').click(function(){
                MenuClick(this, true);
        });
});

// exectutes every 50 milliseconds
var i = setInterval(function() {
        // updates the page height
        // var newHeight = $('#content').height() + "px";
        // $('#page').css("height", newHeight);

        // updates the menu indicator's position
        $('#menu_indicator').show();
        $('#menu_indicator').css({
                "width" : $('.current_tab').outerWidth() + 'px',
                "top"   : ($('.current_tab').offset().top + 7) + 'px',
                "left"  : ($('.current_tab').offset().left - $('#menu').offset().left) + 'px'
        });
}, 50);

function MenuClick(source, animate) {

        if ($('.current_tab').attr('id') != $(source).attr('id')) {
                $('.current_tab').removeClass("current_tab");
                $(source).addClass("current_tab");

                ChangeContent(source, animate);
        }
}

// changes content to page specified by source
function ChangeContent(source, animate) {
        var sourceFile = $(source).attr('id').replace('menu_', '');
        sourceFile = sourceFile.replace('..', '') + '.html';

        // animate the transitions
        if (animate) {
                $('#content').fadeOut(500, function(){
                        $.get('content/' + sourceFile, function(data) {
                                $('#content').html(data); 
                        });
                });
                $('#content').fadeIn(500);
        }
        else {
                $.get('content/' + sourceFile, function(data) {
                        $('#content').html(data); 
                });
        }
}

