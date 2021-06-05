// gallery filter js start 

$(document).ready(function(){

    $(".filter-button").click(function(){
        var value = $(this).attr('data-filter');
        
        if(value == "all")
        {
            //$('.filter').removeClass('hidden');
            $('.filter').show('1000');
        }
        else
        {
//            $('.filter[filter-item="'+value+'"]').removeClass('hidden');
//            $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
            $(".filter").not('.'+value).hide('3000');
            $('.filter').filter('.'+value).show('3000');
            
        }
    });
    
    if ($(".filter-button").removeClass("active")) {
$(this).removeClass("active");
}
$(this).addClass("active");

});

// gallery filter js end

// massege modal area start
var divs = ["Menu1", "Menu2", "Menu3", "Menu4","home"];
var visibleDivId = null;
function toggleVisibility(divId) {
  if(visibleDivId === divId) {
    //visibleDivId = null;
  } else {
    visibleDivId = divId;
  }
  hideNonVisibleDivs();
}
function hideNonVisibleDivs() {
  var i, divId, div;
  for(i = 0; i < divs.length; i++) {
    divId = divs[i];
    div = document.getElementById(divId);
    if(visibleDivId === divId) {
      div.style.display = "block";
    } else {
      div.style.display = "none";
    }
  }
}
// massege modal area end

// Board of director slider start
$(document).ready(function(){ 
    $(".owl-carousel").owlCarousel({
  loop:true,
  autoplay:true,
  autoplayHoverPause:true,
  autoplayTimeout:3000,
  responsive:{
    0:{
        items:1, 
    },
    600:{
        items:3,
    },
    1000:{
        items:6,
    }
}
});
var owl = $('.explore_slider');
owl.owlCarousel(); 
$('.NextBtn').click(function() {
    owl.trigger('next.owl.carousel');
}) 
$('.PrevBtn').click(function() { 
    owl.trigger('prev.owl.carousel', [300]);
})
  });
  
// Board of director slider end