$(document).ready(function()
{
    $('#btnLoad1').click( function(){
        // 클릭했을떄
        $.ajax({
            url:'ajax-stuinfo.xml',
            // 불러올 문서 요청하고자하는 url
            type: 'get',
            //  서버로 전송하는 전송방식
            dataType: 'xml',
            // 데이터 타입 서버에 전송한 데이터
            timeout: 10000,
            // 응답제한시간
            success: function(xmlData){
                var tagList ="";
                $(xmlData).find('student').each(function(){
                    tagList += "<li>" + $(this).find('gradepoint').text()+"</li>";
                    // xmlData 객체내에서 <gradepoint>태그를 찾고 text로 변환 -> <li>로

                
                });
                $('#listArea').empty();//리스트 뷰를 비움
                $('#listArea').append(tagList);
                //리스트뷰에 tagList에 저장된 부분 리스트를 추가
                $('#listArea').listview('refresh');//리스트뷰를 새로고침

            },
            error: function(){
                $("#listArea").html("<p>Error!!</p>");
            }
            // 에러일때 띄울
            
        })
    })

})