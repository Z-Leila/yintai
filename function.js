// 一.
// 需求；处理getclass的兼容性问题
// 处理在一个对象下去找对应的元素

// 先传参数
function getClass(classname,obj){
	// 传需要找的类名
	// 参数;获取的类名
	// 不传默认执行document
	var obj=obj||document;
	 // 如果没有传入obj，默认使用document对象输出
	if(obj.getElementsByClassName){
		// 如果有getElementsByClass属性的话就直接返回类名
		return obj.getElementsByClassName(classname);
		// 否则执行else
	}else{
		var arr=[];
		// 定义一个空数组存储需要的类名
		var alls=obj.getElementsByTagName('*');
		// 通过*选择所有的标签
		for(var i=0;i<alls.length;i++){
			// 检查如果满足将其元素存到数组中
			if(check(alls[i].className,classname)){
				arr.push(alls[i]);
				// 调用check函数，如果下标为i的元素的类名等于实参，将这个类名加在数组arr里面
			}
		}
		return arr;
	}
}
// 检测传入的是否为符合条件的
 function check(search,match){
 	// 先转化成数组
	var brr=search.split(" ");
	// 将找到的所有的标签的类名用空格分割成数组
	// 循环看是否有满足条件的classname
	for(var i=0;i<brr.length;i++){
		// 若有的话,返回执行添加入数组
		if(brr[i]==match){
			return true;
		}else{
			return false;
		}
	}
}


// 二.
//1.获取值传一个对象就返回一个内容值;
// 2.传值设置，不传(undefined)获取值;
//获取内容的兼容


function getInner(obj,value){
	// 如果兼容的话执行
	if(obj.textContent){
		// 如果obj等于undefined
		if(value==undefined){
			// 返回obj
			return obj.textContent;
			// 如果检测到有传入的值传出设置值
		}else{
			obj.textContent=value;
		}
		// 如果不兼容执行
	}else{
		// 未设置的话返回obj值
		if(value==undefined){
			return obj.innerText;
			// 否则传出设置的值
		}else{
			obj.innerText=value;
		}
	}
}


// 获取嵌入式样式和外部样式的属性
function getStyle(obj,style){
	//如果是IE6 获取IE的样式属性
	if(obj.currentStyle){
		return obj.currentStyle[style];
		// 否则的话，在现代浏览器执行else获取样式
	}else{
		return  getComputedStyle(obj,null)[style];
	}
}


// $("#one")
// $(".one")
// $("div")
//$(function(){	
// })
// "#one" ".one" "div"

// 需求分析$("#one")获取ID;$(".one")获取类名;$("div")获取标签名
//在某一个范围内取到我要的元素某个div某个对象的子元素



function $(search,obj){
	var obj=obj||document;
	if(typeof(search)=="string"){
		if(search.charAt(0)=="#"){
		return document.getElementById(search.substr(1));
		// 从第一个开始截取
	}else if(search.charAt(0)=="."){
		return getClass(search.substr(1),obj);
	}else{
		return obj.getElementsByTagName(search);
		// 可用document但是为了实现在某个范围内查找用obj
	}

	}else if(typeof(search)=="function"){
		window.onload=function(){
			search();
		}
	}
	

}








//获得子节点 type
//获得元素节点 a
//获得元素节点+或文本节点 b
//type："a" 只要元素节点;
//      "b" 元素节点+文本节点
function getChilds(obj,type){
	// type初始化
	var type=type||"a";
	// 创建所有子节点的集合
	var all=obj.childNodes;
	// 定义空数组
	var arr=[];
	// 循环拿到所有的子节点
	for(i=0;i<all.length;i++){
		// 如果子节点等于元素节点
		if(type=="a"){			
			if(all[i].nodeType==1){
				// 加入数组
				arr.push(all[i]);
			}
			// 如果子节点等于元素节点+文本节点

		}else if(type=="b"){
			// 节点值用空代替空格
			if(all[i].nodeType==1||(all[i].nodeType==3&&all[i].nodeValue.replace(/^\s*|\s*$/g,""))){
				
				if(all[i].nodeType==3){
					all[i].nodeValue=all[i].nodeValue.replace(/^\s*|\s*$/g,"");
				  }
				  // 符合加入数组
				  arr.push(all[i]);
				}

			}
		}
		return arr;
		// 返回数组
}

// 输出父元素里面的第一个子元素和最后一个子元素 
function getFirst(obj){
	return getChilds(obj)[0];
}
function getLast(obj){

	return getChilds(obj)[getChilds(obj).length-1];
}



//寻找下一个兄弟节点
function getNext(obj,type){
	var next=obj.nextSibling;
	// 如果没有下一个兄弟节点则返回false
	var type=type||"a";
	if (type=="a") {
		return false;
	}else if(type=="b"){
	while((next.nodeType==3&&!next.nodeType.replace(/^\s*|\s*$/g,""))||next.nodeType==8){
		next=next.nextSibling;
		if(next==null){
			return false;
		   }

		}

	}
	return next;
}





//寻找上一个兄弟节点
function getPrevious(obj,type){
	var previous=obj.previousSibling;
	if (previous==null) {
		return false;
	}
	while(previous.nodeType==3||previous.nodeType==8){
		previous=previous.previousSibling;
		if(previous==null){
			return false;

		}

	}
	return previous;
}







// 用时insertBefore(div,obj2)

function insertBefore(obj,before){
	var parent=before.parentNode;
	parent.insertBefore(obj,before);

}
function insertAfter(obj,after){
	var next=getNext(after,"b");
	var parent=before.parentNode;
	if(next){
		insertBefore(obj,next);
}else{
	parent.appendChild(obj);
   }
}



// 添加事件和删除事件函数


function addEvent(obj,event,fun){
	//如果是IE6 获取添加事件和删除事件
	if(obj.attachEvent){	
	    obj.attachEvent("on"+event,fun);
	//在现代浏览器执行
	}else if(obj.addEventListener){
	   obj.addEventListener(event,fun,false);
	}
}

function removeEvent(obj,event,fun){
	//如果是IE6 获取添加事件和删除事件
	if(obj.detachEvent){	
	    obj.detachEvent("on"+event,fun);
	// 在现代浏览器执行
	}else if(obj.removeEventListener){
	   obj.removeEventListener(event,fun,false);
	}
}



//关于鼠标滚轮的滚轮事件的兼容性
function mouseWheel(obj,funUp,funDown){
	if(obj.attachEvent){
		obj.attachEvent("onmousewheel",scroll);                //IE
	}else if(obj.addEventListener){
		obj.addEventListener("DOMMouseScroll",scroll,false);  //火狐
		obj.addEventListener("mousewheel",scroll,false);      //谷歌
	}
	function scroll(e){
		var ev=e||window.event;
		var d=ev.wheelDelta||ev.detail;   //d=方向（上/下)

         //阻止浏览器默认动作
        // if(obj.attachEvent){
        // 	ev.returnValue=false;
        // }else{
        // 	ev.preventDefault();
        // }

		if(d==-120||d==3){
			if(funDown){
				funDown();
			}
		}else if(d==120||d==-3){
			if(funUp){
				funUp();
			}
		}
	}
}






