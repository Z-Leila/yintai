$(function(){
	// 头部begin
	var my=$(".myhome")[0];
	var myyt=$(".hidden-home")[0];
	my.onmouseover=function(){
		// animate(myyt,{height:214},100);
		myyt.style.display="block";
	}
	myyt.onmouseover=function(){
		// animate(myyt,{height:214},100);
		myyt.style.display="block";
	}
	myyt.onmouseout=function(){
		myyt.style.display="none";
	}

	var weitop=$(".log-wechat")[0];
	var wei=$(".hidden-wechat")[0];
	weitop.onmouseover=function(){
		wei.style.display="block";
	}
	weitop.onmouseout=function(){
		wei.style.display="none";
	}
	wei.onmouseover=function(){
		wei.style.display="block";
	}
	wei.onmouseout=function(){
		wei.style.display="none";
	}

	var logphone=$(".log-phone")[0];
	var hiddenph=$(".hidden-phone")[0];
	logphone.onmouseover=function(){
		hiddenph.style.display="block";
	}
	hiddenph.onmouseover=function(){
		hiddenph.style.display="block";
	}
	hiddenph.onmouseout=function(){
		hiddenph.style.display="none";
	}
	// 头部over

    // banner轮播
	var box=$(".pannels")[0];
	var imgs=$(".tab_pannel");
	var blocks=$(".s-block");
	var br=$(".br")[0];
	var bl=$(".bl")[0];
	var n=0;
	var next=0;
	var flag=true;
	var t=setInterval(move,2000);
	function move(){
		if(!flag){
			return;
		}
		flag=false;
		next=n+1;
		if(next>=imgs.length){
			next=0;
		}
		for(var i=0;i<imgs.length;i++){
			blocks[i].style.background="#211616";
			
		}
		imgs[n].style.opacity=1;
		imgs[next].style.opacity=0;
		blocks[next].style.background="#E5004F";
		imgs[next].style.zIndex=1;
		animate(imgs[n],{opacity:0},500);
		animate(imgs[next],{opacity:1},500,function(){flag=true});
		n=next;
	}
	function move1(){
		if(!flag){
			return;
		}
		flag=false;
		next=n-1;
		if(next<0){
			next=imgs.length-1;
		}
		for(var i=0;i<imgs.length;i++){
			blocks[i].style.background="#211616";
			imgs[n].style.opacity=1;
			imgs[next].style.opacity=0;
		}
		blocks[next].style.background="#E5004F";
		imgs[next].style.zIndex=1;
		animate(imgs[n],{opacity:0},500);
		animate(imgs[next],{opacity:1},500,function(){flag=true});
		n=next;
	}
	box.onmouseover=function(){
		clearInterval(t);
		br.style.opacity=1;
		bl.style.opacity=1;
	}
	box.onmouseout=function(){
		t=setInterval(move,3000);
		br.style.opacity=0;
		bl.style.opacity=0;
	}
	br.onclick=function(){
		move();
	}
	bl.onclick=function(){
		move1();
	}
	for(var i=0;i<imgs.length;i++){
		blocks[i].index=i;
		blocks[i].onclick=function(){
			for(var j=0;j<blocks.length;j++){
				blocks[j].style.background="#211616";
				imgs[n].style.opacity=1;
			    imgs[this.index].style.opacity=0;
			}
				blocks[this.index].style.background="#e5004f";
				imgs[this.index].style.zIndex=1;
				animate(imgs[n],{opacity:0},500);
				animate(imgs[this.index],{opacity:1},500);
				n=this.index;
	    }
	}

	var menuAll=$(".menu-all");
	var menuhidd=$(".hiddenmenu");
	for(var i=0;i<menuAll.length;i++){
		menuAll[i].index=i;
		menuAll[i].onmouseover=function(){
			menuAll[this.index].style.background="#E5004F";
			menuhidd[this.index].style.display="block"
		}
		menuAll[i].onmouseout=function(){
			menuAll[this.index].style.background="#333";
			menuhidd[this.index].style.display="none"
		}
	}






    // 选项卡
	var cheaps=$(".pr-tu");         //获取分别三屏
    var cheap_per=$(".switch_active");     //每屏标题
    var sanjiao=$(".sanjiao");
    for(var i=0;i<cheap_per.length;i++){
    cheap_per[i].index=i;             //添加标识 
    cheap_per[i].onmouseover=function(){        //将当前的值设为1
    for(var j=0;j<cheaps.length;j++){
    cheaps[j].style.display="none";       //当点击的时候 隐藏所有色块
    sanjiao[j].style.display="none";
    }
    cheaps[this.index].style.display="block";    // 将当前色块显示出来
    sanjiao[this.index].style.display="block";
    }
  }

  
   // 热门推荐

      var rmper=$(".switch-active");      //题目
	  var rm=$(".pro-rm");
	  var jianhao=$(".jianhao");        // 每一屏
	  for(var i=0;i<rmper.length;i++){   
	  	rmper[i].index=i;      
	  	rmper[i].onmouseover=function(){
	  		for(var j=0;j<rm.length;j++){
	  			rm[j].style.display="none";
	  			jianhao[j].style.display="none";

	  		}
	  		rm[this.index].style.display="block"; 
	  		jianhao[this.index].style.display="block";
	  	}
	  }



      // 每层楼中的双下标轮播
	  var hezi=document.querySelectorAll(".fs");
	  for(var i=0;i<hezi.length;i++){
	  	shuang(hezi[i]);
	  }

      // 每层楼节点轮播
	  var slideBox=$(".floorbrand");
	  // console.log(slideBox)
	  for(var i=0;i<slideBox.length;i++){
	  	jiedian(slideBox[i]);
	  }


	
    //封装楼层		
    var flo = $(".flo");
	var li = $(".perf");
	var fudong = $(".float")[0];
	// var dingbu=$(".top");
	var cw = document.documentElement.clientWidth;
	var ch = document.documentElement.clientHeight;
	var bh = fudong.offsetHeight;
	fudong.style.top = (ch - bh) / 2 + "px";
	var flag=true;
	var flag1=true;
	var sign=true;
	for (var i = 0; i < li.length; i++) {
		li[i].index = i;
		li[i].onclick = function() {
			sign=false;
			// var obj = document.documentElement.scrollTop ? document.documentElement : document.body;//处理兼容性问题
			var top = flo[this.index].offsetTop;
			// 将当前点击的楼层距离屏幕的高度赋给滚动距离
			animate(document.documentElement,{scrollTop:top},300,function () {
			    sign=true;
			})
			animate(document.body,{scrollTop:top},300,function () {
			    sign=true;
			})
			for (var i = 0; i < li.length; i++) {
				li[i].style.background = "none"
				li[i].innerHTML="";
			}
			li[this.index].style.background = "#C81623"
			// li[this.index].style.fontSize = 12+"px";
			var aa = li[this.index].getAttribute("aa");
			li[this.index].innerHTML=aa;
			// 获取自定义属性，并将该属性赋值给当前所在框
		}
	}
     

     //滚动条事件
	window.onscroll=function(){
		if(!sign){
			return;
		}
		var obj=document.documentElement.scrollTop ? document.documentElement : document.body;
		for (var i=0; i<flo.length; i++) {
			if (obj.scrollTop>=(flo[i].offsetTop-ch+300)) {
				for (var j=0;j<li.length;j++) {
					li[j].style.background = "none"
				    li[j].innerHTML="";
					// lis[j].innerHTML=j+1+"F";
				}
				
				var aa=li[i].getAttribute("aa");
				li[i].innerHTML=aa;				
				li[i].style.background="#c81623"
			}
		}
		if (obj.scrollTop>=(flo[0].offsetTop-ch)) {//开关控制
			if(flag){
				flag=false;
				animate(fudong,{opacity:1},300,function(){flag1=true;})
			} 
		}else{
				if(flag1) {
				flag1=false;
				animate(fudong,{opacity:0},300,function(){flag=true;})
			} 
		}
	}

    
  //border出现效果

    var border1=$(".speed-top");
	var border2=$(".speed-left");
	var border3=$(".speed-bottom");
	var border4=$(".speed-right");
	var change=$(".huaxian");
	for(var i=0;i<change.length;i++){
		change[i].index=i;
		change[i].onmouseover=function(){
			animate(border1[this.index],{width:change[this.index].offsetWidth},700);
		    animate(border2[this.index],{height:change[this.index].offsetHeight},700);
		    animate(border3[this.index],{width:change[this.index].offsetWidth},700);
		    animate(border4[this.index],{height:change[this.index].offsetHeight},700);
		}
		change[i].onmouseout=function(){
			animate(border1[this.index],{width:0},700);
		    animate(border2[this.index],{height:0},700);
		    animate(border3[this.index],{width:0},700);
		    animate(border4[this.index],{height:0},700);
		}
	}






})


