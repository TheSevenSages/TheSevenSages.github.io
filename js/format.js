// variables
var currMenuOption;

// on document load...
$(document).ready(function(){

        MenuClick($('#menu_home'));
        $('#menu_home').addClass("current_tab");

        // switches content and activates transition
        $('.menu_link').click(function(){
                MenuClick(this);
        });

        // opens the modal
        $('.portfolio_img').click(function(){
                ActivateModal(this);
        });

        // closes the modal
        $('#myModal').click(function(){
                $(this).css("display", "none");
        });
      
});

// exectutes every 50 milliseconds
var i = setInterval(function() {
        // updates the page height
        // var newHeight = $('#content').contentWindow.document.body.scrollHeight + 300 + "px";
        // $('#page').css("height", newHeight);

        // updates the menu indicator's position
        $('#menu_indicator').show();
        $('#menu_indicator').css({
                "width" : $('.current_tab').outerWidth() + 'px',
                "top"   : ($('.current_tab').offset().top + 7) + 'px',
                "left"  : ($('.current_tab').offset().left - $('#menu').offset().left) + 'px'
        });
}, 50);

function MenuClick(source) {
        $('.current_tab').removeClass("current_tab");
        $(source).addClass("current_tab");
        ChangeContent(source);
}

// changes content to page specified by source
function ChangeContent(source) {
        var sourceFile = $(source).attr('id').replace('menu_', '');
        sourceFile = sourceFile.replace('..', '') + '.html';
        $.get('content/' + sourceFile, function(data) {
                $('#content').html(data); 
        });
}

 // activates the modal
 function ActivateModal(img){
        $('#img01').css("paddingTop", (img.parentElement.parentElement.offsetTop) + "px");
        $('#img01').attr("src", img.src);
        $('#myModal').css("display", "block");
        $('#caption').text(img.alt);
 }


