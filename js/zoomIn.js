// Zoom in/out clothing img
$('.image').on('mousemove', function(event) {
    //position of the image on the page
    var img_pos = event.target.getBoundingClientRect();
  
    // Calculate mouse pos. in both x and y directions
    var mouseX = event.clientX - img_pos.left;
    var mouseY = event.clientY - img_pos.top;
  
    //Calculate mouse pos. in both x and y directions in percentage
    var xPercent = (mouseX / img_pos.width) * 100;
    var yPercent = (mouseY / img_pos.height) * 100;
  
    // used `transform-origin` property on the image to center the zoom effect on the mouse position
    
    $(this).css('transform-origin', (xPercent+'% ' + yPercent+ '%') );
    
  
  });
  
  //  on mouse hover
  $('.image').on('mouseenter', function() {
    $(this).addClass('zoom-in');
    $(this).removeClass('zoom');
  });
  
  // on mouse out
  $('.image').on('mouseleave', function() {
    $(this).addClass('zoom');
    $(this).removeClass('zoom-in');
  });