
// on document load...
$(document).ready(function(){

        $('.menu_link').click(function(){
                ChangeContent(this);
        });
      
});

// changes content to page specified by source
function ChangeContent(source) {
        var sourceFile = $(source).attr('id').replace('menu_', '');
        sourceFile = sourceFile.replace('..', '') + '.html';
        $.get('content/' + sourceFile, function(data) {
                //alert(data);
                $('#content').html(data); 
        });
        //alert(sourceFile);
}


