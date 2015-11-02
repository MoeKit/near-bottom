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

var pad = 300;
var callback = function(){};

var eventContent = function(){
	
	if (!isLock && isNear(pad) && !isFinish) {
		isLock = true;
		callback(done, finish);
	} else {
		// nothing
	}
};

exports.whenNear = function(option) {
	pad = option.pad || 300;
	callback = option.action || function(){};
	window.addEventListener("scroll", eventContent);
};

exports.cancelNear = function(){
	window.removeEventListener("scroll", eventContent);
};