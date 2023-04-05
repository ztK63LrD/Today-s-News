// 时间格式化
export const parseTime=(time)=>{
	if(typeof time ==='string'){
		time= parseInt(time)
	}
	const format='{y}-{d}-{m} {h}:{i}:{s}'
	const date = new Date(time);
	const formatObj={
		y:date.getFullYear(),
		m:date.getMonth()+1,//月是从0开始算的
		d:date.getDate(),
		h:date.getHours(),
		i:date.getMinutes(),
		s:date.getSeconds()
	}
	const strTime= format.replace(/{(y|m|d|h|i|s)+}/g,(result,key)=>{
		let value=formatObj[key]
		if(result.length>0 && value <10 ){
			value ='0'+value
		}
		return value
	})
	return strTime
}