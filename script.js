$(".whack1").click(function(){
    $(".mole1").hide();
});
    
$(".whack2").click(function(){
    $(".mole-two").hide();
});
    
$(".whack3").click(function(){
    $(".third-mole").hide();
    $(".mole1, .mole-two").show();
});

$(".mole1").click(function(){
    $(".mole1").hide();
});
    
$(".reset").click(function(){
    $(".mole1, .mole-two, .third-mole").show();
});

