function bgFadingScrolling(){
  try{
    var entry1_offset = $("#text-entry-aboutme").offset().top - $("#navContainer").height();
    var entry2_offset = $("#text-entry-mobiledev").offset().top + $("#navContainer").height();

    //console.log($("#navContainer").height());

    if((document.body.scrollTop > entry1_offset && document.body.scrollTop < entry2_offset) ||
      (document.documentElement.scrollTop > entry1_offset && document.documentElement.scrollTop < entry2_offset)){
      $("#mobile-dev-photo").addClass("onScrollingFaded");
      //console.log(">600");
    } else {
      $("#mobile-dev-photo").removeClass("onScrollingFaded");
      //console.log("<600");
    }
  } catch (error){

  }

}
