// variables
var currMenuOption;

// on document load...
$(document).ready(function(){

        ChangeContent($('#menu_home'));

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

        // Automatically sets the indicator to the "home" section
        $('#menu_indicator').css({
                "width" : currMenuOption.offsetWidth + 'px',
                "top"   : (currMenuOption.offsetTop + 7) + 'px',
                "left"  : (currMenuOption.offsetLeft - currMenuOption.parentElement.offsetLeft) + 'px'
        });
      
});

// exectutes every 50 milliseconds
var i = setInterval(function() {
        // updates the page height
        var newHeight = $('#content').contentWindow.document.body.scrollHeight + 300 + "px";
        $('#page').css("height", newHeight);

        // updates the menu indicator's position
        $('#menu_indicator').css({
                "width" : currMenuOption.offsetWidth + 'px',
                "top"   : (currMenuOption.offsetTop + 7) + 'px',
                "left"  : (currMenuOption.offsetLeft - currMenuOption.parentElement.offsetLeft) + 'px'
        });
}, 50);

function MenuClick(source) {
        currMenuOption = source;
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


