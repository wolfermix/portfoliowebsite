function stickyScrolling(){
  if(document.body.scrollTop || document.documentElement.scrollTop){
    $("#navContainer").addClass("stickyNav");
    console.log(">100");
  } else {
    $("#navContainer").removeClass("stickyNav");
    console.log("<100");
  }
}
