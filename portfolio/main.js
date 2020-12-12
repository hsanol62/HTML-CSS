// $(documnet).ready(function() {
    // var $searchBtn = $('.shopping_nav .search_btn') ,
    // $searchForm = $('header form');

    // $searchBtn.click(function(){
    //     $searchForm.toggleClass('active');
    // });

//         $('.main_slides ul').bxSlider();

// });
// 적용 안됌

$(document).ready(function(){
    $('.main_slides ul').bxSlider({
        controls:false,
        // 넘기는 버튼 없앰
        mode:'vertical'
  });
});
