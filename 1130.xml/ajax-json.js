$(document).ready(function()
{
    $('#btnLoad2').click( function(){
        $.getJSON('ajax-stuinfo.json',function(jsonData){
            /* 파일 불러옴 */
            var tagList ="";
            /* 태그리스트를 비움 */
            $.each(jsonData.stuinfo, function(){
                /* jsonData의 stuinfo의 배열의 값을 갖고옴 */
                // $.each() 메서드는 object 와 배열 모두에서 사용할 수 있는 일반적인 반복 함수입니다.

// 배열과 length 속성을 갖는 배열과 유사 배열 객체들을 index를 기준으로 반복할 수 있습니다.
// 첫 번째 매개변수로 배열이나 객체를 받습니다.
// 그리고 두번째 매개변수로 콜백함수를 받으며 콜백함수의 인자로는 인덱스와 값을 인자로 갖습니다.




                tagList += "<li>" +this.schoolyear +"</li>";
                /* 태그리스트 =  schoolyear 의 li 값 띄움*/

            });
            $('#listArea').empty();
            /* 비었을떄 */
            $('#listArea').append(tagList);
            /* tagList 를 추가  */
            $('#listArea').listview('refresh');
            /*갱신 */
        });
    });
});
        
//JSON(javascript object Notation)
//데이터 교환을 위한 형식으로 '미니 XML'이라 불리움
// 사람이 직관적으로 이해하기 쉽고 파싱하고 생성하기 쉬움
// 대부분의 언어에서 JSON 을 사용할 수 있고 XML보다 가볍고 빨라 효율적
// JSON 명세 방법
// 자바스크립트에서 객체를 표현하는 방법과 비슷