import request from '../utils/request.js';

export const reqMvList = () => {
    return request({
        method: "GET",
        url: "/rec_gedan",
    })
}

// export const reqMvsList = ()=>{
//     return request({
//         method:"GET",
//         url:"/wy/mv/all?area=港台&limit=30"
//     })
// }
