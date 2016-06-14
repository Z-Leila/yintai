	function shuang(obj){
		var pic=$(".pic",obj);
		var circles=$(".circle",obj);
		var dr=$(".fr",obj)[0];
		var dl=$(".fl",obj)[0];
		var w=pic[0].offsetWidth;
		var n=0;
		var next=0;
		var flag=true;
		var t=setInterval(dong,2000);
		function dong(){
			if(!flag){
				return;
			}
			flag=false;
			next=n+1;
			if(next>=pic.length){
					next=0;
				}
			for(var i=0;i<pic.length;i++){
				circles[i].style.background="#6E6E6E";
			}
			circles[next].style.background="#D90A51";
			pic[next].style.left=w+"px";
			pic[next].style.zIndex=1;
			animate(pic[n],{left:-w},300);
			animate(pic[next],{left:0},300,function(){flag=true});
			n=next;
		}
		function dong1(){
			if(!flag){
				return;
			}
			flag=false;
			next=n-1;
			if(next<0){
					next=pic.length-1;
				}
			for(var i=0;i<pic.length;i++){
				circles[i].style.background="#6E6E6E";
			}
			circles[next].style.background="#D90A51";
			pic[next].style.left=-w+"px";
			pic[next].style.zIndex=1;
			animate(pic[n],{left:w},300);
			animate(pic[next],{left:0},300,function(){flag=true});
			n=next;
		}
		obj.onmouseover=function(){
			 clearInterval(t);
			 animate(dl,{width:30},100)
			 animate(dr,{width:30},100)
		}
		obj.onmouseout=function(){
			 t=setInterval(dong,2000);
			 animate(dl,{width:0},10)
			 animate(dr,{width:0},10)
		}
		dr.onclick=function(){
			dong();
		}
		dl.onclick=function(){
			dong1();
		}
		for(var i=0;i<pic.length;i++){
			circles[i].index=i;
			circles[i].onclick=function(){
				if(this.index>n){
					for(var j=0;j<pic.length;j++){
						circles[j].style.background="#6E6E6E";
					}
					circles[this.index].style.background="#D90A51";
					pic[this.index].style.left=w+"px";
					pic[this.index].zIndex=1;
					animate(pic[n],{left:-w},300);
					animate(pic[this.index],{left:0},300);
					n=this.index;
				}else if(this.index<n){
					for(var j=0;j<pic.length;j++){
						circles[j].style.background="#6E6E6E";
					}
					circles[this.index].style.background="#D90A51";
					pic[this.index].style.left=-w+"px";
					pic[this.index].zIndex=1;
					animate(pic[n],{left:w},300);
					animate(pic[this.index],{left:0},300);
					n=this.index;
				}else{
					return;
				}
			}
		}
	}




	function jiedian(obj){
		var hehe=$(".brandslide",obj)[0];
		var xr=$(".next",obj)[0]; 
		var xl=$(".prev",obj)[0];
		var width=$(".perslide")[0].offsetWidth;
		// console.log(width);
		var flag1=true;
		function move(){
			if(!flag1){
				return;
			}
			flag1=false;
			var first=getFirst(hehe);
			animate(hehe,{left:-width},500,function(){
				hehe.appendChild(first);
				hehe.style.left=0;
				flag1=true;
			})
		}
		function move1(){
			if(!flag1){
				return;
			}
			flag1=false;
			var first=getFirst(hehe);
			var last=getLast(hehe);
			insertBefore(last,first);
			hehe.style.left=-width+"px";
			animate(hehe,{left:0},500,function(){
				flag1=true;
			});
		}
		xr.onclick=function(){
			move1();
		}
		xl.onclick=function(){
			move();
		}
	}