
  $(document).ready(function(){
    $('.mini_menu').append('<ul></ul>');    
  $('h3').each(function(){
  var thisText = $(this).text();
  var anchorText = thisText.replace(/ /g, "-");
  var anchorLink = '<a name="' + anchorText + '"></a>';
  var anchorText = '<li><a href="#' + anchorText + '">' + thisText + '</a></li>'; 
  $(this).before(anchorLink);
 $(anchorText).appendTo('.mini_menu ul');
  });
});