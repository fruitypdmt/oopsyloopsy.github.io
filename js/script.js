$(document).ready(function(){
   $('.slider').slick({
      dots:true,
   });
});

window.addEventListener('DOMContentLoaded', function() {
   var nodes = document.querySelectorAll('.language-selector > div.language-selector-title');
   [].forEach.call(nodes, function(el) {
     el.addEventListener('click', function(event) {
       event.preventDefault()
       el.closest(".language-selector").classList.toggle("open")

    
     });
   });
 });

 console.log(document.querySelectorAll('.language-icons'));
