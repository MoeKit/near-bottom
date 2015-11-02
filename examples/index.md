# Demo

---

## Normal usage

> 正常的需求逻辑是这样：
+ 默认加载首页数据
+ 滚动到底部，显示加载状态并请求接口,接口请求成功后`append`数据，并隐藏加载状态。
+ 当没有更多数据时，加载状态变成没有更多数据的状态。


````html
<div style="width:100%;height:1500px;background-color:yellow;text-align:center;">占位区域</div>
<div id="content"></div>
<div id="loading" style="display:none;width:100%;height:40px;background-color:red;color:#fff;text-align:center;line-height:40px;">加载中</div>
````

````javascript
var nearBottom = require('near-bottom');
var $ = require('zepto');
var number = 0; // 场景模拟，假设number到10时数据加载完了。

nearBottom.whenNear({
	pad:100,
	action:function(done,finish){console.log('bottom')
		// 显示加载状态
		$('#loading').show();
		
		setTimeout(function(){
			// 插入一些内容
			$('#content').append('<div style="width:100%;height:50px;background-color:blue;color:#fff;text-align:center;">'+number+'</div>')
			// 隐藏loading状态
			$('#loading').hide();
			done(); // 调用done来解锁请求，再次滚动到底部时调用, setTimeout模拟异步请求

			// 检测内容是不是都加载完了
			number++;
			if(number===10){
				finish(); // 调用finish来表示已经没有数据可以加载, 逻辑上只能调用一次哦
				$('#loading').text('没有更多内容啦').show();
			}
		},500); 
	}
});
````

<button type="button" id="JS_stop">解绑加载</button>

````javascript
var nearBottom = require('near-bottom');
$("#JS_stop").on("click", function(){
	nearBottom.cancelNear();
	alert("解绑成功");
});
````