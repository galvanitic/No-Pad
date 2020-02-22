// Wait for the document to load before jQuery starts
$(document).ready(function() {

  // Active Class Handler
  function handleActiveClass(event) {
    
    // Handle Mobile Menu Bar
    $(".menu-icon").click(function(event) {

      if ($(this).hasClass("not-active")) {
        $(this).removeClass("not-active");
        $(this).addClass("active");

        $(".grid-container").css("margin-left", "250px");
        $(".sidenav").css("width", "250px");
      } else if ($(this).hasClass("active")) {
        $(this).removeClass("active");
        $(this).addClass("not-active");

        $(".grid-container").css("margin-left", "0");
        $(".sidenav").css("width", "0px");
      }
    })

  }
  handleActiveClass(event);

  // Fix sidenav bug where it doesn't reopen after resizing up
  $(window).on('resize', function() {

    // Close sidenav when mobile view is resized
    if($("body").width() < 700) {
      $(".grid-container").css("margin-left", "0");
      $(".sidenav").css("width", "0");
    }

    // Open sidenav when browser is resized to laptop view
    if(($("body").width() > 700)) {
      $(".grid-container").css("margin-left", "250px");
      $(".sidenav").css("width", "250px");

      $(".menu-icon").removeClass("active");
      $(".menu-icon").addClass("not-active");
    }
  })

});