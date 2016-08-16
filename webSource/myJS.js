$(document).ready(function(){
    $("#btn").click(function(){
       $(".titleBar").toggleClass("titleBar-toggle");
    });
    /* 顏色變換 */
    window.onscroll = function() {myFunction()};
    function myFunction() {
        var navbar = document.getElementById("myNavbar");
        var title1 = document.getElementById("myTitle1");
        var title2 = document.getElementById("myTitle2");
        var Drop1 = document.getElementById("myDrop1");
        var Drop2 = document.getElementById("myDrop2");
        var Drop3 = document.getElementById("myDrop3");
        var Drop4 = document.getElementById("myDrop4");
        if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
            navbar.className = "nav-title" + " nav-title-v1";
            title1.className = "title-span" + " title-span-v1";
            title2.className = "title-span" + " title-span-v1";
            Drop1.className = "dropdown-content" + " dropdown-content-v1";
            Drop2.className = "dropdown-content" + " dropdown-content-v1";
            Drop3.className = "dropdown-content" + " dropdown-content-v1";
            Drop4.className = "dropdown-content" + " dropdown-content-v1";
        }else {
            navbar.className = navbar.className.replace(" nav-title-v1","");
            title1.className = title1.className.replace(" title-span-v1","");
            title2.className = title2.className.replace(" title-span-v1","");
            Drop1.className = Drop1.className.replace(" dropdown-content-v1","");
            Drop2.className = Drop2.className.replace(" dropdown-content-v1","");
            Drop3.className = Drop3.className.replace(" dropdown-content-v1","");
            Drop4.className = Drop4.className.replace(" dropdown-content-v1","");
        }
    }
    /* 顏色變換 end */
    /* 圖片輪播 */
    $("slick-box").slick();
    /* 圖片輪播 end */
});