function remove(){
	var sj =document.getElementById("sj");
	var mask =document.getElementById("mask");
	var sidebar =document.getElementById("sidebar");
	
	sj.onclick=function(){
		if(mask.style.display=="none"){
			mask.style.display="block";
			sidebar.style.right=0;
		}
		else{
			mask.style.display="none";
			sidebar.style.right=sidebar.style.width;
		}
		
	}


}


function remove2(){
	
	var mask =document.getElementById("mask");
	var sidebar =document.getElementById("sidebar");
	
	mask.onclick=function(){
		if(mask.style.display=="none"){
			mask.style.display="block";
			sidebar.style.right=0;
		}
		else{
			mask.style.display="none";
			sidebar.style.right=sidebar.style.width;
		}
		
	}


}



//onload对应一次性多加载函数数量
	function addLoadEvent(func){
		var oldload = window.onload;
		if(typeof window.onload != 'function'){
			window.onload = func;
			//直接加载该函数
		}
		else{
			window.onload = function(){
				//将该函数放置加载队列的末尾
				oldload();
				func();
				}
			}
	
	}
	
addLoadEvent(remove);

addLoadEvent(remove2);



