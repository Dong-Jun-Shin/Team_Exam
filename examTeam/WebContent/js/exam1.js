/*
 * js 파일에 작성시, 잘 모르겠으면 아래를 참고해주세요.
 * 그래도 모르겠다면 html에서 작성된 수업예제를 참고해서 만들어주세요. 
 */

$(function(){
	/* 버튼5 메소드 (동준) */
	$("#imgBtn").one("click", function(){
		var img = $("<img>").attr({
			"alt": "bono1.jpg",
			"src": "../image/bono1.jpg",
			"id" : "imgView",
			"width": "300px",
			"height": "300px"
		});
		
		$(".box").append(img);
		$("#imgView").hide(1);
		$("#imgView").show(1000);
		
		setInterval(changeImg, 6000);
	});
	
	//이미지 변경하는 함수
	var index=0;
	function changeImg(){
		
		if(index < 2)
			index++;
		else
			index = 0;
		
		$("#imgView").fadeOut(1000).delay(1500);
		$("#imgView").attr("src", "../image/bono" + (index+1) + ".jpg");
		$("#imgView").delay(1500).fadeIn(1000);
	}
	/* 버튼5 메소드 종료(동준) */
});


