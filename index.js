var doc = document.documentElement;
var win = window;
var isLock = false;
var isFinish = false;
// util
var isNear = exports.isNear = function(pad) {
	pad = pad || 300;
	return win.pageYOffset + win.innerHeight >= doc.scrollHeight - pad;
};

var done = function() {
	isLock = false;
};

var finish = function() {
	if (!isFinish) {
		isFinish = true;
	}
};

exports.whenNear = function(option) {
	var pad = option.pad || 300;
	var callback = option.action;
	window.addEventListener("scroll", function() {
		if (!isLock && isNear(pad) && !isFinish) {
			isLock = true;
			callback(done, finish);
		} else {
			// nothing
		}
	});
};