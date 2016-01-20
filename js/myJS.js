$(document).ready(function () {
    $(".main>a").click(function () {
        var ulNode = $(this).next("ul");
        //if(ulNode.css("display")=="none"){
        //    ulNode.css("display","block");
        //}else{
        //    ulNode.css("display","none");
        //}
        //ulNode.show();
        //ulNode.hide();
        //ulNode.toggle("normal");//数字，slow，normal(500)，fast
        //ulNode.slideDown();
        //ulNode.slideUp();
        ulNode.slideToggle();
        changeImg($(this));
    });
    $(".hmain").hover(function () {
        $(this).children("ul").slideDown();
        changeImg($(this).children("a"));
    }, function () {
        $(this).children("ul").slideUp();
        changeImg($(this).children("a"));
    });
});
//更换图标
function changeImg(mainNode) {
    if (mainNode) {
        if (mainNode.css("background-image").indexOf("ak3.png") >= 0) {
            mainNode.css("background-image","url('res/img/ajz.png')");
        } else {
            mainNode.css("background-image","url('res/img/ak3.png')");
        }
    }
}