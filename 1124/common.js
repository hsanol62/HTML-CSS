$(function() {
    $(".sub").hide();
// 메뉴바 숨김
    $(".main > li").mouseover(function() {
        $(".sub", this).show();
        $(".sub").css("background-color", "rgba(255, 255, 255, 0.8)");
        $(".dd", this).addClass("add");
    });
// mouseover지정된 태그 요소(혹은 자신)는 물론이며, 자식 요소가 있다면 해당 자식요소의 영역까지 포함됨
// 마우스 올라가면 보여준다
    $(".main > li").mouseout(function() {
        $(".sub", this).hide();
        $(".sub").css("background-color", "");
        $(".dd", this).addClass("add");
    });
    // 마우스 나가면 숨김
// addClass()로 선택한 요소에 클래스 값을 추가 dd에 추가
    
});