 (function(doc, win) {
            var docEl = doc.documentElement,
                resizeEvt = 'orientationchange' in win ? 'orientationchange' : 'resize',
                recalc = function() {
                    var clientWidth = docEl.clientWidth;
                    if (!clientWidth) return;
                    if (clientWidth > 750) clientWidth = 750;
                    docEl.style.fontSize = 20 * (clientWidth / 320) + 'px';
                };
            win.globalCheckIsInWebview = function() {
                var checkDeviceType = document.cookie.match(new RegExp('(^| )deviceType=([^;]*)(;|$)'));
                if (checkDeviceType && checkDeviceType[2] && (checkDeviceType[2] == '0' || checkDeviceType[2] == '1')) {
                    return true;
                } else {
                    return false;
                }
            };
            recalc();
            if (!doc.addEventListener) return;
            win.addEventListener(resizeEvt, recalc, false);
            doc.addEventListener('DOMContentLoaded', recalc, false);
        })(document, window);


//	课程选择
		$(".work-step1 .level").click(function(){
			$(this).addClass("ckbg").siblings().removeClass("ckbg");
			$(this).parent().siblings().children().removeClass("ckbg");
		});
		
//	点击下一步判断	
		$(".next-btn1").click(function(){
			if($(".work-step1 .level").hasClass("ckbg")){
			$(this).attr("href","step02.html"); 
	      }else{
	      	layer.msg('请选择章节');
	      }
		});
		
		$(".comm-div").click(function(){
			$(this).toggleClass("ckbg-homework");
			var num=$(".ckbg-homework").length;
			if(num>0){
				$(".next-btn2").append('<span>已选择<i class="num-ti"></i>题</span>');
			}else{
				$(".next-btn2 span").remove();
			}
			$(".num-ti").html(num);
		});
		
		$(".next-btn2").click(function(){
			if($(".comm-div").hasClass("ckbg-homework")){
			$(this).attr("href","step03.html"); 
	      }else{
	      	layer.msg('请选择习题');
	      }
		});
		
//	点击发送	
  
	    $(".ti-adres label").click(function(){
	    	$(this).addClass("active").siblings("label").removeClass("active");
	    	if($(this).index()==1){
	    		 $(".sele-time").removeClass("dis");
	    	}else{
	    		$(".sele-time").addClass("dis");
	    	}
	    });
	    
	    $(".students label").click(function(){
	    	$(this).addClass("active").siblings().removeClass("active");
	    });
	    
	    $(".banji").click(function(){
	    	$(this).toggleClass("ck-bj");
	    });
		
		$(".next-btn3").click(function(){
			if($(".banji").hasClass("ck-bj")){
			$(this).attr("href","step04.html"); 
	      }else{
	      	layer.msg('请选择要发送的班级');
	      }
		});
		
//	生成短信	
		$(".next-btn4").click(function(){ 
			layer.open({
			    type: 1,
			    title:["生成信息", 'font-size:0.8rem;'],
			    content: $('.dalog'),
			    shadeClose:true,
			    shade: [0.8, '#393D49'],
			    anim: 0,
			    style: 'position:fixed; bottom:0; left:0; width:100%; height:150px; padding:10px 0; border:none;',
			    btn: ['发送作业'], 
			     yes: function(){
			     	 layer.open({
                                title: "&nbsp;",
                                content: "<p style='text-align: center'>发送成功！</p>",
                                btn: ['确定'],
                                yes: function () {
                                    top.window.location.reload();
                                    layer.closeAll();
                                }
                            });
				  }
			});
		});
