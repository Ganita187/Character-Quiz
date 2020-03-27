  
 
 
$(".btn1").click(function() {
   
  var nature= $(".nature").val();
    var word = $(".word").val();
    
$(".btn2").show();

if (nature==="fire" && word==="stubborn") {
        $(".answer").text("phoenix");
        $(".img1").show();
         $("h1,h3,.word,.nature,.btn1").hide();
        
       
} else if (nature==="water" && word ==="curious"){
       $(".answer").text("Dolphin");
       $(".img2").show();
         $("h1,h3,.word,.nature,.btn1").hide();
        
       
} else if (nature==="earth" && word ==="strong"){
       $(".answer").text("bear");
       $(".img3").show();
         $("h1,h3,.word,.nature,.btn1").hide();
        
       
} else if (nature==="air" && word ==="adventurous"){
       $(".answer").text("eagle");
       $(".img4").show();
         $("h1,h3,.word,.nature,.btn1").hide();
        

} else if (nature==="nature" && word==="free spirited"){             
      $(".answer").text("butterfly");
      $(".img5").show();
         $("h1,h3,.word,.nature,.btn1").hide();

} else if(nature==="water"){
 $(".answer").text("whale");
 $(".img6").show();
 $("h1,h3,.word,.nature,.btn1").hide();

} else if (word==="lazy"){
  $(".answer").text("sloth");
   $(".img7").show();
   $("h1,h3,.word,.nature,.btn1").hide();
}else{
     $(".answer").text("Wolf");
     $(".img8").show();
         $("h1,h3,.word,.nature,.btn1").hide();
        
}
});

$(".btn2").click(function() {
      $("h1,h3,.word,.nature,.btn1").show();
        $("img,.answer,.btn2").hide();
});

