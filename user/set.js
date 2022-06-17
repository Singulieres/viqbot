const set = {
	limit: {
		//黑白名单：群号、qq号
		blacklist: {
			user_id: [],
			group_id: []
		},
		whitelist: {
			user_id: [],
			group_id: [],
		},
		keyword: [/*关键词屏蔽规则*/
			/@/,
			/^[\.|\/]/,
			/http|www\./,
			// /(\[CQ:image,.+?\]){3,}|\[CQ:at,.+?\]/,
			/[^\d\sa-zA-Z\u4e00-\u9fa5]?(?<!\d{11,16}|[a-z]{11,16}|[A-Z]{11,16})[0-9A-Za-z]{11,16}([^\d\sa-zA-Z\u4e00-\u9fa5]|\n)/,
			/[\u4e00-\u9fa5][a-zA-Z]{0,2}[:：\s]{0,3}\d{6,}\s?/,
			/请(在|使用|(升级)?到)(最?新版|手机QQ).*查/,
			/(游.*)?招(聘|生|.*托|[\S\s]+(联系|咨询))|(.*\n){4}/,
			/^\[(xml消息|视频|发起投票|图文消息)\]$/,
		]
	}
}

module.exports = { set }