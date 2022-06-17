const { account } = require("./user/login")
const { set } = require("./user/set")
const { msg_filter } = require("./function/base")

const { createClient } = require("oicq")
const client = createClient(account.id)

client.on("message", e => {
	if( !e.group_id ) return
	// 对id过滤：群号，qq号，黑名单，白名单
	if( msg_filter.id( e.group_id, e.sender.user_id, set.limit.blacklist, set.limit.whitelist ) ) return
	// 对内容过滤：原始内容，正则组
	if( msg_filter.str.meet( e.raw_message, set.limit.keyword ) ) return
	// 其他消息处理……
	// console.log(e)
	// e.reply("hello world", true) //true表示引用对方的消息
	e.reply(e.message, false)
})

client.on("system.login.slider", function (e) {
  	console.log("输入ticket：")
  	process.stdin.once("data", ticket => this.submitSlider(String(ticket).trim()))
}).login(account.password)

//之后还可能会输出设备锁url，需要去网页自行验证，也可监听 `system.login.device` 处理