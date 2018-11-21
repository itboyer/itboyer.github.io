$(function () {
	appendSVG();
	
	function appendSVG(){
		var bottom = '<div style="clear:both;"></div>'
			+'<div class="decor-wrapper">'
			+'		<svg id="header-decor" class="decor bottom" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 100 100" preserveAspectRatio="none">'
			+'			<path class="large left" d="M0 0 L50 50 L0 100" fill="rgba(255,255,255, .1)"></path>'
			+'			<path class="large right" d="M100 0 L50 50 L100 100" fill="rgba(255,255,255, .1)"></path>'
			+'			<path class="medium left" d="M0 100 L50 50 L0 33.3" fill="rgba(255,255,255, .3)"></path>'
			+'			<path class="medium right" d="M100 100 L50 50 L100 33.3" fill="rgba(255,255,255, .3)"></path>'
			+'			<path class="small left" d="M0 100 L50 50 L0 66.6" fill="rgba(255,255,255, .5)"></path>'
			+'			<path class="small right" d="M100 100 L50 50 L100 66.6" fill="rgba(255,255,255, .5)"></path>'
			+'			<path d="M0 99.9 L50 49.9 L100 99.9 L0 99.9" fill="rgba(255,255,255, 1)"></path>'
			+'			<path d="M48 52 L50 49 L52 52 L48 52" fill="rgba(255,255,255, 1)"></path>'
			+'		</svg>'
			+'</div><div style="clear:both;"></div>';
	    var top = '<div style="clear:both;"></div>'
			+'<div class="decor-wrapper">'
			+'		<svg id="header-decor" class="decor top" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 100 100" preserveAspectRatio="none">'
			+'			<path class="large left" d="M0 0 L50 50 L0 100" fill="rgba(255,255,255, .1)"></path>'
            +'			<path class="large right" d="M100 0 L50 50 L100 100" fill="rgba(255,255,255, .1)"></path>'
            +'			<path class="medium left" d="M0 0 L50 50 L0 66.6" fill="rgba(255,255,255, .3)"></path>'
            +'			<path class="medium right" d="M100 0 L50 50 L100 66.6" fill="rgba(255,255,255, .3)"></path>'
            +'			<path class="small left" d="M0 0 L50 50 L0 33.3" fill="rgba(255,255,255, .5)"></path>'
            +'			<path class="small right" d="M100 0 L50 50 L100 33.3" fill="rgba(255,255,255, .5)"></path>'
            +'			<path d="M0 0 L50 50 L100 0 L0 0" fill="rgba(255,255,255, 1)"></path>'
            +'			<path d="M48 48 L50 51 L52 48 L48 48" fill="rgba(255,255,255, 1)"></path>'
			+'		</svg>'
			+'</div><div style="clear:both;"></div>';
		
	  $('#nav').append(bottom);
	  $('footer').prepend(top);
	}
	//点击事件
	var a_idx=0;jQuery(document).ready(function($){$("body").click(function(e){var a=new Array("富强","民主","文明","和谐","自由","平等","公正","法治","爱国","敬业","诚信","友善");var $i=$("<span/>").text(a[a_idx]);a_idx=(a_idx+1)%a.length;var x=e.pageX,y=e.pageY;$i.css({"z-index":999999999999999999999999999999999999999999999999999999999999999999999,"top":y-20,"left":x,"position":"absolute","font-weight":"bold","color":"#ff6651"});$("body").append($i);$i.animate({"top":y-180,"opacity":0},1500,function(){$i.remove();});});});
	//打赏优化
	
	$('.post-meta__tag-list').append(''
					+'<div style="text-align: center;padding:  10px; clear:  both;"><button style=" '
					+'border-width: 0px;             '
					+'margin-bottom: 20px;           '
					+'padding: 8px 25px;             '
					+'font-size: 16px;               '
					+'color: #fff;                   '
					+'background-color: #ea6f5a;     '
					+'border-radius: 5px;            '
					+'touch-action: manipulation;    '
					+'cursor: pointer;               '
					+'background-image: none;        '
					+'border: 1px solid transparent; '
					+'white-space: nowrap;           '
					+'user-select: none;             '
					+'outline: none;                "'
					+' id="dashang">打赏'
				    +'</button>'
					+'<span style="                  '
					+'	display: inherit;            '
					+'	margin:  -10px auto;         '
					+'">如果你觉得我的文章对你有用，或者喜欢我写的文章，欢迎微信支付宝打赏！</span></div>'
					);
	$('#dashang').on("click",function(){
		if(!$(".post-qr-code").is(":visible")){
          $(".post-qr-code").show(); 
          $(this).val("隐藏");
         }else{ 
          $(".post-qr-code").hide(); 
          $(this).val("显示");
		 }
	});
	
})