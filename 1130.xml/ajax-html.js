$(document).ready(function()
{
    // 문서가 준비되면 매개변수로 넣은 콜백 함수를 실행하라
    $('#btnLoad3').click( function(){
        // 클릭했을때
        $('#listArea').empty();
        // listArea가 비었을떄
        $('#listArea').load('ajax-ssinfo.html li',function(htmlData){
            // ajax-ssinfo.html의 li를 불러온다.
            $('#listArea').listview('refresh');
            // 갱신

        });
    });
});