# near-bottom [![spm version](https://moekit.timo.today/badge/near-bottom)](https://moekit.timo.today/package/near-bottom)

---



## Install

```
$ spm install near-bottom --save
```

## Usage

```js
var nearBottom = require('near-bottom');

nearBottom.whenNear({
	pad:100, // 距离100px时触发
	action:function(done,finish){ // 回调
		// 请求数据
		done(); // 请求到数据后使用done()来解锁请求，因为同时只能请求一次接口，避免数据混乱和过多请求
		finish(); // 当没有数据时，调用finish()来设定完成，后面将不会再执行action,逻辑上finish只执行一次。
	}
});

// 解除绑定
nearBottom.cancelNear();
```
