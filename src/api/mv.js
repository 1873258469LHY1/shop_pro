import request from '../utils/request.js';

export const reqMvList = () => {
    return request({
        method: "GET",
        url: "/rec_gedan",
    })
}
