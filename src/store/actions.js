// 通过mutation间接更新state的多个方法的对象
import {reqAddress, reqFoodTypes, reqShops} from '../api'
import {RECEIVE_ADDRESS, RECEIVE_FOODTYPES, RECEIVE_SHOPS} from './mutation-types'

export default {
    // 异步获取地址
    async getAddress({commit, state}) {
        const geohash = state.latitude + ',' + state.longitude
        const result = await reqAddress(geohash)
        // 提交一个mutation
        const address = result.data
        commit(RECEIVE_ADDRESS, {address})
    },
    // 异步获取食品分类列表
    async getFoods({commit,}) {
        const result = await reqFoodTypes()
        // 提交一个mutation
        const foodtypes = result.data
        commit(RECEIVE_FOODTYPES, {foodtypes})
    },
    async getShops({commit, state}) {
        const {longitude, latitude} = state
        const result = await reqShops(longitude, latitude)
        // 提交一个mutation
        const shops = result.data
        commit(RECEIVE_SHOPS, {shops})
    },
}