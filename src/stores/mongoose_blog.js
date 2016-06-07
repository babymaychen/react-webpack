var path = require("path");
var mongoose = require("mongoose");
var Technology = require("./model/Technology");
// init db connections
mongoose.connect("mongodb://localhost/blogdb");
mongoose.connection.on("erro", (err) => console.error("mongodb connection error", err));

var Technology = mongoose.model('Technology');

function addBaseData() {
	var tech = new Technology({
		title: "JavaScript 不能不了解的知识",
		commentnum: 1,
		viewnum: 1,
		listcontent: "众所周知，JavaScript是前端工程师必备的技能之一，这也就是为什么我要写这篇文章的原因，我本人呢，有时候又是不太重视基础，导致在编程时，总会去搜搜百度，这就会大大降低开发效率，这篇文章的主要内容就是基础知识，是开发中经常用到，又常常忘记名字的，让我们一步一步来，坚实的地基才会盖得起高楼大厦。",
		content: "<p><strong>JavaScript 介绍</strong></p><p>JavaScript是一种可以用来给网页增加交互性的编程语言，现在也被用于网络服务器（非浏览器环境），如Node.js<br />"+
				"JavaScript分为两部分，ECMAScript（JavaScript核心语音）和DOM（文档对象模型）。ECMAScript，描述了该语言的语法和基本对象。DOM，描述处理网页内容的方法和接口。<br />"+
				"ECMAScript是由ECMA TC39委员会进行标准化的一门编程语言，现在最新版本是ECMAScript 6.0。<br />"+
				"<code>Intl对象</code>是由Ecma TC39进行标准化的ECMAScript国际化API规范是在ECMAScript语言规范之上额外增加的，提供了规则排序（字符串比较），数字格式化，日期时间格式化等功能。<br />"+
				"DOM是用来表达HTML，XHTML及XML文档中的对象或与其进行交互的约定，它是跨平台的，并且与编程语言无关。通过调用DOM树上对象的方法可以操纵这些对象。<br />"+
				"<img src='' alt='历史进程'><br />"+
				"</p>",
		tag: "web"
	});
	tech.save(function() {
		console.log("done ... 孙小妹的标题 ");
	});
}

addBaseData();
