$("nav ul a").on("click", function() {
    var position = $(this).parent().position();
    var width = $(this).width();
    $("nav ul .slide1").css({opacity: 1, left: +position.left, width: width});

});
$("nav ul a").on("mouseover", function() {
    var position = $(this).parent().position();
    var width = $(this).parent().width();
    $("nav ul .slide2").css({opacity: 1, left: +position.left, width: width}).addClass("squeeze");

});

$("nav ul a").on("mouseout", function() {
    $("nav ul .slide2").css({opacity: 0}).removeClass("squeeze");
});

var currentWidth = $("nav ul li:nth-of-type(3) a").parent().width();
var current = $("li:nth-of-type(3) a").position();
$("nav ul .slide1").css({left: +current.left, width: currentWidth});
