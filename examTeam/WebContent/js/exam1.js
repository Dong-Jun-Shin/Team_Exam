/*
 * js 파일에 작성시, 잘 모르겠으면 아래를 참고해주세요.
 * 그래도 모르겠다면 html에서 작성된 수업예제를 참고해서 만들어주세요. 
 */

$(function(){
	var sum = 0;
	// 횟수 출력 - 메소드 시작 (예리)
	$('fieldset > div:nth-child(4)').click(function(){
		var h3 = $('<h3>');
		sum += 1;
		h3.append(sum);
		
		$('fieldset > div:nth-child(4)').append(h3);
	});
	// 횟수 출력 - 메소드 끝
});