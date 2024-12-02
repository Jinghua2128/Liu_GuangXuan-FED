//navbar
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

//background
const background = document.querySelector(".background");
document.addEventListener("scroll", () => {
    const scrollY = window.scrollY;
    if (scrollY !== 0) {
        background.style.backgroundPosition = `calc(50% + ${scrollY}px) center`; // Use backticks here
    } else {
        background.style.backgroundPosition = '';
    }
}); 

//blogs
var swiper = new Swiper('.blog-slider', {
    spaceBetween: 30,
    effect: 'fade',
    loop: true,
    mousewheel: {
        invert: false,
    },
    pagination: {
        el: '.blog-slider_pagination',
        clickable: true,
    },
});

// Highlight items animation
const highlightItems = document.querySelectorAll('.highlight-item');

const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

highlightItems.forEach(item => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(20px)';
    item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(item);
});

document.querySelectorAll(".box").forEach((box) => {
    box.addEventListener("mousemove", (e) => {
        let x = e.pagex - box.offsetleft;
        let y = e.pageY - box.offsetTop;
        
        document.querySelectorAll("span").forEach((ele) => {
            ele.style.left = x + 'px';
            ele.style.top = y + 'px';
        })
    })
});