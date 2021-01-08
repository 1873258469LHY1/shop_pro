import request from '../utils/request.js';

/* mv动态数据渲染 */
export const reqMvsList = (area, limit) => {
    return request({
        method: "GET",
        url: "/wy/mv/all",
        params: { area, limit }
    })
}
// MV详细数据
export const reqMvDetail = (mvid) => {
    return request({
        method: "GET",
        url: "/wy/mv/detail",
        params: { mvid }
    })
}
