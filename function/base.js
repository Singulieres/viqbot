const in_arr = ( target, arr ) => {
	return arr.some(( item ) => { return item == target })
}

const msg_filter = {
	id: ( group_id, user_id, black, white ) => {
		// 列表中是否有值，有则判断目标是否在其中，没有则返回true
		const group_white = 
			white.group_id.length > 0 ? 
			in_arr( group_id, white.group_id ) : 
			true
		const user_white = 
			white.user_id.length > 0 ? 
			in_arr( user_id, white.user_id ) : 
			true 
		// 只要在黑名单内就不通过
		if( in_arr( group_id, black.group_id ) || in_arr( user_id, black.user_id ) ) return true
		// 作且
		if( group_white && user_white ) return false
		return true
	},
	str: {
		meet: ( text, reg ) => {
			return reg.some(( rule ) => { return rule.test(text) })
		}
	}
}

module.exports = { msg_filter }