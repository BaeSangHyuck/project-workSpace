// 정보, 스토리 클릭시 변하게 만들기 (userview , userview2)

//작성된 스토리가 없으면 기본적으로 .storyNone 보여주기

$(".nav").each(function (i,nav) {
    $(nav).on("click",function () {
        $(".activePage").hide();
        $($(".activePage").get(i)).show();
        $(".nav").removeClass("active");
        $(nav).addClass("active");
    })
})

$(".userFollowerImgs").each(function (i,img) {
    $(img).on("mouseover",function () {
        $($(".hoverName").get(i)).show();
    })
    $(img).on("mouseout",function () {
        $($(".hoverName").get(i)).hide();
    })
})