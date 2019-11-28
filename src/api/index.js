// 包含n个接口请求的函数

import ajax from './ajax'

// const url = 'http://localhost:4000'
const url = '/api'
// #1根据经纬度获取位置详情
export const reqAddress = (geohash) => ajax(`${url}/position/${geohash}`)
// #2获取食品分类列表
export const reqFoodTypes = () => ajax(url + '/index_category')
// #3根据经纬度获取商铺列表
export const reqShops = (logitude, latitude) => ajax(url + '/shops', {logitude, latitude})
// // #4根据经纬度和关键字搜索商铺列表
// // #5获取一次性验证码
// // #6用户名密码登陆
// // #7发送短信验证码
// // #8手机号验证码登陆
// // #9根据会话获取用户信息
// // #10用户登出