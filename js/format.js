
// on document load...
$(document).ready(function(){

        ChangeContent($('#menu_home'));

        $('.menu_link').click(function(){
                ChangeContent(this);
        });
      
});

// changes content to page specified by source
function ChangeContent(source) {
        var sourceFile = $(source).attr('id').replace('menu_', '');
        sourceFile = sourceFile.replace('..', '') + '.html';
        $.get('content/' + sourceFile, function(data) {
                $('#content').html(data); 
        });
}

 // Get the modal
 var modal = document.getElementById("myModal");
 var modalImg = document.getElementById("img01");
 var captionText = document.getElementById("caption");
 function activateModal(el){
         modalImg.style.paddingTop = (el.parentElement.parentElement.offsetTop) + "px";
         modal.style.display = "block";
         modalImg.src = el.src;
         captionText.innerHTML = el.alt;
 }

 // Get the <span> element that closes the modal
 var span = document.getElementsByClassName("close")[0];

 // When the user clicks on <span> (x), close the modal
 modal.onclick = function() { 
         modal.style.display = "none";
 }


